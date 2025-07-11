// assets/modal-news.js

document.addEventListener("DOMContentLoaded", function () {
  // Obsługa kliknięć w linki news-link
  document.querySelectorAll('a.news-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Pobierz selektor zawartości z data-full
      const fullSelector = link.getAttribute('data-full');
      if (!fullSelector) return;

      const contentElem = document.querySelector(fullSelector);
      if (!contentElem) return;

      showModal(contentElem.innerHTML);
    });
  });

  // Zamknięcie modala po kliknięciu X lub tła
  var modal = document.getElementById('news-modal');
  if (modal) {
    var closeBtn = modal.querySelector('.news-modal-close');
    if (closeBtn) {
      closeBtn.onclick = function() {
        modal.style.display = 'none';
      };
    }
    modal.onclick = function(e) {
      if (e.target === modal) modal.style.display = 'none';
    };
  }

  // Zamknięcie modala przez ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      var modal = document.getElementById('news-modal');
      if (modal) modal.style.display = 'none';
    }
  });

  function showModal(html) {
    var modal = document.getElementById('news-modal');
    var body = document.getElementById('news-modal-body');
    if (modal && body) {
      body.innerHTML = html;
      modal.style.display = 'block';
    }
  }
});
