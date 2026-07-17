from django.shortcuts import render


# Cada view abaixo apenas renderiza um template estatico da pagina correspondente.
def inicio(request):
    return render(request, "website/inicio.html")


def servicos(request):
    return render(request, "website/servicos.html")


def veiculo(request):
    return render(request, "website/veiculo.html")


def sobre(request):
    return render(request, "website/sobre.html")


def contato(request):
    return render(request, "website/contato.html")


def orcamento(request):
    return render(request, "website/orcamento.html")


def nfc(request):
    return render(request, "website/nfc.html")
