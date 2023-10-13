from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('location/', views.location_page, name="home"),
    path('homepage/', views.homepage, name="homepage"),
    path('get_json_data/', views.get_json_data, name='get_json_data'),
]
