const NAMES = ['Jack', 'Artyom9422', 'Keks', 'max', 'Cat15', 'Alice', 'Tom', 'Happy', 'epic5', 'Joe'];
const COMMENTS = ['Great', 'cool', '...', 'beautiful!', 'кайф', 'лайк', 'good', ':)', 'первый', 'top'];
const DESCRIPTIONS = ['Chocolate cake', 'Im at sea', 'Funny cat', 'Beautiful sky', 'Snowy January', 'Have a nice day!', 'in GTA 5', 'I hate this Monday', 'hahaha', 'im bored :('];

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const TEXT_ERROR = {
  NOT_UNIQUE: 'Хэштеги не должны повторяться',
  NOT_VALID: 'Хэштег должен начинаться с знака # и состоять из букв или цифр',
  MAX_COUNT: 'Возможно максимум 5 хэштегов'
};

const URL = 'https://29.javascript.pages.academy/kekstagram';

const ROUTE = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const METHOD = {
  GET: 'GET',
  POST: 'POST'
};

const TEXT_SERVER_ERROR = {
  GET_DATA: 'не загрузилось',
  POST_DATA: 'не отправилось'
};

const EFFECTS = {
  NONE: {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  CHROME: {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  SEPIA: {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  MARVIN: {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  PHOBOS: {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  HEAT: {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  }
};

const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

export { NAMES, COMMENTS, DESCRIPTIONS, VALID_SYMBOLS, TEXT_ERROR, URL, ROUTE, METHOD, TEXT_SERVER_ERROR, EFFECTS, FILTERS };
