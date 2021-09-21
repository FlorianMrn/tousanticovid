from django.contrib import admin
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'text', 'published', 'created', 'modified', 'imageFile', 'videoFile')


admin.site.register(Article, ArticleAdmin)
