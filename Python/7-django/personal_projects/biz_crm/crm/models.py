from django.db import models

# Create your models here.
# ToDo: do validation check for only decimal digits
class Expenditure(models.Model):
    playstation_sales = models.CharField(max_length=100)
    playstation_expenses = models.CharField(max_length=100)

    xbox_sales = models.CharField(max_length=100)
    xbox_expenses = models.CharField(max_length=100)

    accessory_sales = models.CharField(max_length=100)
    accessory_expenses = models.CharField(max_length=100)

    total_sales = models.CharField(max_length=100)
    total_expenses = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
