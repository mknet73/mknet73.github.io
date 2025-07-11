---
layout: default
title: Aktualności
permalink: /aktualnosci/
---

<h1>Aktualności</h1>

{% for post in site.posts %}
  <div class="news-item" data-post-id="{{ post.id }}">
    {% if post.image %}
      <div class="news-thumb">
        <img src="{{ post.image }}" alt="{{ post.title }}">
      </div>
    {% endif %}
    <div class="news-info">
      <h2>{{ post.title }}</h2>
      <div class="news-summary">
        {{ post.excerpt | markdownify }}
      </div>
      <a href="#" class="news-readmore" data-full="#full-{{ post.id }}">Czytaj więcej</a>
    </div>
    <div id="full-{{ post.id }}" class="news-full-content" style="display:none;">
      <h2>{{ post.title }}</h2>
      {% if post.image %}
        <img src="{{ post.image }}" alt="{{ post.title }}" class="news-single-img">
      {% endif %}
      <div class="news-single-content">
        {{ post.content }}
      </div>
    </div>
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

