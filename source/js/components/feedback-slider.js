`use strict`;

const NEXT = 1;
const STEP = 2;
const SHOWED_CARDS = 3;
const MAX_DESKTOP_WIDTH = 1096;

const feedbackSection = document.body.querySelector(`.feedback`);
const nextButton = feedbackSection.querySelector(`.button--right`);
const prevButton = feedbackSection.querySelector(`.button--left`);
const feedbacks = Array.from(feedbackSection.querySelectorAll(`.feedback__list-item`));
const feedbackList = feedbackSection.querySelector(`.feedback__list`);

let currentFirst = 0;
let currentLast = currentFirst + STEP;

for (let i = SHOWED_CARDS; i < feedbacks.length; i++) {
  feedbacks[i].classList.add(`hide`);
}

const addMovesAtResolution = (resolution) => {
  nextButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      feedbackList.classList.add(`move-right`);
    }
  });

  prevButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      feedbackList.classList.remove(`move-right`);
    }
  });
};

const showNextTour = () => {
  prevButton.addEventListener(`click`, hidePrevTour);

  feedbacks[currentFirst].classList.add(`hide`);
  currentFirst += NEXT;

  feedbacks[currentFirst + NEXT].classList.remove(`hide`);
  feedbacks[currentFirst + STEP].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === feedbacks.length - NEXT) {
    nextButton.removeEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  }
};

const hidePrevTour = () => {
  nextButton.addEventListener(`click`, showNextTour);

  if(currentFirst !== 0) {
    feedbacks[currentLast].classList.add(`hide`);
    currentLast = currentLast - NEXT;

    currentFirst = currentFirst - NEXT;
    feedbacks[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    prevButton.removeEventListener(`click`, hidePrevTour);
    nextButton.addEventListener(`click`, showNextTour);
  }
};

const addFeedbacksHandlers = () => {
  if(feedbacks.length > SHOWED_CARDS) {
    nextButton.addEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  } else if(feedbacks.length <= SHOWED_CARDS){
    addMovesAtResolution(MAX_DESKTOP_WIDTH);
  }
};

export {addFeedbacksHandlers};
