`use strict`;

import {utils} from "./utils";
import {params} from "./utils";

const gallerySection = document.body.querySelector(`.gallery`);
const nextButton = gallerySection.querySelector(`.button--right`);
const prevButton = gallerySection.querySelector(`.button--left`);
const images = Array.from(gallerySection.querySelectorAll(`.gallery__list-wrapper`));
const imagesList = gallerySection.querySelector(`.gallery__wrapper-list`);

let currentFirst = 0;
let currentLast = currentFirst + params.step;

const addMovesAtResolution = (resolution) => {
  utils.addMoveAtResolution(nextButton, imagesList, params.max_desktop_width);
  utils.removeMoveAtResolution(prevButton, imagesList, params.max_desktop_width);
};

const showNextImage = () => {
  prevButton.addEventListener(`click`, hidePrevImage);

  images[currentFirst].classList.add(`hide`);
  currentFirst += params.next;

  images[currentFirst + params.next].classList.remove(`hide`);
  images[currentFirst + params.step].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === images.length - params.next) {
    nextButton.removeEventListener(`click`, showNextImage);
    prevButton.addEventListener(`click`, hidePrevImage);
  }
};

const hidePrevImage = () => {
  nextButton.addEventListener(`click`, showNextImage);

  if(currentFirst !== 0) {
    images[currentLast].classList.add(`hide`);
    currentLast = currentLast - params.next;

    currentFirst = currentFirst - params.next;
    images[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    utils.unactiveBack(nextButton, showNextImage, prevButton, hidePrevImage);
  }
};

const addGalleryHandlers = () => {
  if(images.length > params.showed_cards) {
    utils.addHandlers(nextButton, showNextImage, prevButton, hidePrevImage);
  } else if(images.length <= params.showed_cards){
    addMovesAtResolution(params.max_desktop_width);
  }
};

utils.addClassToElements(params.showed_cards, images, `hide`);
export {addGalleryHandlers};
