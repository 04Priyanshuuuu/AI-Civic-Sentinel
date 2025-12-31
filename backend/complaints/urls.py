from django.urls import path
from .views import analyze_complaint
from .views import list_reports

urlpatterns = [
    path('analyze/', analyze_complaint),
    path("reports/", list_reports),

]
