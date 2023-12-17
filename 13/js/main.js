import { getPhotos } from './modules/create-photo.js';
import { drawThumbnail } from './modules/draw-thumbnail.js';
import { addEventListenerToPicture } from './modules/open-big-picture.js';
import { hideImageModal, setOnFormDataSubmit } from './modules/add-form.js';
import { showSuccessMessage, showErrorMessage } from './modules/show-message.js';
import { sendData } from './modules/api.js';

setOnFormDataSubmit(async (data) => {
  try {
    await sendData(data);
    hideImageModal();
    showSuccessMessage();
  } catch (error) {
    showErrorMessage();
  }
});

const photos = getPhotos();

drawThumbnail(photos);
addEventListenerToPicture(photos);
