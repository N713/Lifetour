import Swiper from "swiper";

let instructorsSwiper = new Swiper ('.swiper-container-s2', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 600,
  slidesPerView: 5,
  slidesPerGroup: 5,
});

export {instructorsSwiper};
