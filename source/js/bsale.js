const inputBsale = document.querySelector("#bsale-input");
const dropdownBsale = document.querySelector("#bsale-dropdown");
const dropdownPyback = document.querySelector("#payback-dropdown");
const inputPayback = document.querySelector("#payback-input")
const budget1 = document.querySelector("#budget1");
const budget2 = document.querySelector("#budget2");
const budget3 = document.querySelector("#budget3");
const budget4 = document.querySelector("#budget4");
const budget5 = document.querySelector("#budget5");
const budgetInput = document.querySelector("#bsale-price-min");
const headerNav = document.querySelector("#header-nav");
const headerNavWrapper = document.querySelector("#header-nav-wrapper");
const headerMenu = document.querySelector("#header-menu");
const headerLogo = document.querySelector("#header-logo");
const headerClose = document.querySelector("#header-close");

function showBsale(value) {
  inputBsale.value = value;
}

dropdownBsale.onclick = function() {
  dropdownBsale.classList.toggle("active");
}

function showPayback(value) {
  inputPayback.value = value;
}

dropdownPyback.onclick = function() {
  dropdownPyback.classList.toggle("active");
}

budget1.addEventListener('click', (ev) => {
  budgetInput.value = '500 000';
});
budget2.addEventListener('click', (ev) => {
  budgetInput.value = '1 000 000';
});
budget3.addEventListener('click', (ev) => {
  budgetInput.value = '2 000 000';
});
budget4.addEventListener('click', (ev) => {
  budgetInput.value = '3 000 000';
});
budget5.addEventListener('click', (ev) => {
  budgetInput.value = '5 000 000';
});

window.addEventListener('click', (ev) => {
  if (!ev.composedPath().includes(dropdownBsale) && dropdownBsale.classList.contains("active")) {
    dropdownBsale.classList.toggle("active");
  }
  if (!ev.composedPath().includes(dropdownPyback) && dropdownPyback.classList.contains("active")) {
    dropdownPyback.classList.toggle("active");
  }
});

window.addEventListener('touchstart', (ev) => {
  if (!ev.composedPath().includes(dropdownBsale) && dropdownBsale.classList.contains("active")) {
    dropdownBsale.classList.toggle("active");
  }
  if (!ev.composedPath().includes(dropdownPyback) && dropdownPyback.classList.contains("active")) {
    dropdownPyback.classList.toggle("active");
  }
});

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
