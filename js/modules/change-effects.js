import { Effects } from './const.js';

const uploadModal = document.querySelector('.img-upload');

const image = uploadModal.querySelector('.img-upload__preview img');
const slider = uploadModal.querySelector('.img-upload__effect-level');

const effects = uploadModal.querySelector('.effects');
const effectLevelValue = uploadModal.querySelector('.effect-level__value');
const effectLevelSlider = uploadModal.querySelector('.effect-level__slider');

const DEFAULT_EFFECT = Effects.NONE;
let selectedEffect = DEFAULT_EFFECT;

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower'
});

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
        min: selectedEffect.min,
        max: selectedEffect.max
      },
      start: selectedEffect.max,
      step: selectedEffect.step
    });

  if (selectedEffect === DEFAULT_EFFECT) {
    hideSlider();
  } else {
    showSlider();
  }
};

const changeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  selectedEffect = Effects[`${evt.target.value}`.toUpperCase()];
  image.className = `effects__preview--${selectedEffect.name}`;

  updateSlider();
};

const onUpdateSlider = () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();

  if (selectedEffect === DEFAULT_EFFECT) {
    image.style.filter = DEFAULT_EFFECT.style;
  } else {
    image.style.filter = `${selectedEffect.style}(${sliderValue}${selectedEffect.unit})`;
  }

  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateSlider();
};

effects.addEventListener('change', changeEffect);
effectLevelSlider.noUiSlider.on('update', onUpdateSlider);

export { resetEffects };
