from django.shortcuts import render

# Create your views here.
def character_creator(request):
    context = {
        "current_page": "character_creator"
    }
    return render(request, "character_creator.html", context)

def coin_converter(request):
    context = {
        "current_page": "coin_converter"
    }
    return render(request, "coin_converter.html", context)