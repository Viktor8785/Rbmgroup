const headerNav = document.querySelector("#header-nav");
const headerNavWrapper = document.querySelector("#header-nav-wrapper");
const headerMenu = document.querySelector("#header-menu");
const headerLogo = document.querySelector("#header-logo");
const headerClose = document.querySelector("#header-close");

export function header() {
  headerMenu.addEventListener('click', (ev) => {
    headerMenu.classList.add("header_menu--opened");
    headerNav.classList.add("header_nav--opened");
    headerNavWrapper.classList.add("header_nav-wrapper--opened");
    headerLogo.classList.add("header_logo--opened");
    headerClose.classList.add("header_close--opened");
  });

  headerClose.addEventListener('click', (ev) => {
    headerMenu.classList.remove("header_menu--opened");
    headerNav.classList.remove("header_nav--opened");
    headerNavWrapper.classList.remove("header_nav-wrapper--opened");
    headerLogo.classList.remove("header_logo--opened");
    headerClose.classList.remove("header_close--opened");
  });
}

