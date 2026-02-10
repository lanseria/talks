---
highlighter: shiki
css: unocss
transition: slide-left
mdc: true
layout: cover
colorSchema: dark
glowSeed: 2026
glowOpacity: 0.5
lang: zh-CN
title: 下一代通讯协议构想
---

# 协议与应用分离
## Protocol & Application Separation

<div class="text-white mt-4 text-xl font-light">
打破围墙花园 · 数据本地优先 · 国家基建主导
</div>

<div class="absolute bottom-20">
  <span class="font-bold text-lg text-slate-400">面向未来的 00/10 后开发者启示录</span>
</div>

<!--
大家好。今天我想和大家探讨一个关于未来的构想。
现在的互联网被巨头割裂成了一个个孤岛，我们想提出一种新的架构：
让通讯回归基础设施，让数据回归用户本体。
这是一个给未来 10 后开发者的创业蓝图。
-->

---
layout: default
glowOpacity: 0.2
---

# 当前的困境：围墙花园

<div grid="~ cols-2 gap-10" mt-16 items-center>
  
  <!-- 左侧：痛点描述 -->
  <div class="space-y-6">
    <div v-click class="flex items-start gap-4">
      <div class="mt-1 p-2 bg-red-500/20 rounded-lg text-red-400">
        <div i-carbon-data-error text-2xl />
      </div>
      <div>
        <h3 class="text-red-200 text-lg font-bold">数据被绑架</h3>
        <p class="text-slate-400 text-sm mt-1">
          你的聊天记录属于腾讯或 Meta，不属于你。一旦封号，数字资产清零。
        </p>
      </div>
    </div>
    <div v-click class="flex items-start gap-4">
      <div class="mt-1 p-2 bg-orange-500/20 rounded-lg text-orange-400">
        <div i-carbon-ibm-cloud-direct-link-1-dedicated text-2xl />
      </div>
      <div>
        <h3 class="text-orange-200 text-lg font-bold">互联不互通</h3>
        <p class="text-slate-400 text-sm mt-1">
          微信发的消息，钉钉收不到。商业壁垒导致了极大的社会资源浪费。
        </p>
      </div>
    </div>
    <div v-click class="flex items-start gap-4">
      <div class="mt-1 p-2 bg-slate-500/20 rounded-lg text-slate-400">
        <div i-carbon-locked text-2xl />
      </div>
      <div>
        <h3 class="text-slate-200 text-lg font-bold">监管与隐私的矛盾</h3>
        <p class="text-slate-400 text-sm mt-1">
          完全私有化导致监管困难，完全中心化导致隐私裸奔。我们需要第三条路。
        </p>
      </div>
    </div>
  </div>
  <!-- 右侧：视觉隐喻 -->
  <div class="relative h-60 flex items-center justify-center">
    <!-- 封闭的环 -->
    <div class="absolute w-48 h-48 rounded-full border-4 border-dashed border-slate-700 animate-spin-slow"></div>
    <div class="z-10 text-center space-y-4">
      <div class="bg-slate-800 p-4 rounded-xl border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
        <div i-carbon-app-connectivity text-5xl text-red-400 mb-2 />
        <div class="text-xs text-red-300">Walled Garden</div>
      </div>
    </div>
  </div>
</div>

<!--
现在的通讯软件是“围墙花园”。
我们的数据被锁定在商业公司的服务器里。
这带来了三个问题：数据主权丧失、平台互通性差、以及监管与隐私的二元对立。
-->

---
layout: intro
---

# 核心构想：邮局与信箱
## The "Post Office" Model

<div class="mt-10 grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
  
  <!-- 传输层 -->
  <div class="bg-blue-900/20 border border-blue-500/30 p-6 rounded-xl text-center relative group">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">Gov / Public</div>
    <div i-carbon-network-public text-6xl text-blue-400 mx-auto mb-4 group-hover:scale-110 transition />
    <h3 class="text-xl font-bold text-blue-200">传输层 (通道)</h3>
    <p class="text-sm text-slate-400 mt-2">
      国家数字基建 / 协议<br/>
      负责路由、鉴权、反诈<br/>
      <b>数据暂存，即送即焚</b>
    </p>
  </div>

  <!-- 连接符 -->
  <div class="flex flex-col items-center gap-2 opacity-50">
    <div i-carbon-arrows-horizontal text-4xl text-slate-400 />
    <span class="text-xs font-mono">Separation</span>
  </div>

  <!-- 应用层 -->
  <div class="bg-emerald-900/20 border border-emerald-500/30 p-6 rounded-xl text-center relative group">
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-2 py-0.5 rounded">Commercial / User</div>
    <div i-carbon-data-blob text-6xl text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition />
    <h3 class="text-xl font-bold text-emerald-200">应用/存储层</h3>
    <p class="text-sm text-slate-400 mt-2">
      本地优先 (Local-First)<br/>
      Obsidian 模式<br/>
      <b>数据私有，永久保存</b>
    </p>
  </div>

</div>

<div class="mt-12 text-center text-slate-400 text-sm max-w-2xl mx-auto border-t border-slate-700 pt-6">
  "政府负责修路（保障安全与联通），企业负责造车（提供体验与服务），用户拥有货物（数据）。"
</div>

