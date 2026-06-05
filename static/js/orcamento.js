const botao = document.querySelector("#btn-orcamento");

if (botao) {
  botao.addEventListener("click", () => {
    const origem = document.querySelector("#origem").value.trim();
    const destino = document.querySelector("#destino").value.trim();
    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const servico = document.querySelector("#servico").value;
    const passageiros = document.querySelector("#passageiros").value;
    const bagagens = document.querySelector("#bagagens").value.trim();
    const observacoes = document.querySelector("#observacoes").value.trim();
    const form = document.querySelector("#form-orcamento");

    const mensagem = `
Ola, gostaria de solicitar um orcamento.

 Origem: ${origem}
 Destino: ${destino}
 Data: ${data}
 Hora: ${hora}
 Servico: ${servico}
 Passageiros: ${passageiros}
 Bagagens: ${bagagens || "Nao informado"}
 Observacoes: ${observacoes}
 
  `;

    const url = `https://wa.me/5549991338651?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank");
    form.reset();
  });
}
