const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

const hideErrorMessage = () => {
  const errorContainer = document.querySelector('.error');

  if (errorContainer) {
    errorContainer.remove();
  }
};

const hideErrorOnMouseClick = (evt) => {
  const errorContainer = document.querySelector('.error__inner');

  if (evt.target !== errorContainer) {
    hideErrorMessage();
    document.removeEventListener('click', hideErrorOnMouseClick);
  }
};

const showErrorMessage = () => {
  const message = errorMessage.cloneNode(true);
  message.querySelector('.error__button').addEventListener('click', hideErrorMessage);

  document.addEventListener('keydown', onEscapeError);
  document.addEventListener('click', hideErrorOnMouseClick);

  document.body.append(message);
};

const hideSuccessMessage = () => {
  document.removeEventListener('keydown', onEscapeSuccess);

  const successContainer = document.querySelector('.success');

  if (successContainer) {
    successContainer.remove();
  }
};

const successOnMouseClick = (evt) => {
  const successContainer = document.querySelector('.success__inner');

  if (evt.target !== successContainer) {
    hideSuccessMessage();
    document.removeEventListener('click', successOnMouseClick);
  }
};

const showSuccessMessage = () => {
  const message = successMessage.cloneNode(true);
  message.querySelector('.success__button').addEventListener('click', hideSuccessMessage);

  document.addEventListener('keydown', onEscapeSuccess);
  document.addEventListener('click', successOnMouseClick);

  document.body.append(message);
};

function onEscapeError (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideErrorMessage();
  }
}

function onEscapeSuccess (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideSuccessMessage();
    document.removeEventListener('keydown', onEscapeError);
  }
}

export { showSuccessMessage, showErrorMessage };
