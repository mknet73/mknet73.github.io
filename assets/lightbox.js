// Lightbox dla zdjęć w newsach (.news-gallery-img), także w dynamicznych modalach

document.addEventListener("DOMContentLoaded", function () {
  // Delegacja zdarzenia na całego document
  document.body.addEventListener('click', function(e) {
    const img = e.target.closest('.news-gallery-img');
    if (img) {
      showLightbox(img.src, img.alt);
    }
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
