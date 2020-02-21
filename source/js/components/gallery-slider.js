`use strict`;

const NEXT = 1;
const STEP = 2;
const SHOWED_CARDS = 3;
const MAX_DESKTOP_WIDTH = 1096;

const gallerySection = document.body.querySelector(`.gallery`);
const nextButton = gallerySection.querySelector(`.button--right`);
const prevButton = gallerySection.querySelector(`.button--left`);
const images = Array.from(gallerySection.querySelectorAll(`.gallery__list`));
const imagesList = gallerySection.querySelector(`.gallery__wrapper-list`);

let currentFirst = 0;
let currentLast = currentFirst + STEP;

for (let i = SHOWED_CARDS; i < images.length; i++) {
  images[i].classList.add(`hide`);
}

const addMovesAtResolution = (resolution) => {
  nextButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      imagesList.classList.add(`move-right`);
    }
  });

  prevButton.addEventListener(`click`, () => {
    if(window.innerWidth < resolution) {
      imagesList.classList.remove(`move-right`);
    }
  });
};

const showNextTour = () => {
  prevButton.addEventListener(`click`, hidePrevTour);

  images[currentFirst].classList.add(`hide`);
  currentFirst += NEXT;

  images[currentFirst + NEXT].classList.remove(`hide`);
  images[currentFirst + STEP].classList.remove(`hide`);
  currentLast += 1;

  if(currentLast === images.length - NEXT) {
    nextButton.removeEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  }
};

const hidePrevTour = () => {
  nextButton.addEventListener(`click`, showNextTour);

  if(currentFirst !== 0) {
    images[currentLast].classList.add(`hide`);
    currentLast = currentLast - NEXT;

    currentFirst = currentFirst - NEXT;
    images[currentFirst].classList.remove(`hide`);
  }

  if(currentFirst === 0) {
    prevButton.removeEventListener(`click`, hidePrevTour);
    nextButton.addEventListener(`click`, showNextTour);
  }
};

const addGalleryHandlers = () => {
  if(images.length > SHOWED_CARDS) {
    nextButton.addEventListener(`click`, showNextTour);
    prevButton.addEventListener(`click`, hidePrevTour);
  } else if(images.length <= SHOWED_CARDS){
    addMovesAtResolution(MAX_DESKTOP_WIDTH);
  }
};

export {addGalleryHandlers};
