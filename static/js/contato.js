const botaoContato = document.querySelector("#btn-contato");

if (botaoContato) {
  botaoContato.addEventListener("click", () => {
    const nome = document.querySelector("#contato-nome").value.trim();
    const email = document.querySelector("#contato-email").value.trim();
    const telefone = document.querySelector("#contato-telefone").value.trim();
    const mensagemContato = document
      .querySelector("#contato-mensagem")
      .value.trim();
    const form = document.querySelector("#form-contato");

    const mensagem = `
Ola, gostaria de entrar em contato.

 Nome: ${nome}
 E-mail: ${email}
 Telefone / WhatsApp: ${telefone}
 Mensagem: ${mensagemContato}
 
  `;

    const url = `https://wa.me/5549991338651?text=${encodeURIComponent(
      mensagem,
    )}`;

    window.open(url, "_blank");
    form.reset();
  });
}
