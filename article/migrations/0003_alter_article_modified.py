# Generated by Django 3.2.7 on 2021-09-16 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0002_auto_20210916_1056'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='modified',
            field=models.DateField(auto_now=True),
        ),
    ]