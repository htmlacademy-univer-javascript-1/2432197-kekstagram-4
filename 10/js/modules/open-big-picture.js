const bigPicture = document.querySelector('.big-picture');

const body = document.querySelector('body');
const image = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCaption = bigPicture.querySelector('.social__caption');

const cancelButton = bigPicture.querySelector('.big-picture__cancel');

const comment = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const commentsCountBlock = bigPicture.querySelector('.social__comment-count');

const createComment = (commentInfo) => {
  const newComment = comment.cloneNode(true);

  newComment.querySelector('.social__picture').src = commentInfo.avatar;
  newComment.querySelector('.social__picture').alt = commentInfo.name;
  newComment.querySelector('.social__text').textContent = commentInfo.message;

  return newComment;
};

const createComments = (commentsInfo) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  let currentIndex = 0;
  const commentsPerPage = 5;

  while (currentIndex < commentsPerPage && currentIndex < commentsInfo.length) {
    fragment.append(createComment(commentsInfo[currentIndex]));
    currentIndex++;
  }

  commentsList.append(fragment);

  if (currentIndex < commentsInfo.length) {
    commentsLoader.classList.remove('hidden');
    commentsCountBlock.classList.remove('hidden');

    commentsLoader.addEventListener('click', () => {
      for (let i = 0; i < commentsPerPage && currentIndex < commentsInfo.length; i++) {
        fragment.append(createComment(commentsInfo[currentIndex]));
        currentIndex++;
      }

      commentsList.append(fragment);

      commentsCountBlock.textContent = `${currentIndex} из ${commentsInfo.length} комментариев`;

      if (currentIndex === commentsInfo.length) {
        commentsLoader.classList.add('hidden');
      }
    });
  } else {
    commentsLoader.classList.add('hidden');
    commentsCountBlock.classList.remove('hidden');
  }

  commentsCountBlock.textContent = `${currentIndex} из ${commentsInfo.length} комментариев`;
};

const getPictureDetails = (pictureInfo) => {
  image.src = pictureInfo.url;
  likesCount.textContent = pictureInfo.likes;
  commentsCount.textContent = pictureInfo.comments.length;
  socialCaption.textContent = pictureInfo.description;

  createComments(pictureInfo.comments);
};

const showBigPicture = () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCountBlock.classList.add('hidden');
  commentsLoader.classList.add('hidden');
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

const escapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
};

const addEventListenerToPicture = (picturesInfo) => {
  const pictures = document.querySelectorAll('.picture');

  for (const picture of pictures) {
    picture.addEventListener('click', () => {
      showBigPicture();
      getPictureDetails(picturesInfo[picture.dataset.id - 1]);
    });
  }

  cancelButton.addEventListener('click', hideBigPicture);
  document.addEventListener('keydown', escapeKeydown);
};

export { addEventListenerToPicture };
