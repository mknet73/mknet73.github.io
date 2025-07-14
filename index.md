---
layout: default
title: Strona główna
---

<h1>Witaj na mojej stronie!</h1>
<p>To jest strona zbudowana w Jekyll z motywem minimal.</p>

<div class="homepage-news-grid">
  {% assign posts = site.posts | slice: 0,6 %}
  {% for post in posts %}
    <a class="homepage-news-tile" href="/aktualnosci/">
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}">
      {% else %}
        <div class="homepage-news-placeholder"></div>
      {% endif %}
      <div class="homepage-news-title">{{ post.title }}</div>
    </a>
  {% endfor %}
</div>
