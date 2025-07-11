// Obsługa modala dla postów "czytaj więcej" z AJAX

document.addEventListener('DOMContentLoaded', function(){
  // Otwieranie modala z ładowaniem treści przez AJAX
  document.querySelectorAll('.news-readmore').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const postUrl = this.getAttribute('data-url');
      
      if(postUrl) {
        // Pokazanie modala z informacją o ładowaniu
        const modalBody = document.getElementById('news-modal-body');
        modalBody.innerHTML = '<div style="text-align: center; padding: 20px;">Ładowanie...</div>';
        document.getElementById('news-modal').style.display = 'block';
        document.body.style.overflow = "hidden";
        
        // Pobranie treści posta przez AJAX
        fetch(postUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Błąd pobierania treści');
            }
            return response.text();
          })
          .then(html => {
            // Parsowanie HTML i wyciągnięcie treści z .news-single
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const newsSingle = doc.querySelector('.news-single');
            
            if (newsSingle) {
              modalBody.innerHTML = newsSingle.innerHTML;
            } else {
              modalBody.innerHTML = '<div style="text-align: center; padding: 20px;">Błąd: nie znaleziono treści posta.</div>';
            }
          })
          .catch(error => {
            console.error('Błąd podczas ładowania posta:', error);
            modalBody.innerHTML = '<div style="text-align: center; padding: 20px;">Błąd podczas ładowania treści.</div>';
          });
      }
    });
  });

  // Zamknięcie przez X
  document.querySelector('.news-modal-close').onclick = function() {
    document.getElementById('news-modal').style.display = 'none';
    document.body.style.overflow = "";
  };

  // Zamknięcie przez kliknięcie w tło
  window.onclick = function(event) {
    if (event.target == document.getElementById('news-modal')) {
      document.getElementById('news-modal').style.display = 'none';
      document.body.style.overflow = "";
    }
  };

  // Zamknięcie ESC
  document.addEventListener('keydown', function(e){
    if (e.key === "Escape") {
      document.getElementById('news-modal').style.display = 'none';
      document.body.style.overflow = "";
    }
  });
});
