// Lightbox dla zdjęć w newsach (.news-gallery-img)

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.news-gallery-img').forEach(function(img) {
    img.addEventListener('click', function() {
      showLightbox(img.src, img.alt);
    });
  });

  function showLightbox(src, alt) {
    // Tworzymy overlay
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const image = document.createElement('img');
    image.className = 'lightbox-image';
    image.src = src;
    image.alt = alt || '';

    overlay.appendChild(image);
    document.body.appendChild(overlay);

    // Zamknięcie po kliknięciu overlay lub ESC
    overlay.addEventListener('click', function() {
      overlay.remove();
    });
    document.addEventListener('keydown', function escListener(e) {
      if (e.key === "Escape") {
        overlay.remove();
        document.removeEventListener('keydown', escListener);
      }
    });
  }
});
