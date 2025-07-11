// Obsługa modala dla postów "czytaj więcej"

document.addEventListener('DOMContentLoaded', function(){
  // Otwieranie modala
  document.querySelectorAll('.news-readmore').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-full');
      const contentDiv = document.querySelector(target);
      if(contentDiv) {
        document.getElementById('news-modal-body').innerHTML = contentDiv.innerHTML;
        document.getElementById('news-modal').style.display = 'block';
        document.body.style.overflow = "hidden";
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
