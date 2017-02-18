from django.conf.urls import url
from . import views           # This line is new!

urlpatterns = [
url(r'^$', views.index),     # This line has changed!
url(r'^users$', views.users),
url(r'^new_user$', views.create),
url(r'^users/(?P<id>\d+)$', views.show)
]
