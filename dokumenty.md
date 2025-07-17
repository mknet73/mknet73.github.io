---
layout: default
title: Dokumenty
permalink: /dokumenty/
---

<h1>Dokumenty do pobrania</h1>

<ul class="documents-list">
  {% assign docs = site.static_files | where_exp: "item", "item.path contains '/assets/documents/'" %}
  {% for doc in docs %}
    <li class="document-item">
      <div class="document-header">
        <span class="document-name">{{ doc.name }}</span>
        <span class="document-type">{{ doc.ext | upcase }}</span>
        <span class="document-date">
          {% if doc.last_modified_at %}
            {{ doc.last_modified_at | date: "%Y-%m-%d" }}
          {% endif %}
        </span>
      </div>
      <a href="{{ doc.path }}" download class="document-download-link">Pobierz dokument</a>
    </li>
  {% endfor %}
</ul>
