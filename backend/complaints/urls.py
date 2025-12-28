from django.urls import path
from .views import analyze_complaint

urlpatterns = [
    path('analyze/', analyze_complaint),
]
