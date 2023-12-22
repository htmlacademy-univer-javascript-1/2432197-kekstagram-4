import { drawThumbnail } from './modules/draw-thumbnail.js';
import { hideImageModal, setOnFormDataSubmit } from './modules/add-form.js';
import { showSuccessMessage, showErrorMessage } from './modules/show-message.js';
import { getData, sendData } from './modules/api.js';
import { showFilterButtons } from './modules/add-filters.js';
import { debounce } from './modules/util.js';

setOnFormDataSubmit(async (data) => {
  try {
    await sendData(data);
    hideImageModal();
    showSuccessMessage();
  } catch (error) {
    hideImageModal();
    showErrorMessage();
  }
});

getData().then((pictures) => {
  drawThumbnail(pictures);
  showFilterButtons(pictures, debounce(drawThumbnail));
});
