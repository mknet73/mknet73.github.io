document.addEventListener("DOMContentLoaded", function () {
  // Obsługa modala tylko dla linków z klasy .news-link, NIE .footer-news-link
  document.querySelectorAll('a.news-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Nie przechwytuj, jeśli link ma również klasę .footer-news-link (na wszelki wypadek)
      if (link.classList.contains('footer-news-link')) return;

      e.preventDefault();
      const url = link.getAttribute('href');
      openNewsModal(url);
    });
  });

  function openNewsModal(url) {
    // Przykład ładowania treści AJAX-em i wyświetlenia w modalu
    fetch(url)
      .then(response => response.text())
      .then(html => {
        showModal(html);
      });
  }

  function showModal(html) {
    let modal = document.getElementById('news-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'news-modal';
      modal.style.position = 'fixed';
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.width = '100vw';
      modal.style.height = '100vh';
      modal.style.background = 'rgba(0,0,0,0.5)';
      modal.style.zIndex = 10000;
      modal.innerHTML = '<div id="news-modal-content" style="margin:60px auto;max-width:700px;background:#fff;padding:32px;border-radius:10px;position:relative"></div>';
      document.body.appendChild(modal);
      modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
      });
    }
    document.getElementById('news-modal-content').innerHTML = html + '<br><button onclick="document.getElementById(\'news-modal\').remove()">Zamknij</button>';
    modal.style.display = 'block';
  }
});
