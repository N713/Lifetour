import Swiper from "swiper";
import {setWidth} from "./utils";

const SPACE_BETWEEN = 8;
const card = document.body.querySelector(`.trainers .trainers__list .trainers__list-item`);

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
      width: card.offsetWidth,
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: setWidth(card.offsetWidth, 2, SPACE_BETWEEN, 2),
    },

    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      width: setWidth(card.offsetWidth, 5, SPACE_BETWEEN, 4),
    },
  }
});

export {instructorsSwiper};
