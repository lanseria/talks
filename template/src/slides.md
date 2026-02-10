---
highlighter: shiki
css: unocss
transition: fade-out
mdc: true
layout: cover
colorSchema: dark
glowSeed: 2025
glowOpacity: 0.4
lang: zh-CN
title: 演示标题
---

# 演示标题

<div class="text-white mt-2 text-xl">
副标题描述
</div>

<div class="absolute bottom-20">
  <span class="font-bold text-lg">演讲人：姓名</span>
</div>

<!--
演讲备注：这里是演讲者备注内容，不会在幻灯片上显示
-->

---
layout: intro
---

# 关于我

<div class="[&>*]:important-leading-10 opacity-90 text-slate-200 mt-10">

<div flex="~ gap-2 items-center">
  <div i-carbon-code text-teal-400 />
  <span><b>技能1:</b> 描述内容</span>
</div>
<div flex="~ gap-2 items-center">
  <div i-carbon-development text-blue-400 />
  <span><b>技能2:</b> 描述内容</span>
</div>

</div>

<div mt-10 flex="~ gap-4" items-center justify-start text-slate-400>
  <div class="flex items-center gap-2 hover:text-white transition">
    <div i-ri-github-line text-xl />
    <a href="https://github.com/username" target="_blank" class="border-none! font-300">GitHub</a>
  </div>
</div>

---
layout: default
---

# 正文标题

<div class="mt-8 text-slate-300">

正文内容区域

</div>

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

<div class="mt-10 opacity-80">
  <div i-carbon-favorite-filled text-red-400 text-4xl mb-4 inline-block />
  <p class="text-lg">感谢聆听</p>
</div>

<div class="absolute left-1/2 translate-x--1/2 bottom-10 text-slate-500 text-sm">
  幻灯片源码: <a href="https://github.com/username/talks" target="_blank" class="border-b border-slate-600 hover:text-white transition">github.com/username/talks</a>
</div>
