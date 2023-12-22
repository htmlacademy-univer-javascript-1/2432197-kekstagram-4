import { LOADED_COMMENTS_NUM } from './const.js';

const bigPicture = document.querySelector('.big-picture');

const image = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCaption = bigPicture.querySelector('.social__caption');

const comment = document.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const commentsCountBlock = bigPicture.querySelector('.social__comment-count');

let shownCommentsCount = LOADED_COMMENTS_NUM;
let openedPicture;

const createComment = (commentInfo) => {
  const newComment = comment.cloneNode(true);

  newComment.querySelector('.social__picture').src = commentInfo.avatar;
  newComment.querySelector('.social__picture').alt = commentInfo.name;
  newComment.querySelector('.social__text').textContent = commentInfo.message;

  return newComment;
};

const hideCommentsLoaderButton = () => {
  commentsLoader.classList.add('hidden');
};

const showCommentLoaderButton = () => {
  commentsLoader.classList.remove('hidden');
};

const changeCommentsCount = (currentShownCommentsCount, totalCommentsCount) => {
  const messageCommentsCount = `${currentShownCommentsCount} из ${totalCommentsCount} комментариев`;
  commentsCountBlock.textContent = messageCommentsCount;
};

const createComments = () => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  const shownComments = [];
  showCommentLoaderButton();

  for (const commentInfo of openedPicture.comments) {
    if (shownComments.length < shownCommentsCount) {
      shownComments.push(commentInfo);
      fragment.append(createComment(commentInfo));
    }
  }

  if (shownComments.length >= openedPicture.comments.length) {
    hideCommentsLoaderButton();
    commentsLoader.removeEventListener('click', showMoreComments);
  }

  changeCommentsCount(shownComments.length, openedPicture.comments.length);
  commentsList.append(fragment);
};

const getBigPictureDetails = (picture) => {
  openedPicture = picture;
  shownCommentsCount = LOADED_COMMENTS_NUM;

  commentsLoader.addEventListener('click', showMoreComments);

  image.src = openedPicture.url;
  likesCount.textContent = openedPicture.likes;
  commentsCount.textContent = openedPicture.comments.length;
  socialCaption.textContent = openedPicture.description;

  createComments();
};

function showMoreComments() {
  shownCommentsCount += LOADED_COMMENTS_NUM;
  createComments();
}

export { getBigPictureDetails };
