from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^registration$', views.process_registration, name = 'process_registration'),
    url(r'^login$', views.login, name = 'login'),
    url(r'^success$', views.success, name='success'),
    url(r'^logout$', views.logout, name = 'logout'),
    url(r'^', views.index, name = 'login_index'),
]
