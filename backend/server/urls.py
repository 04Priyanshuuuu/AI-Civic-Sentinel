from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({
        "status": "AI Civic Sentinel Django backend running 🚀"
    })

urlpatterns = [
    path('', health_check),
    path('admin/', admin.site.urls),
    path('api/', include('complaints.urls')),  # 👈 ADD THIS
]


from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
