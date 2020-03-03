import Swiper from "swiper";
import {setWidth} from "./utils";

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
      width: setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 2),
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      setWrapperSize: true,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesOffsetAfter: 10,
    },
  }
});

export {swiperTours};
