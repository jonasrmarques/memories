from django.db import models

class Fotos(models.Model):
    foto = models.TextField(blank=True, null=True)

class Musicas(models.Model):
    titulo = models.CharField(max_length=255, blank=True, null=True)
    spotify = models.URLField(blank=True, null=True)