const image = document.querySelector('.img-upload__preview img');

const smallerScaleButton = document.querySelector('.scale__control--smaller');
const biggerScaleButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

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
