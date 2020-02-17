const toursSection = document.body.querySelector(`.tours`);
const nextButton = toursSection.querySelector(`.button--right`);
const prevButton = toursSection.querySelector(`.button--left`);
const tours = Array.from(toursSection.querySelectorAll(`.tours__list-item`));
const currentFirst = 0;
const step = 2;

export default tours;

nextButton.addEventListener(`click`, () => {
  tours[currentFirst].style.display=`none`;
  const currentLast = currentFirst + step;
  tours[currentLast].style.display=`block`;
});
