import Swiper from "swiper";

const mySwiper = new Swiper ('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  updateOnWindowResize: true,
  setWrapperSize: true,
});
