---
layout: default
title: Aktualności
permalink: /aktualnosci/
---

## Aktualności

<div class="news-list">
 {% for post in site.posts %}
  <div class="news-item" data-post-id="{{ post.id }}">
    <h2>{{ post.title }}</h2>
    <div class="news-summary">{{ post.excerpt }}</div>
    <a href="#" class="news-readmore" data-full="#full-{{ post.id }}">Czytaj więcej</a>
    <div id="full-{{ post.id }}" class="news-full-content" style="display:none;">
      <h2>{{ post.title }}</h2>
      {{ post.content }}
    </div>
  </div>
{% endfor %}
</div>
