from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%d/%m/%Y à %Hh%M")

    class Meta:
        model = Article
        fields = ('id', 'title', 'text', 'published', 'created', 'modified', 'imageFile', 'videoFile')