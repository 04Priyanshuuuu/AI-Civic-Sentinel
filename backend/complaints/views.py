from django.http import JsonResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
import os, json, traceback

from .models import Complaint
from src.services.gemini_vision import analyze_image
from src.services.gemini_text import analyze_text


@csrf_exempt
def analyze_complaint(request):
    if request.method != "POST":
        return JsonResponse(
            {"success": False, "error": "POST request required"},
            status=405
        )

    image = request.FILES.get("image")
    if not image:
        return JsonResponse(
            {"success": False, "error": "No image uploaded"},
            status=400
        )

    try:
        # 1️⃣ Save image
        file_path = default_storage.save(
            f"complaints/{image.name}",
            ContentFile(image.read())
        )

        full_path = os.path.join(settings.MEDIA_ROOT, file_path)
        print("IMAGE SAVED AT:", full_path)

        # 2️⃣ Gemini Vision
        vision_output = analyze_image(full_path)
        print("VISION OUTPUT:", vision_output)

        if not vision_output or not isinstance(vision_output, str):
            raise Exception("Gemini Vision returned empty/invalid output")

        # 3️⃣ Gemini Text (structured JSON)
        text_output = analyze_text(vision_output)
        print("TEXT OUTPUT (RAW):", text_output)

        if not text_output or not isinstance(text_output, str):
            raise Exception("Gemini Text returned empty/invalid output")

        # 4️⃣ Parse JSON
        try:
            structured_data = json.loads(text_output)
        except Exception:
            return JsonResponse(
                {
                    "success": False,
                    "error": "AI returned invalid JSON",
                    "raw_output": text_output
                },
                status=500
            )

        # 5️⃣ Save to DB
        complaint = Complaint.objects.create(
            image=file_path,
            issue_type=structured_data.get("issue_type", "Unknown"),
            severity=structured_data.get("severity", "Low"),
            department=structured_data.get("department", "General"),
            summary=structured_data.get("summary", "")
        )

        # 6️⃣ Success
        return JsonResponse({
            "success": True,
            "complaint_id": complaint.id,
            "ai_result": structured_data
        })

    except Exception as e:
        # 🔥 Full traceback for debugging
        print("ANALYZE ERROR:")
        traceback.print_exc()

        return JsonResponse(
            {
                "success": False,
                "error": str(e)
            },
            status=500
        )


def list_reports(request):
    data = Complaint.objects.all().order_by("-created_at").values()
    return JsonResponse(list(data), safe=False)
