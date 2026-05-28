const botao = document.querySelector("#btn-orcamento");

if (botao) {
  botao.addEventListener("click", () => {
    const origem = document.querySelector("#origem").value;
    const destino = document.querySelector("#destino").value;
    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const servico = document.querySelector("#servico").value;
    const passageiros = document.querySelector("#passageiros").value;
    const observacoes = document.querySelector("#observacoes").value;
    const form = document.querySelector("#form-orcamento");

    const mensagem = `
Ola, gostaria de solicitar um orcamento.

 Origem: ${origem}
 Destino: ${destino}
 Data: ${data}
 Hora: ${hora}
 Servico: ${servico}
 Passageiros: ${passageiros}
 Observacoes: ${observacoes}
 
  `;

    const url = `https://wa.me/5549991338651?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank");
    form.reset();
  });
}
