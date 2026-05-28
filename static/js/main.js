const menu = document.querySelector("#mobile-menu");
const openMenu = document.querySelector("#btn-menu");
const closeMenu = document.querySelector("#menu-close");

if (menu && openMenu && closeMenu) {
  window.addEventListener("load", () => {
    menu.classList.add("transition-transform", "duration-300");
  });

  openMenu.addEventListener("click", () => {
    menu.classList.add("translate-x-0");
    menu.classList.remove("translate-x-full");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
  });
}
