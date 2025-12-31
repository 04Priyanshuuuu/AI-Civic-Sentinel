from django.http import JsonResponse
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os, json
from .models import Complaint
from src.services.gemini_vision import analyze_image
from src.services.gemini_text import analyze_text


def analyze_complaint(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=405)

    image = request.FILES.get("image")
    if not image:
        return JsonResponse({"error": "No image uploaded"}, status=400)

    # 1️⃣ Save image
    file_path = default_storage.save(
        f"complaints/{image.name}",
        ContentFile(image.read())
    )
    full_path = os.path.join("media", file_path)

    # 2️⃣ Gemini Vision
    vision_output = analyze_image(full_path)

    # 3️⃣ Gemini Pro (structured JSON)
    text_output = analyze_text(vision_output)

    # 4️⃣ Parse JSON safely
    try:
        structured_data = json.loads(text_output)
    except Exception:
        return JsonResponse({
            "error": "AI returned invalid JSON",
            "raw_output": text_output
        }, status=500)

    # 5️⃣ Save to DB
    complaint = Complaint.objects.create(
            image=file_path,
            issue_type=structured_data["issue_type"],
            severity=structured_data["severity"],
            department=structured_data["department"],
            summary=structured_data["summary"]
    )

    return JsonResponse({
        "success": True,
        "complaint_id": complaint.id,
        "ai_result": structured_data
    })



def list_reports(request):
    data = Complaint.objects.all().order_by("-created_at").values()
    return JsonResponse(list(data), safe=False)





