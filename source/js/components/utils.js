const utils = {
  setWidth: (width, n = 1, space, m = 1) => {
    if (n === m) {
      return n * (width + space);
    } else {
      return width * n + space * m;
    }
  },
};

export {utils};
