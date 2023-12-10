import { VALID_SYMBOLS, TEXT_ERROR } from './const.js';

const body = document.querySelector('body');

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');

const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const closeOverlayButton = uploadForm.querySelector('#upload-cancel');

const hashtagsField = uploadForm.querySelector('.text__hashtags');
const descriptionField = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const getSplitHashtags = (hashtags) => hashtags.trim().split(' ').filter((hashtag) => hashtag.trim().length);

const areHashtagsUnique = (hashtags) => {
  const lowerCaseTags = getSplitHashtags(hashtags).map((hashtag) => hashtag.toLowerCase());

  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isHashtagValid = (hashtags) => getSplitHashtags(hashtags).every((hashtag) => VALID_SYMBOLS.test(hashtag));

const hasReachedHashtagLimit = (hashtags) => getSplitHashtags(hashtags).length <= 5;

pristine.addValidator(hashtagsField, areHashtagsUnique, TEXT_ERROR.NOT_UNIQUE, 1, true);
pristine.addValidator(hashtagsField, isHashtagValid, TEXT_ERROR.NOT_VALID, 2, true);
pristine.addValidator(hashtagsField, hasReachedHashtagLimit, TEXT_ERROR.MAX_COUNT, 2, true);

const hideImageModal = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadForm.reset();
  pristine.reset();
  closeOverlayButton.removeEventListener('click', hideImageModal);
};

const documentOnKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideImageModal();
    document.removeEventListener('keydown', documentOnKeyDown);
  }
};

const showImageModal = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', documentOnKeyDown);
  closeOverlayButton.addEventListener('click', hideImageModal);
};

uploadForm.addEventListener('submit', () => { });
uploadFile.addEventListener('input', showImageModal);

hashtagsField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});

descriptionField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});
