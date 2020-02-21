`use strict`;

import {utils} from "./utils";
import {params} from "./utils";

const toursSection = document.body.querySelector(`.tours`);
const nextButton = toursSection.querySelector(`.button--right`);
const prevButton = toursSection.querySelector(`.button--left`);
const tours = Array.from(toursSection.querySelectorAll(`.tours__list-item`));
const toursList = toursSection.querySelector(`.tours__list`);

let currentFirst = 0;
let currentLast = currentFirst + params.step;

const addMovesAtResolution = (resolution) => {
  utils.addMoveAtResolution(nextButton, toursList, params.max_desktop_width);
  utils.removeMoveAtResolution(prevButton, toursList, params.max_desktop_width);
};

const showNextTour = () => {
  prevButton.addEventListener(`click`, hidePrevTour);

  tours[currentFirst].classList.add(`hide`);
  currentFirst += params.next;

  tours[currentFirst + params.next].classList.remove(`hide`);
  tours[currentFirst + params.step].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === tours.length - params.next) {
    nextButton.removeEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  }
};

const hidePrevTour = () => {
  nextButton.addEventListener(`click`, showNextTour);

  if(currentFirst !== 0) {
    tours[currentLast].classList.add(`hide`);
    currentLast = currentLast - params.next;

    currentFirst = currentFirst - params.next;
    tours[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    utils.unactiveBack(nextButton, showNextTour, prevButton, hidePrevTour);
  }
};

const addToursHandlers = () => {
  if(tours.length > params.showed_cards) {
    utils.addHandlers(nextButton, showNextTour, prevButton, hidePrevTour);
  } else if(tours.length <= params.showed_cards){
    addMovesAtResolution(params.max_desktop_width);
  }
};

utils.addClassToElements(params.showed_cards, tours, `hide`);
export {addToursHandlers};
