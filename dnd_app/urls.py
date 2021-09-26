from django.urls import path
from . import views

app_name = 'dnd_app'
urlpatterns = [
    path('character_creator/', views.character_creator, name='character_creator'),
    path('coin_converter/', views.coin_converter, name='coin_converter'),
]
