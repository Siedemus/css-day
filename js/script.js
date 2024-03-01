const buttons = document.querySelector(".js-buttons");
const nav = document.querySelector(".js-nav");
const menu = document.querySelector(".js-menu");
const main = document.querySelector(".js-main");
const closed = document.querySelector(".js-closed");

buttons.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  main.classList.toggle("main--blur");
  menu.classList.toggle("menu--active");
  closed.classList.toggle("closed--active");
});
