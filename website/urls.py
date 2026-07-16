from django.urls import path
from . import views

# Rotas publicas do site. O name de cada rota e usado nos templates com {% url %}.
urlpatterns = [
    path("", views.inicio, name="inicio"),
    path("servicos/", views.servicos, name="servicos"),
    path("veiculo/", views.veiculo, name="veiculo"),
    path("sobre/", views.sobre, name="sobre"),
    path("contato/", views.contato, name="contato"),
    path("orcamento/", views.orcamento, name="orcamento"),
]