<!--
为了解决这个问题，我们提出“协议与应用分离”的架构。
左边是传输层，由国家或社团主导，像邮局一样，只负责送信，确保安全和反诈，但不扣留信件。
右边是应用层，由商业公司开发，像信箱或日记本，信件送达后落地为本地文件，完全属于用户。
-->

---
glowSeed: 5
---

# 商业模式：Obsidian 通讯版
## Local-First Architecture

<div grid="~ cols-3 gap-6" mt-12>

  <div v-click class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
    <div class="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition">
      <div i-carbon-code text-5xl text-teal-400 />
    </div>
    <h3 class="text-teal-300 font-bold text-lg mb-2">社区版 (开源)</h3>
    <ul class="text-xs text-slate-400 space-y-2 list-disc pl-4">
      <li>标准协议解析器</li>
      <li>极简 UI，无广告</li>
      <li>数据存储为 SQLite/JSON</li>
      <li><b>盈利点：</b> 无 (作为基础设施)</li>
    </ul>
  </div>

  <div v-click class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
    <div class="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition">
      <div i-carbon-paint-brush text-5xl text-purple-400 />
    </div>
    <h3 class="text-purple-300 font-bold text-lg mb-2">商业客户端</h3>
    <ul class="text-xs text-slate-400 space-y-2 list-disc pl-4">
      <li>极致的 UI/UX 体验</li>
      <li>游戏化社交 / 虚拟形象</li>
      <li>企业级协作功能集成</li>
      <li><b>盈利点：</b> 皮肤、订阅、功能买断</li>
    </ul>
  </div>

  <div v-click class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
    <div class="absolute right-2 top-2 opacity-20 group-hover:opacity-40 transition">
      <div i-carbon-cloud-upload text-5xl text-blue-400 />
    </div>
    <h3 class="text-blue-300 font-bold text-lg mb-2">增值服务 (Sync)</h3>
    <ul class="text-xs text-slate-400 space-y-2 list-disc pl-4">
      <li>端到端加密云备份</li>
      <li>多设备实时同步加速</li>
      <li>大文件高速中转</li>
      <li><b>盈利点：</b> 类似 iCloud/Obsidian Sync</li>
    </ul>
  </div>

</div>

<!--
很多人会问，数据在本地，商业公司怎么赚钱？
参考 Obsidian 的模式：
1. 卖体验：开发更好看的皮肤、更流畅的客户端。
2. 卖服务：提供加密的云同步服务，解决多端问题。
这让商业竞争回归到“服务质量”，而不是“流量垄断”。
-->

---
layout: statement
---

# 杀手锏：AI 本地化
## Chat with YOUR Data

<div class="mt-8 flex flex-col items-center gap-6">
  <div class="text-center max-w-3xl text-slate-300 leading-relaxed">
    在当前模式下，你无法训练一个真正懂你的 AI，因为数据在腾讯的服务器里。
    <br/>
    <span class="text-yellow-400 font-bold">但在本地化通讯模式下：</span>
  </div>

  <div class="grid grid-cols-2 gap-8 w-full max-w-4xl">
    <div class="bg-slate-800 p-6 rounded-xl border border-yellow-500/30 flex items-center gap-4">
      <div i-carbon-machine-learning-model text-4xl text-yellow-400 />
      <div>
        <div class="font-bold text-white">个人数字分身</div>
        <div class="text-xs text-slate-400 mt-1">LLM 读取本地十年聊天记录，复刻你的语气与记忆。</div>
      </div>
    </div>
    <div class="bg-slate-800 p-6 rounded-xl border border-yellow-500/30 flex items-center gap-4">
      <div i-carbon-security text-4xl text-yellow-400 />
      <div>
        <div class="font-bold text-white">隐私零风险</div>
        <div class="text-xs text-slate-400 mt-1">所有训练与推理在本地/私有云完成，数据不出域。</div>
      </div>
    </div>
  </div>
</div>

<!--
这个模式最大的爆发点在于 AI。
未来的社交不只是聊天，是训练自己的数字分身。
只有当聊天记录变成了你硬盘里的文件，你才敢让 AI 去读取它、分析它，从而得到一个真正属于你的智能助理。
-->

---
layout: intro
glowX: 50
glowY: 120
---

# 致未来的 10 后开发者

<div class="mt-8 space-y-6 text-lg text-slate-300">
  <p>
    我们这一代解决了<span class="text-teal-400 font-bold">“连接”</span>的问题。<br/>
    你们的使命，是解决<span class="text-purple-400 font-bold">“主权”</span>的问题。
  </p>
  
  <p>
    不要再造下一个微信。<br/>
    去造<span class="text-white border-b-2 border-blue-500">数字世界的“水管”与“水杯”</span>。
  </p>

  <div class="flex gap-4 mt-12 text-sm text-slate-500 font-mono">
    <div class="flex items-center gap-2">
      <div i-carbon-code /> Open Protocol
    </div>
    <div class="flex items-center gap-2">
      <div i-carbon-data-base /> Local Storage
    </div>
    <div class="flex items-center gap-2">
      <div i-carbon-user-role /> User Sovereign
    </div>
  </div>
</div>

<!--
最后，这是给未来创业者的寄语。
不要试图去建立新的围墙，要去打破它。
通过“协议与应用分离”，把互联网还给用户。
谢谢大家。
-->