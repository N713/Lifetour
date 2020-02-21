`use strict`;

const params = {
  next: 1,
  step: 2,
  showed_cards: 3,
  max_desktop_width: 1096,
};

const utils = {
  addClassToElements: (startElement, elements, nameOfClass) => {
    for (let i = startElement; i < elements.length; i++) {
      elements[i].classList.add(`${nameOfClass}`);
    }
  },

  addMove: (element, nameOfClass) => {
    element.classList.add(`${nameOfClass}`);
  },

  removeMove: (element, nameOfClass) => {
    element.classList.remove(`${nameOfClass}`);
  },

  addMoveAtResolution: (button, element, resolution) => {
    button.addEventListener(`click`, () => {
      if(window.innerWidth < resolution) {
        utils.addMove(element, `move-right`);
      }
    });
  },

  removeMoveAtResolution: (button, element, resolution) => {
    button.addEventListener(`click`, () => {
      if(window.innerWidth < resolution) {
        utils.removeMove(element, `move-right`);
      }
    });
  },

  addHandlers: (nextButton, nextHandler, prevButton, prevHandler) => {
    nextButton.addEventListener(`click`, nextHandler);
    prevButton.addEventListener(`click`, prevHandler);
  },
};

export {params, utils};
