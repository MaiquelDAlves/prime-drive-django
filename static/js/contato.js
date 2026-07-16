// Botao do formulario de contato. O if permite carregar este arquivo sem erro em outras paginas.
const botaoContato = document.querySelector("#btn-contato");

if (botaoContato) {
  botaoContato.addEventListener("click", () => {
    // Captura os dados digitados antes de montar o texto do WhatsApp.
    const nome = document.querySelector("#contato-nome").value.trim();
    const email = document.querySelector("#contato-email").value.trim();
    const telefone = document.querySelector("#contato-telefone").value.trim();
    const mensagemContato = document
      .querySelector("#contato-mensagem")
      .value.trim();
    const form = document.querySelector("#form-contato");

    // Mensagem padronizada para facilitar a leitura no atendimento.
    const mensagem = `
Ola, gostaria de entrar em contato.

 Nome: ${nome}
 E-mail: ${email}
 Telefone / WhatsApp: ${telefone}
 Mensagem: ${mensagemContato}
 
  `;

    // Codifica o texto para ser usado com seguranca dentro do link do WhatsApp.
    const url = `https://wa.me/5549991338651?text=${encodeURIComponent(
      mensagem,
    )}`;

    // Envia o usuario para o WhatsApp e deixa o formulario pronto para outra mensagem.
    window.open(url, "_blank");
    form.reset();
  });
}
