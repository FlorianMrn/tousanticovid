from django.db import models
from datetime import datetime, time


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=170, blank=False, default='')
    text = models.TextField(blank=False, default='')
    published = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    imageFile = models.ImageField(upload_to='images/', null=True, verbose_name="")
    videoFile = models.FileField(upload_to='videos/', null=True, verbose_name="", blank=True)

    def __str__(self):
        return self.title

    def item_pubdate(self, item):
        return datetime.combine(item.posted, time())

