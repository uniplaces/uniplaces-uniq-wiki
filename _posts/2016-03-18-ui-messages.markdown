---
layout: post
title:  "Messages"
date:   2016-03-18 07:21:01 +0000
description: "Wrap any text and an optional dismiss button in .alert and one of the four contextual classes (e.g., .alert--success) for basic alert messages."
categories: "UI-Components"
---
<div class="alert alert--success">
  <div class="alert__title">Success message example.</div>
  Lorem ipsum dolor <a href="#">sit amet</a>, consectetur adipisicing elit.
</div>

<div class="alert alert--warning">
  <div class="alert__title">Warning message example.</div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  <div class="alert__close" aria-label="Close" role="button">+</div>
</div>

<div class="alert alert--error">
  <div class="alert__title">Error message example.</div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  <div class="alert__close" aria-label="Close" role="button">+</div>
</div>

<div class="alert" role="dialog">
  <div class="alert__title">Neutral/informational message example.</div>
  Lorem ipsum dolor sit amet, consectetur <a href="#">adipisicing elit</a>.
  <div class="alert__close" aria-label="Close" role="button">+</div>
</div>
