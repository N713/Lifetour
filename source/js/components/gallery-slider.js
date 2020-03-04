import Swiper from "swiper";

const gallerySwiper = new Swiper ('.swiper-container-gallery', {
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
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
