const mediaQueryMobileOnly = window.matchMedia('(max-width: 719px)');
const mediaQueryTablet = window.matchMedia('(min-width: 720px)');
let sliderList;
let sliderTrack = [];
let slides = [];
let bullets = [];
let sectors = [];
let arrows;
let prev;
let next;
let slideWidth;
let lastTrf;
let posThreshold;
let slidesCount = [];
let cardIndex = 0;
let cards = [];
let currentCardIndex = -1;
let slideIndex = [];
let sliderRef
let posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,

    trfRegExp = /([-0-9.]+(?=px))/;

  mediaQueryMobileOnly.addEventListener('change', handleWidthChangeMobile);
  mediaQueryTablet.addEventListener('change', handleWidthChangeTablet);

  function handleWidthChangeMobile(e) {
    if (e.matches) {
      slideWidth = 329;
      startSettings();
    }
  }

  function handleWidthChangeTablet(e) {
    if (e.matches) {
      slideWidth = 313;
      startSettings();
    }
  }

  function startSettings() {
    for(let i=0; i < cardIndex; i++) {
      sliderTrack[i].style.transform = 'translate3d(0px, 0px, 0px)';
      bullets[i].forEach(bullet => {
        if(bullet.classList.contains('bullet-wrapper--active')) {
          bullet.classList.remove('bullet-wrapper--active');
        }
      });
      bullets[i][0].classList.add('bullet-wrapper--active');
      slideIndex[i] = 0;
    }
    lastTrf = (slidesCount[cardIndex] -1) * slideWidth;
    posThreshold = slideWidth * 0.35;
  }

  const getEvent = function() {

    cards.forEach((card, index) => {
      if(event.composedPath().includes(card)) {
        currentCardIndex = index
        //console.log(currentCardIndex)
      }
    });

    return (event.type.search('touch') !== -1) ? event.touches[0] : event;
  };

  const slide = function() {
    if (transition) {
      sliderTrack[currentCardIndex].style.transition = 'transform .5s';
    }
    sliderTrack[currentCardIndex].style.transform = `translate3d(-${slideIndex[currentCardIndex] * slideWidth}px, 0px, 0px)`;
    bullets[currentCardIndex].forEach(bullet => {
      if(bullet.classList.contains('bullet-wrapper--active')) {
        bullet.classList.remove('bullet-wrapper--active');
      }
    });
    bullets[currentCardIndex][slideIndex[currentCardIndex]].classList.add('bullet-wrapper--active');
    // prev.classList.toggle('disabled', slideIndex[currentCardIndex] === 0);
    // next.classList.toggle('disabled', slideIndex[currentCardIndex] === slidesCount[currentCardIndex] - 1);
  };

  const swipeStart = function() {
    let evt = getEvent();

    if (allowSwipe) {

      transition = true;

      nextTrf = (slideIndex[currentCardIndex] + 1) * -slideWidth;
      prevTrf = (slideIndex[currentCardIndex] - 1) * -slideWidth;

      posInit = posX1 = evt.clientX;
      posY1 = evt.clientY;

      sliderTrack[currentCardIndex].style.transition = '';

      document.addEventListener('touchmove', swipeAction);
      //document.addEventListener('mousemove', swipeAction);
      document.addEventListener('touchend', swipeEnd);
      //document.addEventListener('mouseup', swipeEnd);

      // sliderList.classList.remove('grab');
      // sliderList.classList.add('grabbing');
    }
  };

  const swipeAction = function() {

    let evt = getEvent(),
      style = sliderTrack[currentCardIndex].style.transform,
      transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    posY2 = posY1 - evt.clientY;
    posY1 = evt.clientY;

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      let posY = Math.abs(posY2);
      if (posY > 7 || posX2 === 0) {
        isScroll = true;
        allowSwipe = false;
      } else if (posY < 7) {
        isSwipe = true;
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex[currentCardIndex] === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex[currentCardIndex] === slidesCount[currentCardIndex] - 1) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf);
          return;
        } else {
          allowSwipe = true;
        }
      }

      // запрет протаскивания дальше одного слайда
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge();
        return;
      }

      // двигаем слайд
      sliderTrack[currentCardIndex].style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }

  };

  const swipeEnd = function() {
    posFinal = posInit - posX1;

    isScroll = false;
    isSwipe = false;

    document.removeEventListener('touchmove', swipeAction);
    //document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    //document.removeEventListener('mouseup', swipeEnd);
    //console.log(sliderList)
    // sliderList.classList.add('grab');
    // sliderList.classList.remove('grabbing');

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex[currentCardIndex]--;
        } else if (posInit > posX1) {
          slideIndex[currentCardIndex]++;
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false;
        slide();
      } else {
        allowSwipe = true;
      }

    } else {
      allowSwipe = true;
    }

  };

  const setTransform = function(transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack[currentCardIndex].style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
      }
    }
    allowSwipe = false;
  };

  const reachEdge = function() {
    transition = false;
    swipeEnd();
    allowSwipe = true;
  };

  const setActiveEl = function (targetEl) {
    getEvent()
    //console.log(sectors[currentCardIndex])
    const index = [...sectors[currentCardIndex]].indexOf(targetEl);
    slides[currentCardIndex].forEach(slide => {
      if(slide.classList.contains('card_picture--active')) {
        slide.classList.remove('card_picture--active')
      }
    });
    bullets[currentCardIndex].forEach(bullet => {
      if(bullet.classList.contains('bullet-wrapper--active')) {
        bullet.classList.remove('bullet-wrapper--active');
      }
    });
    slides[currentCardIndex][index].classList.add('card_picture--active');
    bullets[currentCardIndex][index].classList.add('bullet-wrapper--active');
  };

export function sliderInit(slider, card, n) {
  sliderRef = slider
  //slidesCount = n;
  cards[cardIndex] = card;
  slideIndex[cardIndex] = 0;
  sliderList = slider.querySelector('.card_slider');
  sliderTrack[cardIndex] = slider.querySelector('.slider_container');
  slides[cardIndex] = slider.querySelectorAll('.card_picture');
  bullets[cardIndex] = slider.querySelectorAll('.bullet-wrapper');
  sectors[cardIndex] = slider.querySelectorAll('.sector');

  //arrows = slider.querySelector('.slider-arrows');
  // prev = arrows.children[0];
  // next = arrows.children[1];
  slidesCount[cardIndex] = slides[cardIndex].length;
  slideWidth = slides[cardIndex][0].offsetWidth;
  lastTrf = (slides[cardIndex].length -1) * slideWidth;
  posThreshold = slideWidth * 0.35;

  sliderTrack[cardIndex].style.transform = 'translate3d(0px, 0px, 0px)';
  //sliderList.classList.add('grab');
  sectors[cardIndex].forEach(sector => {
    sector.addEventListener('mouseover', (e) => setActiveEl(e.target));
  })
  sliderTrack[cardIndex].addEventListener('transitionend', () => allowSwipe = true);
  sliderList.addEventListener('touchstart', swipeStart);
  //sliderList.addEventListener('mousedown', swipeStart);

  cardIndex++;
  // arrows.addEventListener('click', function(ev) {
  //   let target = ev.target;

  //   if (target.classList.contains('next')) {
  //     slideIndex[currentCardIndex]++;
  //   } else if (target.classList.contains('prev')) {
  //     slideIndex[currentCardIndex]--;
  //   } else {
  //     return;
  //   }

  //   slide();
  // });
}



