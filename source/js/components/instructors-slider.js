import Swiper from "swiper";
import {setWidth} from "./utils";

const SPACE_BETWEEN = 4;
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
      width: setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 5),
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
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

export {instructorsSwiper};
