import { getBigPictureDetails } from './get-big-picture-details.js';

const bigPicture = document.querySelector('.big-picture');

const body = document.querySelector('body');

const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const escapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
    document.removeEventListener('keydown', escapeKeydown);
  }
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  cancelButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', escapeKeydown);
};

const openBigPicture = (picturesInfo) => {
  const pictures = document.querySelector('.pictures');

  pictures.addEventListener('click', (evt) => {
    const selectedThumbnail = evt.target.closest('[data-id]');

    if (!selectedThumbnail) {
      return;
    }

    evt.preventDefault();

    const openedPicture = picturesInfo.find((item) => item.id === +selectedThumbnail.dataset.id);

    showBigPicture();
    getBigPictureDetails(openedPicture);
  });
};

export { openBigPicture };
