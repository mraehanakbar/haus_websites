from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,"home.html")

def homepage(request):
    return render(request,"homepage.html")

