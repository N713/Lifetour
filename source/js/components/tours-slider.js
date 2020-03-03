import Swiper from "swiper";

const cardMobileWidth = 281;
const spaceBetween = 20;

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
      spaceBetween: spaceBetween,
      width: cardMobileWidth + 2 * spaceBetween,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      setWrapperSize: true,
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});

export {swiperTours};
