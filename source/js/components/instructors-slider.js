import Swiper from "swiper";
import {utils} from "./utils";

const GAP = 1;
const SPACE_BETWEEN = 4;
const CLASS_NAME = `lightness`;

const card = document.body.querySelector(`.trainers .trainers__list .trainers__list-item`);
const cards = document.body.querySelectorAll(`.trainers .trainers__list .trainers__list-item`);
const nextButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--right`);
const prevButton = document.body.querySelector(`.trainers .trainers__buttons-wrapper .button--left`);

let currentLightCard = 2;
let currentLightCardMobile = 1;

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
      spaceBetween: SPACE_BETWEEN,
      width: utils.setWidth(card.offsetWidth, 1, SPACE_BETWEEN, 5),
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      width: utils.setWidth(card.offsetWidth, 2, SPACE_BETWEEN, 8),
    },

    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      width: utils.setWidth(card.offsetWidth, 4, SPACE_BETWEEN, 8),
    },

    1210: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
});

const lightNextCard = () => {
  if (currentLightCard < cards.length - GAP) {
    utils.addListener(prevButton, lightPrevCard);
    utils.removeCssClass(cards[currentLightCard], CLASS_NAME);
    currentLightCard += GAP;
    utils.addCssClass(cards[currentLightCard], CLASS_NAME);
  } else {
    utils.removeCssClass(cards[currentLightCard], CLASS_NAME);
    currentLightCard += 2 * GAP;
    utils.removeListener(nextButton, lightNextCard);
  }
};

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

const lightPrevCard = () => {
  if (currentLightCard !== 2 * GAP) {
    utils.addListener(nextButton, lightNextCard);
    currentLightCard = currentLightCard - GAP;
    utils.addCssClass(cards[currentLightCard], CLASS_NAME);
  } else if(currentLightCard === cards.length - GAP) {
    utils.removeCssClass(cards[currentLightCard], CLASS_NAME);
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

const setHandlers = () => {
  utils.removeListener(nextButton, lightNextCardMobile);
  utils.removeListener(prevButton, lightPrevCardMobile);
  utils.addListener(nextButton, lightNextCard);
  utils.addListener(prevButton, lightPrevCard);
};

const setMobileHandlers = () => {
  utils.removeListener(nextButton, lightNextCard);
  utils.removeListener(prevButton, lightPrevCard);
  utils.addListener(nextButton, lightNextCardMobile);
  utils.addListener(prevButton, lightPrevCardMobile);
};

const lightCard = () => {
  if (window.matchMedia(`(max-width: 768px)`).matches) {
    utils.addCssClass(cards[currentLightCard], CLASS_NAME);
    utils.removeCssClass(cards[currentLightCardMobile], CLASS_NAME);
    setHandlers();
  }

  if (window.matchMedia(`(max-width: 320px)`).matches) {
    utils.addCssClass(cards[currentLightCardMobile], CLASS_NAME);
    utils.addCssClass(cards[currentLightCard], CLASS_NAME);
    setMobileHandlers();
  }
};

export {instructorsSwiper, lightCard};
