import Swiper from "swiper";

const cardWidth = 388.5;
const cardWidthMobile = 278;
const spaceBetween = 15;
const gap = 5;

let swiperFeedback = new Swiper ('.swiper-container-feedback', {
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
      width: cardWidthMobile + 3 * spaceBetween + gap,
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: cardWidth + 2 * spaceBetween,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      width: 3 * cardWidth + 2 * spaceBetween,
    },
  }
});

export {swiperFeedback};
