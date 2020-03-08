const utils = {
  setWidth: (width, n = 1, space, m = 1) => {
    if (n === m) {
      return n * (width + space);
    } else {
      return width * n + space * m;
    }
  },

  addListener: (button, listener) => {
    button.addEventListener(`click`, listener);
  },

  removeListener: (button, listener) => {
    button.removeEventListener(`click`, listener);
  },

  addCssClass: (elem, cssClass) => {
    elem.classList.add(`${cssClass}`);
  },

  removeCssClass: (elem, cssClass) => {
    elem.classList.remove(`${cssClass}`);
  },
};

export {utils};
