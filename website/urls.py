from django.urls import path
from . import views

urlpatterns = [
    path("", views.inicio, name="inicio"),
    path("servicos/", views.servicos, name="servicos"),
    path("veiculo/", views.veiculo, name="veiculo"),
    path("sobre/", views.sobre, name="sobre"),
    path("contato/", views.contato, name="contato"),
    path("orcamento/", views.orcamento, name="orcamento"),
]