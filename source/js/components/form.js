import IMask from "imask";

const telInput = document.getElementById(`phone-number`);

const maskOptions = {
  mask: telInput.dataset.mask + '',
};

const mask = IMask(telInput, maskOptions);
export {mask};
