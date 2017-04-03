from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^process_register$', views.register, name="register"),
    url(r'^process_login$', views.login, name="login"),
    url(r'^success/(?P<id>\d+)$', views.success, name="success")
]
