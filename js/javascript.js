// Array of photo objects
const photos1 = [
  { src: "img/graf/graf_1.jpg", alt: "Zdjęcie 1" },
  { src: "img/graf/graf_2.jpg", alt: "Zdjęcie 2" },
  { src: "img/graf/graf_3.jpg", alt: "Zdjęcie 3" },
  { src: "img/graf/graf_4.jpg", alt: "Zdjęcie 4" },
];

const photos2 = [
  { src: "img/inst/inst_1.jpg", alt: "Zdjęcie 1" },
  { src: "img/inst/inst_2.jpg", alt: "Zdjęcie 2" },
  { src: "img/inst/inst_3.jpg", alt: "Zdjęcie 3" },
  { src: "img/inst/inst_4.jpg", alt: "Zdjęcie 4" },
  { src: "img/inst/inst_5.jpg", alt: "Zdjęcie 5" },
  { src: "img/inst/inst_6.jpg", alt: "Zdjęcie 6" },
  { src: "img/inst/inst_7.jpg", alt: "Zdjęcie 7" },
  { src: "img/inst/inst_8.jpg", alt: "Zdjęcie 8" },
  { src: "img/inst/inst_9.jpg", alt: "Zdjęcie 9" },
  { src: "img/inst/inst_10.jpg", alt: "Zdjęcie 10" },
];

// Function to create photo gallery
function createPhotoGallery(photos, galleryContainerId) {
  const galleryContainer = document.getElementById(galleryContainerId);

  if (!galleryContainer) {
    console.error(`Container with ID '${galleryContainerId}' not found.`);
    return;
  }

  // Clear existing content in case it's called multiple times
  galleryContainer.innerHTML = "";

  // Loop through the photos array and create HTML elements
  photos.forEach((photo) => {
    const colDiv = document.createElement("div");
    colDiv.classList.add("col-12", "col-sm-6", "col-lg-4", "photo-container");

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt;
    img.title = photo.alt;
    img.classList.add("photo", "img-fluid");
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#photoModal");
    img.onclick = () => showImage(photo.src, photo.alt);

    colDiv.appendChild(img);
    galleryContainer.appendChild(colDiv);
  });
}

// Function to show the image in a modal
function showImage(imageSrc, imageAlt) {
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");

  if (modalImage && modalTitle) {
    modalImage.src = imageSrc;
    modalTitle.textContent = imageAlt;
  } else {
    console.error("Modal elements not found.");
  }
}

// Ensure the galleries are created when the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  createPhotoGallery(photos1, "photo-gallery_graf");
  createPhotoGallery(photos2, "photo-gallery_inst");
});
