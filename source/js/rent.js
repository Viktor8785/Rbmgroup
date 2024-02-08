const dropdownRent = document.querySelector("#rent-dropdown");
const inputRent = document.querySelector("#rent-input")
const bSale = document.querySelector("#bsale");
const bSaleMobile = document.querySelector("#bsale-mobile");
const bSaleTitle = document.querySelector("#bsale-title");
const bSaleInput1 = document.querySelector("#bsale-input1");
const bSaleInput2 = document.querySelector("#bsale-input2");
const headerNav = document.querySelector("#header-nav");
const headerNavWrapper = document.querySelector("#header-nav-wrapper");
const headerMenu = document.querySelector("#header-menu");
const headerLogo = document.querySelector("#header-logo");
const headerClose = document.querySelector("#header-close");

function show(value) {
  inputRent.value = value;
}

dropdownRent.onclick = function() {
  dropdownRent.classList.toggle("active");
}

bSale.addEventListener('click', (ev) => {
  if (!bSale.checked) {
    bSaleTitle.classList.add('bussines-sale_disabled');
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('bussines-sale_disabled');
    bSaleInput1.disabled = false;
    bSaleInput2.disabled = false;
  }
});

bSaleMobile.addEventListener('click', (ev) => {
  if (!bSaleMobile.checked) {
    bSaleTitle.classList.add('bussines-sale_disabled');
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('bussines-sale_disabled');
    bSaleInput1.disabled = false;
    bSaleInput2.disabled = false;
  }
});

window.addEventListener('click', (ev) => {
  if (!ev.composedPath().includes(dropdownRent) && dropdownRent.classList.contains("active")) {
    dropdownRent.classList.toggle("active");
  }
});

window.addEventListener('touchstart', (ev) => {
  if (!ev.composedPath().includes(dropdownRent) && dropdownRent.classList.contains("active")) {
    dropdownRent.classList.toggle("active");
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
