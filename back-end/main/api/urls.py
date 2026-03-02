from main.models import Fotos, Musicas
from django.urls import path
from .views import MusicaApiView, FotoApiView

urlpatterns = [
    path('musicas/', MusicaApiView.as_view(), name='musicas_api'),
    path('fotos/', FotoApiView.as_view(), name='fotos_api'),
]