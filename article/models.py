from django.db import models


# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=170, blank=False, default='')
    text = models.TextField(blank=False, default='')
    published = models.BooleanField(default=False)
    created = models.DateField(editable=False, auto_now_add=True, null=True)
    modified = models.DateField(auto_now=True)
    imageFile = models.ImageField(upload_to='images/', null=True, verbose_name="")
    videoFile = models.FileField(upload_to='videos/', null=True, verbose_name="")

    def __str__(self):
        return self.title


