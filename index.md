---
layout: default
title: Strona główna
---

<h1 class="news-main-title">Aktualności</h1>
<p class="news-main-lead">
  Regularnie dzielimy się aktualnymi informacjami o tym, co się dzieje. Oto najnowsze informacje.
</p>
<div class="news-cards-grid">
  {% assign posts = site.posts | slice: 0, 6 %}
  {% for post in posts %}
    <a class="news-card" href="/aktualnosci/">
      <div class="news-card-title">{{ post.title }}</div>
      <div class="news-card-date">{{ post.date | date: "%B %d, %Y" }}</div>
      <div class="news-card-excerpt">
        {{ post.excerpt | strip_html | truncate: 200 }}
      </div>
    </a>
  {% endfor %}
</div>
