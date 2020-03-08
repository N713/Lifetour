import Swiper from "swiper";
import {setWidth} from "./utils";

const SPACE_BETWEEN = 4;
const card = document.body.querySelector(`.trainers .trainers__list .trainers__list-item`);
const cards = document.body.querySelectorAll(`.trainers .trainers__list .trainers__list-item`);
const nextButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--right`);
const prevButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--left`);

let currentLightCard = 2;
let currentLightCardMobile = 1;

const instructorsSwiper = new Swiper ('.swiper-container-trainers', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: SPACE_BETWEEN,
      width: setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 5),
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      width: setWidth(card.offsetWidth, 2, SPACE_BETWEEN, 8),
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      width: setWidth(card.offsetWidth, 4, SPACE_BETWEEN, 8),
    },

    1210: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
});

const lightNextCard = () => {
  if (currentLightCard !== cards.length - 1) {
    prevButton.addEventListener(`click`, lightPrevCard);

    cards[currentLightCard].classList.remove(`lightness`);
    currentLightCard += 1;
    console.log(currentLightCard);
    cards[currentLightCard].classList.add(`lightness`);
  } else if (currentLightCard === cards.length - 1) {
    cards[currentLightCard].classList.remove(`lightness`);
    currentLightCard += 2;
    nextButton.removeEventListener(`click`, lightNextCard);
  }
};

const lightPrevCard = () => {
  if (currentLightCard !== 2) {
    nextButton.addEventListener(`click`, lightNextCard);

    currentLightCard = currentLightCard - 1;
    console.log(currentLightCard);
    cards[currentLightCard].classList.add(`lightness`);
  } else if(currentLightCard === cards.length - 1) {
    cards[currentLightCard].classList.remove(`lightness`);
  }
};

const lightCard = () => {
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    cards[currentLightCard].classList.add(`lightness`);

    nextButton.addEventListener(`click`, lightNextCard);
    prevButton.addEventListener(`click`, lightPrevCard);
  }
};

export {instructorsSwiper, lightCard};
