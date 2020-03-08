import Swiper from "swiper";
import {setWidth} from "./utils";

const SPACE_BETWEEN = 4;
const card = document.body.querySelector(`.trainers .trainers__list .trainers__list-item`);
const cards = document.body.querySelectorAll(`.trainers .trainers__list .trainers__list-item`);
const nextButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--right`);
const prevButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--left`);

let currentBrightCard = 2;
let currentBrightCardMobile = 1;

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

const brightNextCard = () => {
  if (currentBrightCard !== cards.length - 1) {
    prevButton.addEventListener(`click`, brightPrevCard);

    cards[currentBrightCard].style.opacity = `1`;
    currentBrightCard += 1;
    console.log(currentBrightCard);
    cards[currentBrightCard].style.opacity = `0.2`;
  } else if (currentBrightCard === cards.length - 1) {
    cards[currentBrightCard].style.opacity = `1`;
    currentBrightCard += 2;
    nextButton.removeEventListener(`click`, brightNextCard);
  }
};

const brightPrevCard = () => {
  if (currentBrightCard !== 2) {
    nextButton.addEventListener(`click`, brightNextCard);

    currentBrightCard = currentBrightCard - 1;
    console.log(currentBrightCard);
    cards[currentBrightCard].style.opacity = `0.2`;
  } else if(currentBrightCard === cards.length - 1) {
    cards[currentBrightCard].style.opacity = `1`;
  }
};

const brightCard = () => {
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    cards[currentBrightCard].style.opacity = `0.2`;

    nextButton.addEventListener(`click`, brightNextCard);
    prevButton.addEventListener(`click`, brightPrevCard);
  }
};

export {instructorsSwiper, brightCard};
