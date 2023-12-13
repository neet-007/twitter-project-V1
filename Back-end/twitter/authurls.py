from django.urls import path
from . import views

urlpatterns = [
    path('send-email/<str:type>', views.send_email_view.as_view(), name='send-email'),
    path('verification', views.verify_email.as_view(), name='verify_email'),
]