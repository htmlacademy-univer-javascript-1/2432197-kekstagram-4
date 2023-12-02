import { getPhotos } from './modules/create-photo.js';
import { drawThumbnail } from './modules/draw-thumbnail.js';
import { addEventListenerToPicture } from './modules/open-big-picture.js';

const photos = getPhotos();

drawThumbnail(photos);
addEventListenerToPicture(photos);

/*
  Не понимаю, почему не отображаются фотографии...
  Уже на несколько перепроверил весь код, и так и не могу понять, что не так
  Из-за этого очень сложно последующие задания делать, так как не вижу результата
  Поэтому даже не знаю, правильно ли я сделал ЭТО задание.....
*/
