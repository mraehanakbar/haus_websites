from django.shortcuts import render
from django.http import JsonResponse
import json

# Create your views here.
def home(request):
    return render(request,"home.html")

def homepage(request):
    return render(request,"homepage.html")


def location_page(request):
    return render(request, "location_page.html", context={})

def menu_page(request):
    return render(request, "menu_page.html", context={})

def get_json_data_store(request):
    data_path = 'theme/static/data/data.json'
    with open(data_path, 'r') as file:
      data = json.load(file) 

    return JsonResponse(data, safe=False)

def get_json_data_store_name(request):
    data_path = 'theme/static/data/store_name_by_cities.json'
    with open(data_path, 'r') as file:
      data = json.load(file) 

    return JsonResponse(data, safe=False)
