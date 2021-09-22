from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer
from .models import Article


# Create your views here.
class ArticleView(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
