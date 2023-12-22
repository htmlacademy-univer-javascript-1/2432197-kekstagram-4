const NAMES = ['Jack', 'Artyom9422', 'Keks', 'max', 'Cat15', 'Alice', 'Tom', 'Happy', 'epic5', 'Joe'];
const COMMENTS = ['Great', 'cool', '...', 'beautiful!', 'кайф', 'лайк', 'good', ':)', 'первый', 'top'];
const DESCRIPTIONS = ['Chocolate cake', 'Im at sea', 'Funny cat', 'Beautiful sky', 'Snowy January', 'Have a nice day!', 'in GTA 5', 'I hate this Monday', 'hahaha', 'im bored :('];

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorText = {
  NOT_UNIQUE: 'Хэштеги не должны повторяться',
  NOT_VALID: 'Хэштег должен начинаться с знака # и состоять из букв или цифр',
  MAX_COUNT: 'Возможно максимум 5 хэштегов'
};

const URL = 'https://29.javascript.pages.academy/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const Method = {
  GET: 'GET',
  POST: 'POST'
};

const ServerErrorText = {
  GET_DATA: 'не загрузилось',
  POST_DATA: 'не отправилось'
};

const Effects = {
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

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const LOADED_COMMENTS_NUM = 5;
const HASHTAG_MAX_NUM = 5;
const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const RANDOM_PICTURES_NUM = 10;
const FILE_TYPES = ['jpeg', 'jpg', 'png'];

export { NAMES, COMMENTS, DESCRIPTIONS, VALID_SYMBOLS, ErrorText, URL, Route, Method,
  ServerErrorText, Effects, Filters, LOADED_COMMENTS_NUM, HASHTAG_MAX_NUM, STEP_SCALE,
  MIN_SCALE, MAX_SCALE, DEFAULT_SCALE, RANDOM_PICTURES_NUM, FILE_TYPES };
