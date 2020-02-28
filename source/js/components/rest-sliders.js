import Swiper from "swiper";

let swipers = new Swiper ('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  slidesPerView: 3,
  slidesPerGroup: 3,
  setWrapperSize: true,
});

if (window.matchMedia(`(max-width: 1400px)`).matches) {
  swipers = new Swiper('.swiper-container-s3', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 600,
    slidesPerView: 1,
    slidesPerGroup: 1,
  });
}

export {swipers};
