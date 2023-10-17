const NAMES = ['Jack', 'Artyom9422', 'Keks', 'max', 'Cat15', 'Alice', 'Tom', 'Happy', 'epic5', 'Joe'];
const COMMENTS = ['Great', 'cool', '...', 'beautiful!', 'кайф', 'лайк', 'good', ':)', 'первый', 'top'];
const DESCRIPTIONS = ['Chocolate cake', 'Im at sea', 'Funny cat', 'Beautiful sky', 'Snowy January', 'Have a nice day!', 'in GTA 5', 'I hate this Monday', 'hahaha', 'im bored :('];

const getID = function () {
  let id = 0;

  return function () {
    id++;
    return id;
  };
};

const getCommentID = getID();
const getPhotoID = getID();

const getRandomInteger = function (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: getCommentID,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES)
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${getRandomInteger(1, 25)}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, () => createComment())
});

const getPhotos = () => Array.from({ length: 25 }, () => createPhoto(getPhotoID()));

getPhotos();
