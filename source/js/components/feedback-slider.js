`use strict`;

import {utils} from "./utils";
import {params} from "./utils";

const feedbackSection = document.body.querySelector(`.feedback`);
const nextButton = feedbackSection.querySelector(`.button--right`);
const prevButton = feedbackSection.querySelector(`.button--left`);
const feedbacks = Array.from(feedbackSection.querySelectorAll(`.feedback__list-item`));
const feedbackList = feedbackSection.querySelector(`.feedback__list`);

let currentFirst = 0;
let currentLast = currentFirst + params.step;

const addMovesAtResolution = (resolution) => {
  utils.addMoveAtResolution(nextButton, feedbackList, params.max_desktop_width);
  utils.removeMoveAtResolution(prevButton, feedbackList, params.max_desktop_width);
};

const showNextFeedback = () => {
  prevButton.addEventListener(`click`, hidePrevFeedback);

  feedbacks[currentFirst].classList.add(`hide`);
  currentFirst += params.next;

  feedbacks[currentFirst + params.next].classList.remove(`hide`);
  feedbacks[currentFirst + params.step].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === feedbacks.length - params.next) {
    nextButton.removeEventListener(`click`, showNextFeedback);
    prevButton.addEventListener(`click`, hidePrevFeedback);
  }
};

const hidePrevFeedback = () => {
  nextButton.addEventListener(`click`, showNextFeedback);

  if(currentFirst !== 0) {
    feedbacks[currentLast].classList.add(`hide`);
    currentLast = currentLast - params.next;

    currentFirst = currentFirst - params.next;
    feedbacks[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    utils.unactiveBack(nextButton, showNextFeedback, prevButton, hidePrevFeedback);
  }
};

const addFeedbacksHandlers = () => {
  if(feedbacks.length > params.showed_cards) {
    utils.addHandlers(nextButton, showNextFeedback, prevButton, hidePrevFeedback);
  } else if(feedbacks.length <= params.showed_cards){
    addMovesAtResolution(params.max_desktop_width);
  }
};

utils.addClassToElements(params.showed_cards, feedbacks, `hide`);
export {addFeedbacksHandlers};
