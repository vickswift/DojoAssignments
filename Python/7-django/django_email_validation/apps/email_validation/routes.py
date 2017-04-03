from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^add_email$', views.add_email, name="addemail"),
    url(r'^delete_email/(?P<id>\d+)$', views.delete_email, name="deleteemail"),
    url(r'^deletethis/(?P<id>\d+)$', views.delete_this, name="deletethis")
]
