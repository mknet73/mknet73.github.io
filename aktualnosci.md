---
layout: default
title: Aktualności
permalink: /aktualnosci/
---

<h1>Aktualności</h1>

{% for post in site.posts %}
  <div class="news-item" data-post-id="{{ post.id }}">
    <h2>{{ post.title }}</h2>
    <div class="news-summary">
      {{ post.excerpt | markdownify }}
    </div>
    <a href="#" class="news-readmore" data-url="{{ post.url }}">Czytaj więcej</a>
  </div>
{% endfor %}

<!-- MODAL NEWS -->
<div id="news-modal" class="news-modal">
  <div class="news-modal-content">
    <span class="news-modal-close">&times;</span>
    <div id="news-modal-body"></div>
  </div>
</div>
<script src="/assets/modal-news.js"></script>
