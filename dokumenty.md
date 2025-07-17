---
layout: default
title: Dokumenty
permalink: /dokumenty/
documents:
  - name: certyfikat szkolenia
    type: PDF
    date: 2024-03-18
    url: /assets/documents/certyfikat_szkolenia.pdf
  - name: regulamin
    type: PDF
    date: 2024-06-10
    url: /assets/documents/regulamin.pdf
  - name: certyfikat uprawnienia
    type: DOCX
    date: 2024-07-01
    url: /assets/documents/certyfikat_uprawnienia.docx
  - name: cennik
    type: DOCX
    date: 2024-07-01
    url: /assets/documents/cennik.docx
---

<h1>Dokumenty do pobrania</h1>

<!-- Tu pojawi się select -->

<ul id="documents-list" class="documents-list">
  {% for doc in page.documents %}
    <li class="document-item" data-prefix="{{ doc.name | split: ' ' | first }}">
      <div class="document-header">
        <span class="document-name">{{ doc.name }}</span>
        <span class="document-type">{{ doc.type }}</span>
        <span class="document-date">{{ doc.date }}</span>
      </div>
      <a href="{{ doc.url }}" download class="document-download-link">Pobierz dokument</a>
    </li>
  {% endfor %}
</ul>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Wyciągnij wszystkie prefixy z data-prefix
  const items = document.querySelectorAll('.document-item');
  const prefixes = Array.from(items).map(item => item.getAttribute('data-prefix'));
  const uniquePrefixes = [...new Set(prefixes)];
  // Dodaj select nad listą
  const select = document.createElement('select');
  select.innerHTML = '<option value="">-- Wszystkie --</option>' +
    uniquePrefixes.map(p => `<option value="${p}">${p}</option>`).join('');
  select.style.marginBottom = '18px';
  // Wstaw select przed listą dokumentów
  const list = document.getElementById('documents-list');
  list.parentNode.insertBefore(select, list);
  // Obsługa filtrowania
  select.addEventListener('change', function() {
    items.forEach(item => {
      if (!select.value || item.getAttribute('data-prefix') === select.value) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
</script>
