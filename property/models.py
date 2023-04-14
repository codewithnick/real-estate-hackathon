from django.db import models

# Create your models here.
class Property(models.Models):
    title=models.TextField()
    description=models.TextField()
    price=models.TextField()