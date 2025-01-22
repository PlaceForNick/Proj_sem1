# Load the JavaScript file content and adapt it to render videos dynamically

file_path = '/mnt/data/javascript.js'

# Load the content for modification
with open(file_path, 'r') as js_file:
    js_content = js_file.read()

# Adapt JavaScript code to handle video rendering along with photos
updated_js_content = """
// Sample media data (photos and videos)
const photos = [
  { title: 'Zdjęcie 1', url: 'img/photo1.jpg', type: 'photo' },
  { title: 'Zdjęcie 2', url: 'img/photo2.jpg', type: 'photo' },
];

const videos = [
  { title: 'Film 1', url: 'videos/video1.mp4', type: 'video' },
  { title: 'Film 2', url: 'videos/video2.mp4', type: 'video' },
];

// Function to render photo gallery
function renderPhotoGallery() {
  const photoGallery = document.getElementById('photo-gallery_graf');
  photos.forEach((photo) => {
    const photoDiv = document.createElement('div');
    photoDiv.className = 'col-12 col-md-6 col-lg-4';
    photoDiv.innerHTML = `
      <div class="card">
        <img src="${photo.url}" class="card-img-top" alt="${photo.title}" />
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
        </div>
      </div>`;
    photoGallery.appendChild(photoDiv);
  });
}

// Function to render video gallery
function renderVideoGallery() {
  const videoGallery = document.getElementById('video-gallery_inst');
  videos.forEach((video) => {
    const videoDiv = document.createElement('div');
    videoDiv.className = 'col-12 col-md-6 col-lg-4';
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

// Initialize galleries
document.addEventListener('DOMContentLoaded', () => {
  renderPhotoGallery();
  renderVideoGallery();
});
"""

# Save the updated JavaScript file
with open(file_path, 'w') as js_file:
    js_file.write(updated_js_content)

# Verify completion
"JavaScript file has been successfully updated to render videos alongside photos."
