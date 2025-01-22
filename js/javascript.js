// Array of photo objects
const photos1 = [
  { src: "img/graf/graf1.jpg", alt: "Zdjęcie 1" },
];

const photos2 = [
  { src: "img/inst/inst1.jpg", alt: "Zdjęcie 1" },
  { src: "img/inst/inst2.jpg", alt: "Zdjęcie 2" },
  { src: "img/inst/inst3.jpg", alt: "Zdjęcie 3" },
  { src: "img/inst/inst4.jpg", alt: "Zdjęcie 4" },
  { src: "img/inst/inst5.jpg", alt: "Zdjęcie 5" },
  { src: "img/inst/inst6.jpg", alt: "Zdjęcie 6" },
  { src: "img/inst/inst7.jpg", alt: "Zdjęcie 7" },
  { src: "img/inst/inst8.jpg", alt: "Zdjęcie 8" },
  { src: "img/inst/inst9.jpg", alt: "Zdjęcie 9" },
  { src: "img/inst/inst10.jpg", alt: "Zdjęcie 10" },
  { src: "img/inst/inst11.jpg", alt: "Zdjęcie 11" },
  { src: "img/inst/inst12.jpg", alt: "Zdjęcie 12" },
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

// New video data
const newVideos = [
{ title: "", url: "img/inst/film1.mp4" },
{ title: "", url: "img/inst/film2.mp4"  },
{ title: "", url: "img/inst/film3.mp4"  },
];

// Function to render new videos in the specified section
function renderNewVideos() {
const videoGallery = document.getElementById("video-gallery_inst");
if (!videoGallery) return;

newVideos.forEach((video) => {
  const videoDiv = document.createElement("div");
  videoDiv.className = "col-12 col-md-6 col-lg-4";
  videoDiv.innerHTML = `
	<div class="card">
	  <video controls class="card-img-top">
		<source src="${video.url}" type="video/mp4" />
		Your browser does not support the video tag.
	  </video>
	  <div class="card-body">
		<h5 class="card-title">${video.title}</h5>
	  </div>
	</div>`;
  videoGallery.appendChild(videoDiv);
});
}

// Initialize video rendering on page load
document.addEventListener("DOMContentLoaded", renderNewVideos);