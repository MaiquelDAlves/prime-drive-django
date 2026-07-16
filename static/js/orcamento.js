// Botao do formulario de orcamento. Se a pagina nao tiver esse botao, o script nao faz nada.
const botao = document.querySelector("#btn-orcamento");

if (botao) {
  botao.addEventListener("click", () => {
    // Coleta os campos usados para montar a mensagem enviada ao WhatsApp.
    const origem = document.querySelector("#origem").value.trim();
    const destino = document.querySelector("#destino").value.trim();
    const data = document.querySelector("#data").value;
    const hora = document.querySelector("#hora").value;
    const servico = document.querySelector("#servico").value;
    const passageiros = document.querySelector("#passageiros").value;
    const bagagens = document.querySelector("#bagagens").value.trim();
    const observacoes = document.querySelector("#observacoes").value.trim();
    const form = document.querySelector("#form-orcamento");

    // Template da mensagem que chega pronta para o atendimento da Prime Drive.
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

    // encodeURIComponent evita quebrar o link quando a mensagem tem espacos ou quebras de linha.
    const url = `https://wa.me/5549991338651?text=${encodeURIComponent(
      mensagem,
    )}`;

    // Abre o WhatsApp em nova aba e limpa o formulario para uma nova solicitacao.
    window.open(url, "_blank");
    form.reset();
  });
}
