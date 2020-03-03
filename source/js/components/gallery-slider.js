import Swiper from "swiper";

const gallerySwiper = new Swiper ('.swiper-container-gallery', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 400,
  spaceBetween: 6,
  slidesPerView: 2,
  slidesPerGroup: 2,
  setWrapperSize: true,
  simulateTouch: false,
  freeMode: true,
  loop: true,
});

export {gallerySwiper};
