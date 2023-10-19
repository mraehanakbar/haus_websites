from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('location/', views.location_page, name="location"),
    path('homepage/', views.homepage, name="homepage"),
    path('menu/', views.menu_page, name="menu"),
    path('get_json_data_store/', views.get_json_data_store, name='get_json_data_store'),
    path('get_json_data_store_name/', views.get_json_data_store_name, name='get_json_data_store_name'),
]
