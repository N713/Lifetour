import Swiper from "swiper";
import {utils} from "./utils";

const GAP = 1;
const SPACE_BETWEEN = 15;
const SPACE_BETWEEN_MOBILE = 21;
const CLASS_NAME = `lightness`;

const card = document.body.querySelector(`.feedback .feedback__list .feedback__list-item`);
const cards = document.body.querySelectorAll(`.feedback .feedback__list .feedback__list-item`);
const nextButton = document.body.querySelector(`.feedback .feedback__buttons-wrapper .button--right`);
const prevButton = document.body.querySelector(`.feedback .feedback__buttons-wrapper .button--left`);

let currentLightCardMobile = 1;

const swiperFeedback = new Swiper ('.swiper-container-feedback', {
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
      width: utils.setWidth(card.offsetWidth,1,SPACE_BETWEEN_MOBILE, 1),
    },

    768: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      width: utils.setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 1.2),
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      width: utils.setWidth(card.offsetWidth, 3, SPACE_BETWEEN, 1.2),
    }
  }
});

const lightNextCardMobile = () => {
  if (currentLightCardMobile < cards.length - GAP) {
    utils.addListener(prevButton, lightPrevCardMobile);
    utils.removeCssClass(cards[currentLightCardMobile], CLASS_NAME);
    currentLightCardMobile += GAP;
    utils.addCssClass(cards[currentLightCardMobile], CLASS_NAME);
  } else {
    cards[currentLightCardMobile].classList.remove(CLASS_NAME);
    currentLightCardMobile += GAP;
    nextButton.removeEventListener(`click`, lightNextCardMobile);
  }
};

const lightPrevCardMobile = () => {
  if (currentLightCardMobile !== GAP) {
    utils.addListener(nextButton, lightNextCardMobile);
    currentLightCardMobile = currentLightCardMobile - GAP;
    utils.addCssClass(cards[currentLightCardMobile], CLASS_NAME);
  } else if(currentLightCardMobile === cards.length - GAP) {
    utils.addCssClass(cards[currentLightCardMobile], CLASS_NAME);
  }
};

const setMobileHandlers = () => {
  utils.addListener(nextButton, lightNextCardMobile);
  utils.addListener(prevButton, lightPrevCardMobile);
};

const lightCardFeedback = () => {
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    utils.addCssClass(cards[currentLightCardMobile], CLASS_NAME);
    setMobileHandlers();
  }
};

export {swiperFeedback, lightCardFeedback};
