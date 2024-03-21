const images = [
  { thumb: "./images/thumb-1.png", src: "./images/image-1.png" },
  { thumb: "./images/thumb-2.png", src: "./images/image-2.png" },
  { thumb: "./images/thumb-3.png", src: "./images/image-3.png" },
  { thumb: "./images/thumb-4.png", src: "./images/image-4.png" },
  { thumb: "./images/thumb-5.png", src: "./images/image-5.png" },
  { thumb: "./images/thumb-6.png", src: "./images/image-6.png" },
  { thumb: "./images/thumb-7.png", src: "./images/image-7.png" },
  { thumb: "./images/thumb-8.png", src: "./images/image-8.png" },
  { thumb: "./images/thumb-9.png", src: "./images/image-9.png" },
  { thumb: "./images/thumb-10.png", src: "./images/image-10.png" },
  { thumb: "./images/thumb-11.png", src: "./images/image-11.png" },
  { thumb: "./images/thumb-12.png", src: "./images/image-12.png" }
];

function populateGallery() {
  const galleryElement = document.getElementById("image-gallery");

  images.forEach((image, index) => {
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("image-container");

    const img = document.createElement("img");
    img.setAttribute("src", image.thumb);
    img.setAttribute("alt", "Image " + (index + 1));
    img.addEventListener("click", () => openFullSize(index));

    imageDiv.appendChild(img);
    galleryElement.appendChild(imageDiv);
  });
}

function openFullSize(index) {
  const fullsize = document.getElementById("fullsize");
  const fullsizeImg = document.querySelector(".fullsize-img");
  const existingCaption = document.querySelector(".fullsize .caption");
  if (existingCaption) {
    existingCaption.remove();
  }
  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = "A space image";
  fullsize.appendChild(caption);
  fullsizeImg.setAttribute("src", images[index].src);
  fullsizeImg.addEventListener("click", () => closeFullSize());
  fullsize.style.display = "flex";
}

function closeFullSize() {
  const fullsize = document.getElementById("fullsize");
  fullsize.style.display = "none";
}

populateGallery();
