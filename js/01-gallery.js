import galleryItems from "./gallery-items.js";

// Change code below this line

const ourDiv = document.querySelector(".gallery");

const gallery = galleryItems
  .map((item) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
      data-name="me"
    />
  </a>
</div>`;
  })
  .join("");

ourDiv.insertAdjacentHTML("afterbegin", gallery);

ourDiv.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName === "IMG") {
        // console.log(event.target.dataset.source);
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source
            }" alt="${event.target.getAttribute("alt")}"/> `
      
        );
        instance.show();

        const closeModal = (event) => {
            if (event.key === "Escape") {
                instance.close();
                
                document.removeEventListener("keydown", closeModal);
                
            };
        };
            document.addEventListener("keydown", closeModal)

                                   };
            });
        












