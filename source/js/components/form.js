import IMask from "imask";

const telInput = document.getElementById(`phone-number`);
const nameInput = document.getElementById(`name`);
const form = document.body.querySelector(`.questions .form`);
const submitButton = form.querySelector(`.button`);

const maskOptions = {
  mask: telInput.dataset.mask + '',
};

const mask = IMask(telInput, maskOptions);

form.addEventListener(`submit`, (evt) => {
  evt.preventDefault();

  if(telInput.value.length !== telInput.dataset.mask.length){
    telInput.parentElement.classList.add(`error`);
  } else {
    telInput.parentElement.classList.remove(`error`);
    localStorage.setItem(`name`, nameInput.value);
    localStorage.setItem(`phone`,telInput.value);
    submitButton.setAttribute(`disabled`,``);
  }
});

export {mask};

