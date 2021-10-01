
from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):
    username = None
    numero_agent = models.CharField(max_length=8, blank=False, unique=True)
    USERNAME_FIELD = 'numero_agent'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.numero_agent
