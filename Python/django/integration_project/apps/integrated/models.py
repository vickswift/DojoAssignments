from django.db import models
from ..login_register.models import User

# Create your models here.
class Blog(object):
    title = models.CharField(max_length=45)
    blog = models.TextField(max_length=1000)
    blog_creator = models.ForeignKey(User)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)
