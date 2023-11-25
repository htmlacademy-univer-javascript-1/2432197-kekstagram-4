import { getPhotos } from './modules/create-photo.js';
import { drawThumbnail } from './modules/draw-thumbnail.js';

drawThumbnail(getPhotos());
