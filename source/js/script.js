`use strict`;

const NEXT = 1;
const STEP = 2;
const SHOWED_CARDS = 3;
const MAX_DESKTOP_WIDTH = 1096;

const toursSection = document.body.querySelector(`.tours`);
const nextButton = toursSection.querySelector(`.button--right`);
const prevButton = toursSection.querySelector(`.button--left`);
const tours = Array.from(toursSection.querySelectorAll(`.tours__list-item`));
const toursList = toursSection.querySelector(`.tours__list`);

let currentFirst = 0;
let currentLast = currentFirst + STEP;

for (let i = SHOWED_CARDS; i < tours.length; i++) {
  tours[i].classList.add(`hide`);
}

for (let i = 0; i < SHOWED_CARDS; i++) {
  tours[i].classList.add(`show`);
}

/*
const addMoves = () => {
  nextButton.addEventListener(`click`, () => {
    toursList.classList.add(`move-right`)
  });

  prevButton.addEventListener(`click`, () => {
    toursList.classList.remove(`move-right`);
  });
};

*/

const addMovesAtResolution = (resolution) => {
  nextButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      toursList.classList.add(`move-right`);
    }
  });

  prevButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      toursList.classList.remove(`move-right`);
    }
  });
};

const showNextTour = () => {
  prevButton.addEventListener(`click`, hidePrevTour);

  tours[currentFirst].classList.remove(`show`);
  tours[currentFirst].classList.add(`hide`);
  currentFirst += NEXT;

  tours[currentFirst + NEXT].classList.remove(`hide`);
  tours[currentFirst + NEXT].classList.add(`show`);

  tours[currentFirst + STEP].classList.remove(`hide`);
  tours[currentFirst + STEP].classList.add(`show`);

  currentLast += 1;

  if(currentLast === tours.length - NEXT) {
    nextButton.removeEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  }
};

const hidePrevTour = () => {
  nextButton.addEventListener(`click`, showNextTour);

  if(currentFirst !== 0) {
    tours[currentLast].classList.remove(`show`);
    tours[currentLast].classList.add(`hide`);
    currentLast = currentLast - NEXT;

    currentFirst = currentFirst - NEXT;
    tours[currentFirst].classList.remove(`hide`);
    tours[currentFirst].classList.add(`show`);
  }

  if(currentFirst === 0) {
    prevButton.removeEventListener(`click`, hidePrevTour);
    nextButton.addEventListener(`click`, showNextTour);
  }
};

if(tours.length > SHOWED_CARDS) {
  nextButton.addEventListener(`click`, showNextTour);
  prevButton.addEventListener(`click`, hidePrevTour);
} else {
  addMovesAtResolution(MAX_DESKTOP_WIDTH);
}
