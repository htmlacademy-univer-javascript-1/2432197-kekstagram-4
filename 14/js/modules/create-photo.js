import { NAMES, COMMENTS, DESCRIPTIONS } from './const.js';
import { getRandomInteger, getRandomElement } from './util.js';

const getID = () => {
  let id = 0;

  return function () {
    id++;
    return id;
  };
};

const getPhotoID = getID();
const getCommentID = getID();

const createComment = () => ({
  id: getCommentID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(COMMENTS),
  name: getRandomElement(NAMES)
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 30) }, () => createComment())
});

const getPhotos = () => Array.from({ length: 25 }, () => createPhoto(getPhotoID()));

export { getPhotos };
