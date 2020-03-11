import Swiper from "swiper";
import {utils} from "./utils";

const SPACE_BETWEEN = 15;
const SPACE_BETWEEN_MOBILE = 21;

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
      width: utils.setWidth(card.offsetWidth,1,SPACE_BETWEEN_MOBILE, 1),
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: utils.setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 1.2),
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      width: utils.setWidth(card.offsetWidth, 3, SPACE_BETWEEN, 1.2),
    }
  }
});

export {swiperFeedback};
