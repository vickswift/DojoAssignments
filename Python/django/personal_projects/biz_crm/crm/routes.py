from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^index$', views.index, name='index'),
    url(r'^addexpenditure$', views.add_expenditure, name="addExpenditure"),
    url(r'^delete_expenditure/(?P<id>\d+)$', views.delete_expenditure, name="deleteExpenditure"),
    url(r'^deletethis/(?P<id>\d+)$', views.delete_this, name="deletethis"),
    # url(r'^clear_page/(?P<id>\d+)$', views.clear_page, name="clearPage"),
    # url(r'^clear/(?P<id>\d+)$', views.clear_all, name="clearAll"),

]
