from django.db import models

class Complaint(models.Model):
    image = models.ImageField(upload_to="complaints/")
    issue_type = models.CharField(max_length=100)
    severity = models.CharField(max_length=20)
    department = models.CharField(max_length=100)
    summary = models.TextField()
    status = models.CharField(max_length=30, default="Pending")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.issue_type
