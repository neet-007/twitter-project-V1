# Generated by Django 4.2.8 on 2023-12-13 16:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0013_alter_post_list'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='email_verifed',
            field=models.BooleanField(default=False),
        ),
        migrations.CreateModel(
            name='Verification',
            fields=[
                ('token', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='verify_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
