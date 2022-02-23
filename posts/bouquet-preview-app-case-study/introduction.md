---
layout: layouts/project.liquid
date: 2022-02-17T15:45:00
pageTitle: 'Case study: bouquet preview app'
lead: "A collection of common CSS mistakes, and how to fix them."
socialImage: /posts/images/csshell/csshell.jpg
socialImageWebP: /posts/images/csshell/csshell.webp
tags: article
---

Intro

Page:
<ol>
{% for post in collections.floral %}
{% unless post.data.tags contains 'article' %}
  <li><a href="{{ post.url | url }}">{{ post.data.pageTitle }}</a></li>
{% endunless %}
{% endfor %}
</ol>
