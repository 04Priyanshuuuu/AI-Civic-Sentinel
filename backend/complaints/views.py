from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.conf import settings
import os, json, traceback

from .models import Complaint
from src.services.gemini_vision import analyze_image
from src.services.gemini_text import analyze_text


# =========================
# 1️⃣ ANALYZE ONLY (NO DB)
# =========================
@csrf_exempt
def analyze_complaint(request):
    if request.method != "POST":
        return JsonResponse({"success": False, "error": "POST required"}, status=405)

    image = request.FILES.get("image")
    if not image:
        return JsonResponse({"success": False, "error": "Image required"}, status=400)

    try:
        # save temp image
        temp_path = default_storage.save(
            f"temp/{image.name}",
            ContentFile(image.read())
        )

        full_path = os.path.join(settings.MEDIA_ROOT, temp_path)

        vision_output = analyze_image(full_path)
        text_output = analyze_text(vision_output)
        structured_data = json.loads(text_output)

        image_url = request.build_absolute_uri(
            settings.MEDIA_URL + temp_path
        )

        return JsonResponse({
            "success": True,
            "ai_result": structured_data,
            "image_url": image_url   # 👈🔥 THIS WAS MISSING
        })

    except Exception as e:
        traceback.print_exc()
        return JsonResponse({"success": False, "error": str(e)}, status=500)


# =========================
# 2️⃣ SUBMIT COMPLAINT (DB)
# =========================
@csrf_exempt
def create_complaint(request):
    if request.method != "POST":
        return JsonResponse({"success": False, "error": "POST required"}, status=405)

    try:
        image = request.FILES.get("image")

        complaint = Complaint.objects.create(
            image=image,   # 👈🔥 THIS
            issue_type=request.POST.get("issue_type"),
            severity=request.POST.get("severity"),
            department=request.POST.get("department"),
            summary=request.POST.get("summary"),
            status="Pending"
        )

        return JsonResponse({
            "success": True,
            "complaint_id": complaint.id
        })

    except Exception as e:
        traceback.print_exc()
        return JsonResponse({"success": False, "error": str(e)}, status=500)



# =========================
# 3️⃣ LIST REPORTS
# =========================
def list_reports(request):
    reports = Complaint.objects.all().order_by("-created_at")

    data = [{
        "id": r.id,
        "issue_type": r.issue_type,
        "severity": r.severity,
        "department": r.department,
        "summary": r.summary,
        "status": r.status,
        "created_at": r.created_at.isoformat(),
    } for r in reports]

    return JsonResponse({"success": True, "reports": data})


# =========================
# 4️⃣ ADMIN STATUS UPDATE
# =========================
@csrf_exempt
def update_status(request, id):
    if request.method != "PATCH":
        return JsonResponse({"error": "PATCH required"}, status=405)

    try:
        data = json.loads(request.body)
        complaint = Complaint.objects.get(id=id)
        complaint.status = data.get("status", complaint.status)
        complaint.save()

        return JsonResponse({"success": True})

    except Complaint.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)
