from django.shortcuts import render

# Create your views here.
def home(request):
    context = {
        "current_page": "home"
    }
    return render(request, "home.html", context)