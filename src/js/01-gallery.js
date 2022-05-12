// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');

function createListImagesMarkup(images) {
  return images
    .map(
      imgItem =>
        `
        <a class="gallery__item" href="${imgItem.original}">
          <img
            class="gallery__image"
            src="${imgItem.preview}"
            data-source="${imgItem.original}"
            alt="${imgItem.description}"
          />
        </a>
      `,
    )
    .join('');
}

galleryContainer.innerHTML = createListImagesMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', () => {
  gallery.options.captionsData = 'alt';
  gallery.options.captionDelay = 250;
});
