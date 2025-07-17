---
layout: default
title: Dokumenty
permalink: /dokumenty/
---

<h1>Dokumenty do pobrania</h1>

<ul id="documents-list" class="documents-list">
  {% assign docs = site.static_files | where_exp: "item", "item.path contains '/assets/documents/'" %}
  {% for doc in docs %}
    <li class="document-item" data-prefix="{{ doc.name | split: '_' | first }}">
      <div class="document-header">
        <span class="document-name">{{ doc.name | replace: '_', ' ' | remove: doc.ext }}</span>
        <span class="document-type">{{ doc.ext | upcase }}</span>
        <span class="document-date">
          {% if doc.last_modified_at %}
            {{ doc.last_modified_at | date: "%Y-%m-%d" }}
          {% else %}
            Brak daty
          {% endif %}
        </span>
      </div>
      <a href="{{ doc.path }}" download class="document-download-link">Pobierz dokument</a>
    </li>
  {% endfor %}
</ul>

<!-- Select z prefixami (patrz poprzednia odpowiedź) -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.document-item');
  const prefixes = Array.from(items).map(item => item.getAttribute('data-prefix'));
  const uniquePrefixes = [...new Set(prefixes)];
  const select = document.createElement('select');
  select.innerHTML = '<option value="">-- Wszystkie --</option>' +
    uniquePrefixes.map(p => `<option value="${p}">${p}</option>`).join('');
  select.style.marginBottom = '18px';
  const list = document.getElementById('documents-list');
  list.parentNode.insertBefore(select, list);
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
