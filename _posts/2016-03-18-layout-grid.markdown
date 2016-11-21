---
layout: post
title:  "Grid"
date:   2016-03-18 07:21:01 +0000
description: "All elements align to a 12 column baseline grid that ajusts based on the viewport it's being presented on. Components should inherid (via @mixin) column styles, so the DOM stays as DRY and semantic as possible."
categories: Layout
---
<div class="row">
  <div class="col-1">1</div>
  <div class="col-11">11</div>

  <div class="col-2">2</div>
  <div class="col-10">10</div>

  <div class="col-3">3</div>
  <div class="col-9">9</div>

  <div class="col-4">4</div>
  <div class="col-8">8</div>

  <div class="col-5">5</div>
  <div class="col-7">7</div>

  <div class="col-6">6</div>
  <div class="col-6">6</div>

  <div class="col-7">7</div>
  <div class="col-5">5</div>

  <div class="col-8">8</div>
  <div class="col-4">4</div>

  <div class="col-9">9</div>
  <div class="col-3">3</div>

  <div class="col-10">10</div>
  <div class="col-2">2</div>

  <div class="col-11">11</div>
  <div class="col-1">1</div>
</div>
