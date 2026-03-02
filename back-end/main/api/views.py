from main.models import Fotos, Musicas
from .serializers import FotosSerializer, MusicasSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class MusicaApiView(APIView):
    def get(self, request):
        musicas = Musicas.objects.all()
        serializer = MusicasSerializer(musicas, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MusicasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class FotoApiView(APIView):
    def get(self, request):
        fotos = Fotos.objects.all()
        serializer = FotosSerializer(fotos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FotosSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)