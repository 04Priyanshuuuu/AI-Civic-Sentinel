from django.urls import path
from .views import (
    analyze_complaint,
    create_complaint,
    list_reports,
    update_status,
)

urlpatterns = [
    path("analyze/", analyze_complaint),
    path("complaints/", create_complaint),
    path("reports/", list_reports),
    path("complaints/<int:id>/status/", update_status),
]
