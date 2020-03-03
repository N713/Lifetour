import Swiper from "swiper";

const cardWidth = 234;
const spaceBetween = 8;

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
      spaceBetween: spaceBetween,
      width: cardWidth,
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: 2 * cardWidth + 2 * spaceBetween,
    },

    1024: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      width: 5 * cardWidth + 2 * spaceBetween,
    },
  }
});

export {instructorsSwiper};
