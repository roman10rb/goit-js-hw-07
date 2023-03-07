import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const createGalleryElements = createGallery(galleryItems);

galleryContainer.innerHTML = createGalleryElements;

function createGallery(gallery) {
  return gallery.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
    `
  }).join('');

};
galleryContainer.addEventListener('click', handleImg);

function handleImg(event) {
    event.preventDefault();
     if ( event.target.nodeName !== 'IMG') {
    return;
     }
};



let lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250, 
 });