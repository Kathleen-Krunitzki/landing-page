const menu = document.querySelector(".cabecalho-menu");
const menuItems = document.querySelectorAll(".cabecalho-menu-item");
const hamburger = document.querySelector(".image-menu");

function toggleMenu() {
  if (menu.classList.contains("menu-aberto")) {
    menu.classList.remove("menu-aberto");
  } else {
    menu.classList.add("menu-aberto");
  }
}

hamburger.addEventListener("click", toggleMenu);
