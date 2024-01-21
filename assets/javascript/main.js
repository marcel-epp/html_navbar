const header = document.querySelector('[data-js="header"]');
const navbarMenu = document.querySelector('[data-js="navbar__menu"]');
const navbarBrandToggle = document.querySelector('[data-js="navbar__brand__button"]');

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    navbarMenu.style.display = "flex";
    navbarMenu.style.borderBottom = "none";
  } else {
    navbarMenu.style.display = "none";
  }
});

navbarBrandToggle.addEventListener("click", () => {
  if (window.getComputedStyle(navbarMenu).display === "none") {
    navbarMenu.style.display = "flex";
  } else {
    navbarMenu.style.display = "none";
  }
});
