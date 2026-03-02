from main.models import Fotos, Musicas
from rest_framework import serializers

class FotosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fotos
        fields = '__all__'

class MusicasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Musicas
        fields = '__all__'