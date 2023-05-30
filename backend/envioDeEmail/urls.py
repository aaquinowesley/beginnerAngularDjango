from django.urls import path
from . import views

urlpatterns = [
    path('', views.enviar_email, name='envia_email')
]
