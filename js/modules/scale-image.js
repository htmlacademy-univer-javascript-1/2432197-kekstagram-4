import { STEP_SCALE, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE } from './const.js';

const uploadModal = document.querySelector('.img-upload');

const image = uploadModal.querySelector('.img-upload__preview img');

const smallerScaleButton = uploadModal.querySelector('.scale__control--smaller');
const biggerScaleButton = uploadModal.querySelector('.scale__control--bigger');
const scaleValue = uploadModal.querySelector('.scale__control--value');

scaleValue.value = `${DEFAULT_SCALE}%`;

const rescaleImage = (currentValue) => {
  image.style.transform = `scale(${currentValue / 100})`;
  scaleValue.value = `${currentValue}%`;
};

const smallerScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - STEP_SCALE;

  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  rescaleImage(newValue);
};

const biggerScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + STEP_SCALE;

  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  rescaleImage(newValue);
};

smallerScaleButton.addEventListener('click', smallerScaleButtonClick);
biggerScaleButton.addEventListener('click', biggerScaleButtonClick);

const resetScale = () => rescaleImage(DEFAULT_SCALE);

export { resetScale };
