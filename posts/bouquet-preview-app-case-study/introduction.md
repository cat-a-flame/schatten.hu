---
layout: layouts/project.liquid
date: 2022-02-17T15:45:00
pageTitle: 'Case study: bouquet preview app'
lead: "A collection of common CSS mistakes, and how to fix them."
socialImage: /posts/images/csshell/csshell.jpg
socialImageWebP: /posts/images/csshell/csshell.webp
tags: posts
pagination:
  data: collections.floral
  size: 10
  reverse: true
  addAllPagesToCollections: true
---

Intro

Page:
<ol>
{% for post in collections.floral %}
  <li><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></li>
{% endfor %}
</ol>