import Swiper from "swiper";

let gallerySwiper = new Swiper ('.swiper-container-s3', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  spaceBetween: 6,
  slidesPerView: 2,
  slidesPerGroup: 2,
  setWrapperSize: true,
});

if (window.matchMedia(`(max-width: 1400px)`).matches) {
  gallerySwiper = new Swiper ('.swiper-container-s3', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    speed: 600,
    spaceBetween: 6,
    slidesPerView: 3,
    slidesPerGroup: 3,
  });
}

export {gallerySwiper}
