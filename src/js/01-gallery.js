import simpleLightbox from "simplelightbox";
console.log(galleryItems);
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
console.log(simpleLightbox);
// Change code below this line


// посилання на контейнер
const galleryContainer = document.querySelector(".gallery");

// роммітка для формування
function createPictureMarkup(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div> 
        `;
    })
    .join("");
}

const cardsMarkup = createPictureMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

