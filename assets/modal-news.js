// assets/modal-news.js

document.addEventListener("DOMContentLoaded", function () {
  // Obsługa modala tylko dla linków z klasy .news-link (nie .footer-news-link!)
  document.querySelectorAll('a.news-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Na wszelki wypadek ignorujemy, gdyby miał klasę .footer-news-link
      if (link.classList.contains('footer-news-link')) return;

      e.preventDefault();
      const fullSelector = link.getAttribute('data-full');
      if (!fullSelector) return;

      const contentElem = document.querySelector(fullSelector);
      if (!contentElem) return;

      openNewsModal(contentElem.innerHTML);
    });
  });

  // Zamknięcie modala przy kliknięciu w X lub tło
  function openNewsModal(html) {
    let modal = document.getElementById('news-modal-dynamic');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'news-modal-dynamic';
      modal.className = 'news-modal';
      modal.style.position = 'fixed';
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.background = 'rgba(0,0,0,0.5)';
      modal.style.zIndex = 10000;
      modal.innerHTML = `
        <div class="news-modal-content" id="news-modal-content-dynamic" style="margin:60px auto;max-width:700px;background:#fff;padding:32px;border-radius:10px;position:relative">
          <span class="news-modal-close" style="position:absolute;top:10px;right:20px;cursor:pointer;font-size:2em;">&times;</span>
          <div id="news-modal-body-dynamic"></div>
        </div>
      `;
      document.body.appendChild(modal);
      // Zamknięcie przez X
      modal.querySelector('.news-modal-close').onclick = () => modal.remove();
      // Zamknięcie przez kliknięcie w tło
      modal.onclick = e => { if (e.target === modal) modal.remove(); };
    }
    // Wstawiamy treść do dynamicznego modala
    const body = document.getElementById('news-modal-body-dynamic');
    if (body) {
      body.innerHTML = html + '<br><button onclick="document.getElementById(\'news-modal-dynamic\').remove()">Zamknij</button>';
    }
    modal.style.display = 'block';
  }

  // Opcjonalnie: zamknij modal klawiszem ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
      const modal = document.getElementById('news-modal-dynamic');
      if (modal) modal.remove();
    }
  });
});
