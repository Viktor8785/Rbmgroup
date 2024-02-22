import {header} from './header.js';
import {sliderInit} from './slider.js'
import {cardRent} from './card-rent-template.js';

const map = document.querySelector(".map_img");
const dropdownRent = document.querySelector("#rent-dropdown");
const inputRent = document.querySelector("#rent-input")
const options = document.querySelectorAll(".options_item")
const bSale = document.querySelector("#bsale");
const bSaleMobile = document.querySelector("#bsale-mobile");
const bSaleTitle = document.querySelector("#bsale-title");
const bSaleInput1 = document.querySelector("#bsale-input1");
const bSaleInput2 = document.querySelector("#bsale-input2");
const cardList = document.querySelector('.card-list');
const cards = cardList.children;

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';

for(let j = 0; j < 2; j++) {
  for(let i=0; i < 4; i++) {
    const div = document.createElement('div');
    div.innerHTML = cardRent;
    const container = div.querySelector(".slider_container");
    const pictures = container.querySelectorAll(".card_picture");
    const picture = [...pictures][i].cloneNode(true);
    picture.classList.add('card_picture--active');
    [...pictures][i].remove();
    container.insertAdjacentElement('afterbegin', picture);
    const li = div.firstElementChild;
    li.classList.add('card--deal');
    cardList.insertAdjacentElement('afterbegin', li);
  }
}

[...cards].forEach(card => {
  const slider = card.querySelector('.card_wrapper');
  sliderInit(slider, card, 5);
})

options.forEach(option => {
  option.addEventListener('click', (ev) => {
    inputRent.value = ev.target.innerText;
  });
})

dropdownRent.onclick = function() {
  dropdownRent.classList.toggle("active");
};

bSale.addEventListener('click', (ev) => {
  if (!bSale.checked) {
    bSaleTitle.classList.add('business-sale_disabled');
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
    bSaleInput1.disabled = false;
    bSaleInput2.disabled = false;
  }
});

bSaleMobile.addEventListener('click', (ev) => {
  if (!bSaleMobile.checked) {
    bSaleTitle.classList.add('business-sale_disabled');
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
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

header();
