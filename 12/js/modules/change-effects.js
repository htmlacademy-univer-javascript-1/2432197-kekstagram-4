import { EFFECTS } from './const.js';

const image = document.querySelector('.img-upload__preview img');

const slider = document.querySelector('.img-upload__effect-level');

const effects = document.querySelector('.effects');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const showSlider = () => {
  slider.classList.remove('hidden');
};

const hideSlider = () => {
  slider.classList.add('hidden');
};

const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions(
    {
      range: {
        min: chosenEffect.min,
        max: chosenEffect.max
      },
      step: chosenEffect.step,
      start: chosenEffect.max
    }
  );

  if (chosenEffect === DEFAULT_EFFECT) {
    hideSlider();
  } else {
    showSlider();
  }
};

const changeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  image.className = `effects-preview--${chosenEffect.name}`;

  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();

  if (chosenEffect === DEFAULT_EFFECT) {
    image.style.filter = DEFAULT_EFFECT.style;
  } else {
    image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }

  effectLevelValue.value = sliderValue;
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  step: DEFAULT_EFFECT.step,
  start: DEFAULT_EFFECT.max,
  connect: 'lower'
});

hideSlider();
effects.addEventListener('change', changeEffect);
effectLevelSlider.noUiSlider.on('update', onUpdateSlider);

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

export { resetEffects };
