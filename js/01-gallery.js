import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryUl = document.querySelector('.gallery');
const cardsGallery = createGalleryItems(items);

galleryUl.insertAdjacentHTML('beforeend', cardsGallery);

function createGalleryItems(items) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return '       
            <div class ="gallery__item" >
                <a class="gallery__link" href="large-image.jpg">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>  
         </div >';
    })
.join(''); 
}






// const gallery = document.querySelector("gallery");

// gallery.addEventListener("click", onclick);

// function onClick(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   console.log(event.target.textContent);
// }

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

