import Swiper from "swiper";
import {utils} from "./utils";

const SPACE_BETWEEN = 20;
const card = document.body.querySelector(`.tours .tours__list .tours__list-item`);

const swiperTours = new Swiper ('.swiper-container-tours', {
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
      width: utils.setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 2),
    },

    768: {
      width: utils.setWidth(card.offsetWidth, 1.5, SPACE_BETWEEN, 2.8),
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      width: utils.setWidth(card.offsetWidth, 2, SPACE_BETWEEN, 4.2),
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      width: utils.setWidth(card.offsetWidth, 3, SPACE_BETWEEN, 5.3),
    }
  }
});

export {swiperTours};
