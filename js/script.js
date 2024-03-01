const buttons = document.querySelector(".js-buttons");
const nav = document.querySelector(".js-nav");
const menu = document.querySelector(".js-menu");
const main = document.querySelector(".js-main");
const closed = document.querySelector(".js-closed");
const body = document.querySelector(".js-body");


buttons.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  main.classList.toggle("main--blur");
  menu.classList.toggle("menu--active");
  closed.classList.toggle("closed--active");
  body.classList.toggle("overflow-hidden");
});
