// Lightbox dla zdjęć w newsach (.news-gallery-img), działa także na obrazach w modalach newsów

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener('click', function(e) {
    const img = e.target.closest('.news-gallery-img');
    if (img) {
      showLightbox(img.src, img.alt);
    }
  });

  function showLightbox(src, alt) {
    // Tworzymy overlay lightboxa
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    const image = document.createElement('img');
    image.className = 'lightbox-image';
    image.src = src;
    image.alt = alt || '';

    overlay.appendChild(image);
    document.body.appendChild(overlay);

    // Zamknięcie po kliknięciu overlay lub ESC
    function closeLightbox() {
      overlay.remove();
      document.removeEventListener('keydown', escListener);
    }
    overlay.addEventListener('click', closeLightbox);

    function escListener(e) {
      if (e.key === "Escape") {
        closeLightbox();
      }
    }
    document.addEventListener('keydown', escListener);
  }
});
