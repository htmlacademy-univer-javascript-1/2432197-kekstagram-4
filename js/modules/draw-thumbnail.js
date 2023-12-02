const template = document.querySelector('#picture').content.querySelector('.picture');
const thumbnails = document.querySelector('.pictures');

const getThumbnail = (pictureInfo) => {
  const picture = template.cloneNode(true);

  picture.querySelector('.picture__img').src = pictureInfo.url;
  picture.querySelector('.picture__img').alt = pictureInfo.description;
  picture.querySelector('.picture__comments').textContent = pictureInfo.comments.length;
  picture.querySelector('.picture__likes').textContent = pictureInfo.likes;
  picture.dataset.id = pictureInfo.id;

  return picture;
};

const drawThumbnail = (picturesInfo) => {
  const documentFragment = document.createDocumentFragment();

  for (const pictureInfo of picturesInfo) {
    const newThumbnail = getThumbnail(pictureInfo);
    documentFragment.append(newThumbnail);
  }

  thumbnails.appendChild(documentFragment);
};

export { drawThumbnail };
