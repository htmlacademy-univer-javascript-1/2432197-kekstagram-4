import { getPhotos } from './modules/create-photo.js';
import { drawThumbnail } from './modules/draw-thumbnail.js';
import { addEventListenerToPicture } from './modules/open-big-picture.js';

const photos = getPhotos();

drawThumbnail(photos);
addEventListenerToPicture(photos);