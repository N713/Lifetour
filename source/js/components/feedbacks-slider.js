import Swiper from "swiper";
import {setWidth} from "./utils";

const GAP = 5;
const SPACE_BETWEEN = 15;
const card = document.body.querySelector(`.feedback .feedback__list .feedback__list-item`);

const swiperFeedback = new Swiper ('.swiper-container-feedback', {
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
      width: setWidth(card.offsetWidth,1,SPACE_BETWEEN, 3) + GAP,
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 2),
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      width: setWidth(card.offsetWidth, 3, SPACE_BETWEEN, 2),
    },
  }
});

export {swiperFeedback};
