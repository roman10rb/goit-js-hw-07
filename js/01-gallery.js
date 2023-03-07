import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const createGalleryElements = createGallery(galleryItems);

galleryContainer.innerHTML = createGalleryElements;

function createGallery(gallery) {
  return gallery.map(({preview, original, description}) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>
    `
  }).join('');

};

galleryContainer.addEventListener('click', handleImage);

function handleImage(event) {
  event.preventDefault();
  if ( event.target.nodeName !== 'IMG') {
    return;
  }
  const originalImgSrs = event.target.dataset.source;
  event.target.src = originalImgSrs;
  const instance = basicLightbox.create(`
    <img src='${originalImgSrs}' width="800" height="600">
`);
  instance.show();
};


