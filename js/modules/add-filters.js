import { FILTERS, RANDOM_PICTURES_NUM } from './const.js';

const imageFilters = document.querySelector('.img-filters');

let currentFilter = FILTERS.DEFAULT;
let pictures = [];

const removeActiveButtonFromCurrentFilter = () => {
  const activeFilter = imageFilters.querySelector('.img-filters__button--active');
  activeFilter.classList.remove('img-filters__button--active');
};

const randomFilter = () => Math.random() - 0.5;
const filterByComments = (firstImage, secondImage) => secondImage.comments.length - firstImage.comments.length;

const getFilteredPictures = () => {
  switch (currentFilter) {
    case FILTERS.RANDOM:
      return [...pictures].sort(randomFilter).slice(0, RANDOM_PICTURES_NUM);
    case FILTERS.DISCUSSED:
      return [...pictures].sort(filterByComments);
    default:
      return [...pictures];
  }
};

const onFilterClick = (callback) => {
  imageFilters.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const clickedButton = evt.target;

    if (clickedButton.id === currentFilter) {
      return;
    }

    removeActiveButtonFromCurrentFilter();
    clickedButton.classList.add('img-filters__button--active');
    currentFilter = clickedButton.id;

    callback(getFilteredPictures());
  });
};

const showFilterButtons = (loadedPictures, callback) => {
  imageFilters.classList.remove('img-filters--inactive');
  pictures = [...loadedPictures];

  onFilterClick(callback);
};

export { showFilterButtons };
