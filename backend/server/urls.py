from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static

def health_check(request):
    return JsonResponse({"status": "AI Civic Sentinel backend running 🚀"})

urlpatterns = [
    path("", health_check),
    path("admin/", admin.site.urls),
    path("api/", include("complaints.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
