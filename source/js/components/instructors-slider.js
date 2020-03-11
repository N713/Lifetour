import Swiper from "swiper";
import {utils} from "./utils";

const SPACE_BETWEEN = 4;
const CLASS_NAME = `lightness`;

const card = document.body.querySelector(`.trainers .trainers__list .trainers__list-item`);
const cards = Array.from(document.body.querySelectorAll(`.trainers .trainers__list .trainers__list-item`));
const nextButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--right`);
const prevButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--left`);

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
      width: utils.setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 5),
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      width: utils.setWidth(card.offsetWidth, 2, SPACE_BETWEEN, 8),
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      width: utils.setWidth(card.offsetWidth, 4, SPACE_BETWEEN, 8),
    },

    1210: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
});

const lightCard = () => {
  const next = document.body.querySelector(`.trainers .trainers__list .swiper-slide-next`);
  const active = document.body.querySelector(`.trainers .trainers__list .swiper-slide-active`);

  if (cards.indexOf(active) === cards.length - 1) {
    nextButton.removeEventListener(`click`, lightCard);
  } else {
    next.classList.add(CLASS_NAME);
  }
};

const removeLightness = () => {
  const active = document.body.querySelector(`.trainers .trainers__list .swiper-slide-active`);
  active.classList.remove(CLASS_NAME);
};

const addTrainersListeners = () => {
  lightCard();

  nextButton.addEventListener(`click`, lightCard);
  nextButton.addEventListener(`click`, removeLightness);
  prevButton.addEventListener(`click`, lightCard);
};

export {instructorsSwiper, addTrainersListeners};
