`use strict`;

import {utils} from "./utils";
import {params} from "./utils";

const STEP = 4;
const SHOWED_CARDS = 5;

const trainingSection = document.body.querySelector(`.training`);
const nextButton = trainingSection.querySelector(`.button--right`);
const prevButton = trainingSection.querySelector(`.button--left`);
const trainers = Array.from(trainingSection.querySelectorAll(`.training__instructors-list-item`));
const trainersList = trainingSection.querySelector(`.training__instructors-list`);

let currentFirst = 0;
let currentLast = currentFirst + STEP;

const addMovesAtResolution = (resolution) => {
  utils.addMoveAtResolution(nextButton, trainersList, params.max_desktop_width);
  utils.removeMoveAtResolution(prevButton, trainersList, params.max_desktop_width);
};

const showNextTrainer = () => {
  prevButton.addEventListener(`click`, hidePrevTrainer);

  trainers[currentFirst].classList.add(`hide`);
  currentFirst += params.next;

  trainers[currentFirst + params.next].classList.remove(`hide`);
  trainers[currentFirst + STEP].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === trainers.length - params.next) {
    nextButton.removeEventListener(`click`, showNextTrainer);
    prevButton.addEventListener(`click`, hidePrevTrainer);
  }
};

const hidePrevTrainer = () => {
  nextButton.addEventListener(`click`, showNextTrainer);

  if(currentFirst !== 0) {
    trainers[currentLast].classList.add(`hide`);
    currentLast = currentLast - params.next;

    currentFirst = currentFirst - params.next;
    trainers[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    utils.unactiveBack(nextButton, showNextTrainer, prevButton, hidePrevTrainer);
  }
};

const addTrainersHandlers = () => {
  if(trainers.length > SHOWED_CARDS) {
    utils.addHandlers(nextButton, showNextTrainer, prevButton, hidePrevTrainer);
  } else if(trainers.length <= SHOWED_CARDS){
    addMovesAtResolution(params.max_desktop_width);
  }
};

utils.addClassToElements(SHOWED_CARDS, trainers, `hide`);
export {addTrainersHandlers};
