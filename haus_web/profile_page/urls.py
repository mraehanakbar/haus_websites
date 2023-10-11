from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('location/', views.location_page, name="home"),
    path('homepage/', views.homepage, name="homepage")
]
