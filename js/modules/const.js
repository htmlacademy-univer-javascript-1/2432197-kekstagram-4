const NAMES = ['Jack', 'Artyom9422', 'Keks', 'max', 'Cat15', 'Alice', 'Tom', 'Happy', 'epic5', 'Joe'];
const COMMENTS = ['Great', 'cool', '...', 'beautiful!', 'кайф', 'лайк', 'good', ':)', 'первый', 'top'];
const DESCRIPTIONS = ['Chocolate cake', 'Im at sea', 'Funny cat', 'Beautiful sky', 'Snowy January', 'Have a nice day!', 'in GTA 5', 'I hate this Monday', 'hahaha', 'im bored :('];

const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TEXT_ERROR = {
  NOT_UNIQUE: 'Хэштеги не должны повторяться',
  NOT_VALID: 'Хэштег должен начинаться с знака # и состоять из букв или цифр',
  MAX_COUNT: 'Возможно максимум 5 хэштегов'
};

export { NAMES, COMMENTS, DESCRIPTIONS, VALID_SYMBOLS, TEXT_ERROR };
