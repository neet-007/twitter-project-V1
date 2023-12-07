# Generated by Django 4.2.8 on 2023-12-07 23:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0011_lists_post_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='lists',
            name='user_list',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='user_list', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
