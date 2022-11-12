import { galleryItems } from "./gallery-items.js";

const galleryUl = document.querySelector(".gallery");
const cardsGallery = createGalleryItems("item");

galleryUl.insertAdjacentHTML("beforeend", cardsGallery);
galleryUl.addEventListener("click", onGalleryUlClick);

function createGalleryItems(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class ="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
         </div >`;
    })
    .join("");
}
function onGalleryUlClick(eve) {
  eve.preventDefault();
  if (eve.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img
    class="modal__image"
    src="${eve.target.dataset.source}"
    />
  </div>
  `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
        instance.element().querySelector("img").onclick = instance.close;
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(eve) {
    if (eve.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
