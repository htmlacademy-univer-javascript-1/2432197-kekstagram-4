const uploadModal = document.querySelector('.img-upload');

const image = uploadModal.querySelector('.img-upload__preview img');

const smallerScaleButton = uploadModal.querySelector('.scale__control--smaller');
const biggerScaleButton = uploadModal.querySelector('.scale__control--bigger');
const scaleValue = uploadModal.querySelector('.scale__control--value');

scaleValue.value = `${100}%`;

const rescaleImage = (currentValue) => {
  image.style.transform = `scale(${currentValue / 100})`;
  scaleValue.value = `${currentValue}%`;
};

const smallerScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - 25;

  if (newValue < 25) {
    newValue = 25;
  }

  rescaleImage(newValue);
};

const biggerScaleButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + 25;

  if (newValue > 100) {
    newValue = 100;
  }

  rescaleImage(newValue);
};

smallerScaleButton.addEventListener('click', smallerScaleButtonClick);
biggerScaleButton.addEventListener('click', biggerScaleButtonClick);

const resetScale = () => rescaleImage(100);

export { resetScale };
