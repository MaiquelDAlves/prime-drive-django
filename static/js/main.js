// Elementos do menu mobile definidos no template base.
const menu = document.querySelector("#mobile-menu");
const openMenu = document.querySelector("#btn-menu");
const closeMenu = document.querySelector("#menu-close");

if (menu && openMenu && closeMenu) {
  // A transicao entra apenas depois do carregamento para evitar animacao inicial.
  window.addEventListener("load", () => {
    menu.classList.add("transition-transform", "duration-300");
  });

  // Abre o menu lateral movendo-o para dentro da tela.
  openMenu.addEventListener("click", () => {
    menu.classList.add("translate-x-0");
    menu.classList.remove("translate-x-full");
  });

  // Fecha o menu lateral devolvendo-o para fora da tela.
  closeMenu.addEventListener("click", () => {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
  });
}
