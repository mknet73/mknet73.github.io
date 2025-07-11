---
layout: default
title: Aktualności
permalink: /aktualnosci/
---

## Aktualności

<div class="news-list">
  {% for post in site.posts %}
    <div class="news-item">
      <div class="news-thumb">
        <img src="{{ post.image }}" alt="{{ post.title }}">
      </div>
      <div class="news-info">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
        <a href="{{ post.url | relative_url }}" class="news-more-btn">Czytaj więcej</a>
      </div>
    </div>
  {% endfor %}
</div>
