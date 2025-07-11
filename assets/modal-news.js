// MODAL NEWS - obsługa otwierania i zamykania newsów w modalu
document.addEventListener("DOMContentLoaded", function() {
  // Obsługa linków "Czytaj więcej"
  document.querySelectorAll(".news-readmore").forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      var fullId = link.getAttribute("data-full");
      var fullContent = document.querySelector(fullId);
      if (!fullContent) return;
      var modal = document.getElementById("news-modal");
      var modalBody = document.getElementById("news-modal-body");
      modalBody.innerHTML = fullContent.innerHTML;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  // Zamknięcie modala po kliknięciu X
  document.querySelector(".news-modal-close").onclick = function() {
    document.getElementById("news-modal").style.display = "none";
    document.body.style.overflow = "";
  };

  // Zamknięcie modala po kliknięciu poza treść modala
  document.getElementById("news-modal").addEventListener("click", function(e) {
    if (e.target === this) {
      this.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});

// LIGHTBOX dla news-gallery-img
document.addEventListener('DOMContentLoaded', function() {
  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('news-gallery-img')) {
      e.preventDefault();
      const src = e.target.getAttribute('src');
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = `<img src="${src}" class="lightbox-image" alt="">`;
      overlay.addEventListener('click', function() {
        overlay.remove();
      });
      document.body.appendChild(overlay);
    }
  });
});
