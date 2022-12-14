import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryUl = document.querySelector(".gallery");

function makeGallery(arr) {
  const galleryItemsMarkup = arr
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
    })
    .join("");
  return galleryUl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
}

makeGallery(galleryItems);
const newGallery = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
