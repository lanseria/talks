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
title: 员工个人2025年年终述职工作
---

# 员工个人2025年年终述职工作

<div class="text-white mt-2 text-xl">
聚焦 · 突破 · 智能协作
</div>

<div class="absolute bottom-20">
  <span class="font-bold text-lg">演讲人：张超</span>
</div>

<!--
大家好，现在由我来汇报一下自己的2025年的年终述职报告。
今年是技术跨度很大的一年，从低代码平台到原生移动端，再到物联网无人机，我都有了深入的涉猎。
此外，我主导开发了海上清舱作业系统，实现了从0到1的安防智能化与数据可视化闭环。
-->

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-30
---

# 张超

<div class="[&>*]:important-leading-10 opacity-90 text-slate-200 mt-10">

<div flex="~ gap-2 items-center">
  <div i-carbon-code text-teal-400 /> 
  <span><b>全栈开发:</b> Vite, Vue3, Nuxt, Golang, Node.js</span>
</div>
<div flex="~ gap-2 items-center">
  <div i-carbon-mobile text-blue-400 />
  <span><b>多端探索:</b> Android (Kotlin), iOS (Swift), Tauri, UniApp</span>
</div>
<div flex="~ gap-2 items-center">
  <div i-carbon-ibm-cloud-pak-manta-automated-data-lineage text-purple-400 />
  <span><b>低代码与IoT:</b> LEGO 框架, MQTT, 无人机 SDK</span>
</div>
<div flex="~ gap-2 items-center">
  <div i-carbon-bot text-yellow-400 />
  <span><b>AI 深度实践:</b> 辅助全栈编码, 产品设计自动化, 效率提升 300%</span>
</div>

</div>

<div my-10 flex="~ gap-4" items-center justify-start text-slate-400>
  <div class="flex items-center gap-2 hover:text-white transition">
    <div i-ri-github-line text-xl />
    <a href="https://github.com/lanseria" target="_blank" class="border-none! font-300">lanseria</a>
  </div>
  <div class="flex items-center gap-2 hover:text-white transition">
    <div i-ri-bilibili-line text-xl />
    <a href="https://space.bilibili.com/8487409" target="_blank" class="border-none! font-300">爱吃包子的超</a>
  </div>
</div>

<img src="https://avatars.githubusercontent.com/u/14802764?v=4" absolute top-36 right-30 w-40 rounded-full border="2 slate-500/30" />

<!--
这是我今年的个人画像。
相比去年，今年新增了 Go 语言后端开发、移动端原生开发（Kotlin/Swift）以及复杂的 LEGO 低代码框架应用。
AI 已经完全融入了我的工作流，成为不可或缺的结对编程伙伴。
-->

---
layout: default
glowOpacity: 0.2
---

# 议程概览

<div grid="~ cols-3 gap-6" mt-12 text-center>
  <div v-click class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
    <div i-carbon-chart-line-smooth text-4xl text-blue-400 mb-4 mx-auto />
    <div class="text-xl font-bold text-slate-200">年度全景</div>
    <div class="text-sm text-slate-400 mt-2">时间线与绩效对标</div>
  </div>

  <div v-click class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
    <div i-carbon-development text-4xl text-teal-400 mb-4 mx-auto />
    <div class="text-xl font-bold text-slate-200">重点项目</div>
    <div class="text-sm text-slate-400 mt-2">物流港 · 油品 · 无人机</div>
  </div>

  <div v-click class="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
    <div i-carbon-idea text-4xl text-yellow-400 mb-4 mx-auto />
    <div class="text-xl font-bold text-slate-200">反思与展望</div>
    <div class="text-sm text-slate-400 mt-2">AI 的双刃剑与 2026 规划</div>
  </div>
</div>

<!--
今天的汇报分为三个部分：
首先回顾全年的工作概况和绩效。
然后深入剖析三个核心大项目。
最后谈谈不足之处以及明年的规划。
-->

---
layout: intro
---

# 个人全年度工作

<!--
让我们先来看看今年的时间线。
-->

---
layout: default
---

# 2025 工作时间轴

<!-- 容器：固定高度，确保定位基准一致 -->
<div class="relative mt-16 h-[320px] w-full px-4">
  
  <!-- 1. 中间的时间轴线 (绝对垂直居中) -->
  <div class="absolute top-1/2 left-6 right-6 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/50 to-teal-500/20 rounded-full -translate-y-1/2 z-0"></div>
  <!-- 节点容器层：覆盖在轴线上 -->
  <div class="relative h-full w-full flex justify-between items-center">
    <!-- 节点 1: 3月 (下方显示) -->
    <div class="relative h-full w-40 group">
      <!-- 圆点：绝对居中 -->
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
      <!-- 下方内容区域 -->
      <div class="absolute top-1/2 left-0 right-0 pt-6 flex flex-col items-center">
        <!-- 连线 -->
        <div class="absolute top-0 h-6 w-0.5 bg-purple-500/30"></div>
        <!-- 文字 -->
        <div class="text-slate-300 font-mono text-sm mb-1">03月</div>
        <div class="text-purple-300 font-bold text-lg leading-tight text-center">海翼无人机</div>
        <div class="text-xs text-slate-400 mt-1 text-center">Go + IoT 探索</div>
      </div>
    </div>
    <!-- 节点 2: 6月 (上方显示) -->
    <div class="relative h-full w-40 group">
      <!-- 圆点 -->
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
      <!-- 上方内容区域 -->
      <div class="absolute bottom-1/2 left-0 right-0 pb-6 flex flex-col items-center justify-end">
        <div class="text-blue-300 font-bold text-lg leading-tight text-center">兴中智慧关务</div>
        <div class="text-xs text-slate-400 mt-1 text-center">多项目并发</div>
        <div class="text-slate-300 font-mono text-sm mt-1">06月</div>
        <!-- 连线 -->
        <div class="absolute bottom-0 h-6 w-0.5 bg-blue-500/30"></div>
      </div>
    </div>
    <!-- 节点 3: 8月 (下方显示) -->
    <div class="relative h-full w-40 group">
      <!-- 圆点 (稍微大一点) -->
      <div class="absolute top-1/2 left-1/2 w-6 h-6 bg-teal-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_30px_rgba(20,184,166,1)] animate-pulse"></div> 
      <!-- 下方内容 -->
      <div class="absolute top-1/2 left-0 right-0 pt-6 flex flex-col items-center">
        <div class="absolute top-0 h-6 w-0.5 bg-teal-500/30"></div>
        <div class="text-slate-300 font-mono text-sm mb-1">08月</div>
        <div class="text-teal-300 font-bold text-lg leading-tight text-center">物流港 3.0</div>
        <div class="text-xs text-slate-400 mt-1 text-center">LEGO 攻坚</div>
      </div>
    </div>
    <!-- 节点 4: 10月 (上方显示) -->
    <div class="relative h-full w-40 group">
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(249,115,22,0.8)]"></div>
      <!-- 上方内容 -->
      <div class="absolute bottom-1/2 left-0 right-0 pb-6 flex flex-col items-center justify-end">
        <div class="text-orange-300 font-bold text-lg leading-tight text-center">人员定位加密</div>
        <div class="text-xs text-slate-400 mt-1 text-center">安全验证对接</div>
        <div class="text-slate-300 font-mono text-sm mt-1">10月</div>
        <div class="absolute bottom-0 h-6 w-0.5 bg-orange-500/30"></div>
      </div>
    </div>
    <!-- 节点 5: 11月 (下方显示) -->
    <div class="relative h-full w-40 group">
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_25px_rgba(6,182,212,0.8)]"></div>
      <!-- 下方内容 -->
      <div class="absolute top-1/2 left-0 right-0 pt-6 flex flex-col items-center">
        <div class="absolute top-0 h-6 w-0.5 bg-cyan-500/30"></div>
        <div class="text-slate-300 font-mono text-sm mb-1">11月</div>
        <div class="text-cyan-300 font-bold text-lg leading-tight text-center">海上清舱</div>
        <div class="text-xs text-slate-400 mt-1 text-center">安防视讯闭环</div>
      </div>
    </div>
    <!-- 节点 6: 12月 (上方显示) -->
    <div class="relative h-full w-40 group">
      <div class="absolute top-1/2 left-1/2 w-4 h-4 bg-lime-500 rounded-full border-4 border-slate-900 -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_20px_rgba(132,204,22,0.8)]"></div>
      <!-- 上方内容 -->
      <div class="absolute bottom-1/2 left-0 right-0 pb-6 flex flex-col items-center justify-end">
        <div class="text-lime-300 font-bold text-lg leading-tight text-center">油品储运升级</div>
        <div class="text-xs text-slate-400 mt-1 text-center">App 原生重构</div>
        <div class="text-slate-300 font-mono text-sm mt-1">12月</div>
        <div class="absolute bottom-0 h-6 w-0.5 bg-lime-500/30"></div>
      </div>
    </div>
  </div>
</div>

<!--
这一年非常充实。
3月启动了无人机项目，挑战 IoT 领域。
年中处理了多个中型项目的快速交付。
8月开始攻坚物流港 3.0，深度使用 LEGO 框架。
年底则集中在油品储运系统的原生移动端升级上。
-->

---
layout: intro
---

# 绩效对标

<div class="w-full max-w-4xl mx-auto mt-10">
  <div class="border border-slate-700 rounded-lg overflow-hidden">
    <table class="w-full text-left border-collapse">
      <thead class="bg-slate-800 text-slate-200">
        <tr>
          <th class="p-4 font-semibold">考核内容</th>
          <th class="p-4 font-semibold w-20">比重</th>
          <th class="p-4 font-semibold">自评 / 完成情况</th>
        </tr>
      </thead>
      <tbody class="text-slate-300 text-sm">
        <tr class="border-b border-slate-700_50 hover:bg-white/5 transition">
          <td class="p-4">售前对接金额</td>
          <td class="p-4 text-teal-400 font-mono">10%</td>
          <td class="p-4">全年参与多个大项目技术支撑，正在开发与已完成项目超 15 个</td>
        </tr>
        <tr class="border-b border-slate-700_50 hover:bg-white/5 transition">
          <td class="p-4">开发执行率（进度）</td>
          <td class="p-4 text-teal-400 font-mono">40%</td>
          <td class="p-4">
            <span class="text-green-400">超额完成</span>。借助 AI 辅助，移动端开发速度提升 200%-300%
          </td>
        </tr>
        <tr class="border-b border-slate-700_50 hover:bg-white/5 transition">
          <td class="p-4">开发质量</td>
          <td class="p-4 text-teal-400 font-mono">25%</td>
          <td class="p-4">负责核心逻辑与复杂框架攻坚，Bug 率显著低于平均水平</td>
        </tr>
        <tr class="border-b border-slate-700_50 hover:bg-white/5 transition">
          <td class="p-4">其他月度任务</td>
          <td class="p-4 text-teal-400 font-mono">15%</td>
          <td class="p-4">按时保质保量完成，包括多个维保与临时调研任务</td>
        </tr>
        <tr class="hover:bg-white/5 transition">
          <td class="p-4">个人常规工作</td>
          <td class="p-4 text-teal-400 font-mono">10%</td>
          <td class="p-4">及时响应，在复杂框架（LEGO）问题上提供团队支持</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!--
今年的绩效重点在于“高效”与“攻坚”。
特别是在开发执行率上，得益于新工具的使用，大大缩短了交付周期。
移除了去年的培训指标，今年更多是实战中的技术输出。
-->

---
layout: intro
---

# 重点工作复盘

<!--
接下来，我将详细汇报三个最具挑战性的重点项目。
-->

---
glowSeed: 1
---

# 1. 物流港 3.0 (LEGO)
## 非常规作业票系统

<div grid="~ cols-2 gap-8" mt-8 items-center>
  <div class="text-slate-300 leading-relaxed">
    <div class="flex items-center gap-2 mb-4 text-blue-400">
      <div i-carbon-calendar />
      <span>2025.08 - 至今</span>
    </div>
    <p>
      基于安元公司自研 <b>LEGO 低代码框架</b> 开发的非常规作业票系统。旨在实现 PC 端与移动端的微应用定制开发，满足复杂的业务流转需求。
    </p>
    <div class="mt-6 flex flex-wrap gap-2">
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">LEGO 微应用</span>
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">微组件</span>
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">工作流</span>
    </div>
  </div>
  
  <div class="relative h-60 rounded-lg border border-blue-500/30 flex items-center justify-center">
    <img src="/2025-wlg3.webp" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
  </div>
</div>

<!--
接下来介绍第一个重头戏：物流港 3.0。
这个项目的特殊之处在于，它完全基于安元公司内部自研的 LEGO 低代码框架。
我们的目标是在这个框架上，搭建一套逻辑极其复杂的“非常规作业票”系统，并要同时打通 PC 和移动端。
这对低代码平台的灵活性提出了极高的要求。
-->

---
glowSeed: 1
---

# 1. 物流港 3.0 (LEGO)
## 挑战与难点

<div grid="~ cols-2 gap-8" mt-12>
  
  <!-- 卡片 1: 框架限制 -->
  <div v-click class="group relative overflow-hidden bg-red-500/10 border border-red-500/40 rounded-xl p-6 transition-all duration-300">
    <!-- 背景水印图标 -->
    <div i-carbon-locked class="absolute -bottom-4 -right-4 text-9xl text-red-500/5 group-hover:text-red-500/10 transition-colors duration-300 transform -rotate-12"></div>
    <div class="flex items-center gap-3 mb-4">
      <div class="p-2 bg-red-500/20 rounded-lg text-red-400">
        <div i-carbon-misuse-outline text-2xl />
      </div>
      <h3 class="text-red-200 text-xl font-bold">框架“黑盒”限制</h3>
    </div>
    <p class="text-slate-400 text-sm leading-6 relative z-10">
      LEGO 框架封装过度，文档定义与运行时表现存在“语义断层”。
    </p>
    <div class="mt-4 bg-red-900/20 border border-red-500/20 p-3 rounded text-xs relative z-10">
      <span class="text-red-300 font-bold block mb-1">
        <div i-carbon-warning-filled inline-block mr-1 /> 痛点：
      </span>
      <span class="text-red-200/70">生成字段哈希不一致，导致容器与微应用数据链路断裂。此类问题极具隐蔽性，排查耗时通常在 4h+。</span>
    </div>
  </div>

  <!-- 卡片 2: 维护成本 -->
  <div v-click class="group relative overflow-hidden bg-orange-500/10 border border-orange-500/40 rounded-xl p-6 transition-all duration-300">
    <!-- 背景水印图标 -->
    <div i-carbon-chart-evaluation class="absolute -bottom-4 -right-4 text-9xl text-orange-500/10 transition-colors duration-300 transform -rotate-12"></div>
    <div class="flex items-center gap-3 mb-4">
      <div class="p-2 bg-orange-500/20 rounded-lg text-orange-400">
        <div i-carbon-tools text-2xl />
      </div>
      <h3 class="text-orange-200 text-xl font-bold">定制化代价高昂</h3>
    </div>
    <p class="text-slate-400 text-sm leading-6 relative z-10">
      基础搭建虽然便捷，但在面对复杂的业务流转逻辑时，定制开发的边际成本呈指数级上升。
    </p>
    <div class="mt-4 bg-orange-900/20 border border-orange-500/20 p-3 rounded text-xs relative z-10">
      <span class="text-orange-300 font-bold block mb-1">
        <div i-carbon-manage-protection inline-block mr-1 /> 风险：
      </span>
      <span class="text-orange-200/70">为满足业务闭环，经常被迫对框架源码进行<b>侵入式的底层修改</b>，导致后续版本升级困难，技术债堆积。</span>
    </div>
  </div>

</div>

<!--
然而，低代码并不意味着“低难度”。
实际上，我们在开发过程中遇到了极大的阻力。最大的痛点在于 LEGO 框架的“黑盒”属性。
很多时候文档是一回事，代码跑起来是另一回事。比如容器字段和应用字段对不上的问题，极其隐蔽，排查起来非常耗时。
为了实现业务方那些“非常规”的需求，我们往往需要对框架本身进行“侵入式的底层修改”，这虽然解决了当下的问题，但也让维护成本呈指数级上升。
-->

---
glowSeed: 1
---

# 1. 物流港 3.0 (LEGO)
## AI 赋能解决方案

<div class="mt-10 grid gap-6">

  <!-- Solution Card 1: Tech -->
  <div v-click class="group relative bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-5 hover:border-blue-500/50 transition-all duration-300">
    <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <div i-carbon-machine-learning-model text-6xl text-blue-400 />
    </div>
    <div class="flex items-start gap-4">
      <div class="mt-1 p-2 bg-blue-500/20 rounded-lg text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
        <div i-carbon-code-reference text-2xl />
      </div>
      <div>
        <h3 class="text-blue-200 text-lg font-bold mb-2 flex items-center gap-2">
          智能 Debug 与逻辑补全
          <span class="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">Code Assistant</span>
        </h3>
        <p class="text-slate-400 text-sm leading-relaxed max-w-[90%]">
          利用 AI 深度解析 LEGO 框架源码逻辑。面对突发的非常规需求，能迅速生成兼容性更强的<b>底层适配策略</b>（Adaptation Strategy），将方案探索时间从“天”级压缩至“小时”级。
        </p>
      </div>
    </div>
  </div>

  <!-- Solution Card 2: Workflow -->
  <div v-click class="group relative bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-5 hover:border-purple-500/50 transition-all duration-300">
    <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <div i-carbon-flow-stream text-6xl text-purple-400 />
    </div>
    <div class="flex items-start gap-4">
      <div class="mt-1 p-2 bg-purple-500/20 rounded-lg text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        <div i-carbon-user-role text-2xl />
      </div>
      <div>
        <h3 class="text-purple-200 text-lg font-bold mb-2 flex items-center gap-2">
          PM + AI + Dev 协作重构
          <span class="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">Workflow 2.0</span>
        </h3>
        <p class="text-slate-400 text-sm leading-relaxed max-w-[90%]">
          重塑交付链路：产品经理 (PM) 借助 AI 直接生成高保真前端原型代码，我侧仅需专注于<b>逻辑接入与数据绑定</b>。这种模式极大地降低了 UI 还原过程中的沟通损耗。
        </p>
      </div>
    </div>
  </div>
  <!-- Result Badge -->
  <div v-click class="mt-4 flex items-center justify-center">
    <div class="px-6 py-2 bg-gradient-to-r from-teal-500/10 via-teal-500/20 to-teal-500/10 border border-teal-500/30 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(20,184,166,0.15)]">
      <div i-carbon-checkmark-filled text-teal-400 text-xl />
      <span class="text-teal-100 text-sm">
        <span class="font-bold">交付成果：</span> 成功上线核心非常规模块，验证了“AI + 低代码”破解黑盒困境的可行性。
      </span>
    </div>
  </div>

</div>

<!--
面对“黑盒”挑战，我通过 AI 深度辅助实现突破：

技术层面：利用 AI 透视框架底层逻辑，生成适配策略，规避缺陷。
流程层面：重构协作模式，PM 借 AI 生成界面，我专注逻辑接入。
-->
---
glowSeed: 2
---

# 2. 油品储运作业系统升级
## 原生化重构 (H5 / iOS / Android)

<div grid="~ cols-2 gap-8" mt-8 items-center>
  <div class="relative h-60 rounded-lg border border-lime-500/30 flex items-center justify-center">
     <img src="/2025-ostm.webp" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
  </div>

  <div class="text-slate-300 leading-relaxed">
    <div class="flex items-center gap-2 mb-4 text-lime-400">
      <div i-carbon-calendar />
      <span>2025.12 - 至今</span>
    </div>
    <p>
      将原有 H5 Builder 打包方案全面升级。前端重构为 <b>Vue3</b>，外壳升级为 <b>Tauri Webview</b> 及原生壳。
    </p>
    <ul class="list-disc pl-4 mt-4 text-sm text-slate-400 space-y-2">
      <li><b>Android:</b> 从网页打包转为 Tauri/Kotlin 原生外壳</li>
      <li><b>iOS:</b> Swift 原生开发与发布流程打通</li>
      <li><b>目标:</b> 实现类似浏览器的热更新机制，无需频繁安装 APK</li>
    </ul>
  </div>
</div>

<!--
接下来是油品储运作业系统的升级。
我们对 h5 的界面进行了重构，并采用 Webview 容器进行 Android 打包。
实现主流框架从 vue2 到 vue3 的更新，以及类似浏览器的“无感热更新”
我不仅仅止步于混合开发，而是深入研究了 Android (Kotlin) 和 iOS (Swift) 的原生开发。
下一步如果有鸿蒙设备支持，我完全有能力快速拓展到 HarmonyOS 生态，实现全平台的原生覆盖。
-->

---
glowSeed: 2
---

# 2. 油品储运作业系统升级
## 技术突破：从 Web 到 Native

<!-- 上半部分：技术栈卡片 -->
<div grid="~ cols-3 gap-5" mt-10>
  
  <!-- Card 1: Vue 3 (Web Core) -->
  <div class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-500 opacity-80"></div>
    <div class="absolute -right-6 -top-6 w-24 h-24 bg-green-500/20 blur-2xl rounded-full group-hover:bg-green-500/30 transition-all"></div>
    <div class="flex flex-col items-center relative z-10">
      <div i-logos-vue text-5xl mb-4 drop-shadow-[0_0_10px_rgba(66,184,131,0.5)] />
      <div class="font-bold text-slate-100 text-lg">Vue 3 重构</div>
      <div class="text-xs text-slate-400 mt-2 text-center leading-5">
        现代化前端核心<br/>组件化与状态管理重塑
      </div>
    </div>
  </div>

  <!-- Card 2: Kotlin (Android) -->
  <div class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-500 opacity-80"></div>
    <div class="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full group-hover:bg-purple-500/30 transition-all"></div>
    <div class="flex flex-col items-center relative z-10">
      <div i-logos-kotlin-icon text-5xl mb-4 drop-shadow-[0_0_10px_rgba(127,82,255,0.5)] />
      <div class="font-bold text-slate-100 text-lg">Android Native</div>
      <div class="text-xs text-slate-400 mt-2 text-center leading-5">
        Kotlin 原生外壳<br/>WebView 高级桥接
      </div>
    </div>
  </div>

  <!-- Card 3: Swift (iOS) -->
  <div class="group relative bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-80"></div>
    <div class="absolute -right-6 -top-6 w-24 h-24 bg-orange-500/20 blur-2xl rounded-full group-hover:bg-orange-500/30 transition-all"></div>
    <div class="flex flex-col items-center relative z-10">
      <div i-logos-swift text-5xl mb-4 drop-shadow-[0_0_10px_rgba(240,81,56,0.5)] />
      <div class="font-bold text-slate-100 text-lg">iOS Native</div>
      <div class="text-xs text-slate-400 mt-2 text-center leading-5">
        Swift 证书突破<br/>App Store 发布流
      </div>
    </div>
  </div>
</div>

<!-- 下半部分：AI 效能数据展示 -->
<div class="mt-8 relative rounded-xl overflow-hidden border border-lime-500/30">
  <!-- 背景装饰 -->
  <div class="absolute inset-0 bg-gradient-to-r from-lime-900/20 to-slate-900/80 z-0"></div>
  
  <div class="relative z-10 p-5 flex items-center justify-between">
    <!-- 左侧标题 -->
    <div class="flex flex-col gap-1 pl-2">
      <div class="flex items-center gap-2 text-lime-400 font-bold text-xl">
        <div i-carbon-rocket text-2xl />
        <span>AI 极速验证</span>
      </div>
      <div class="text-xs text-lime-500/60 font-mono uppercase tracking-widest">Efficiency Report</div>
    </div>
    <!-- 中间数据对比 -->
    <div class="flex gap-12 mr-8">
      <!-- Android 数据 -->
      <div class="text-center">
        <div class="text-xs text-slate-500 mb-1">Android 开发周期</div>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-white font-mono">6</span>
          <span class="text-sm text-lime-400">Days</span>
        </div>
        <div class="text-[10px] text-slate-600">12.18 -> 12.24</div>
      </div>
      <!-- 分隔线 -->
      <div class="w-px h-10 bg-white/10 self-center"></div>
      <!-- iOS 数据 -->
      <div class="text-center">
        <div class="text-xs text-slate-500 mb-1">iOS 开发周期</div>
        <div class="flex items-baseline gap-1">
          <span class="text-3xl font-bold text-white font-mono">6</span>
          <span class="text-sm text-lime-400">Days</span>
        </div>
        <div class="text-[10px] text-slate-600">12.25 -> 12.31</div>
      </div>
    </div>
    <!-- 右侧结论 -->
    <div class="bg-lime-500/10 px-4 py-2 rounded-lg border border-lime-500/20">
       <div class="text-xs text-lime-200">
         <span class="font-bold text-lime-400">300%</span> 提效
       </div>
    </div>
  </div>
</div>
<!--
我作为一个零基础的移动端开发者，借助 AI 结对编程，仅用了 6 天就完成了 Android 原生的开发，紧接着又用 6 天攻克了 iOS 端。
这在过去是完全不可想象的。这不仅证明了 AI 对开发效率的提升，更证明了它能帮我们打破技术栈的边界，让全栈成为可能。
-->

---
glowSeed: 3
---

# 3. 舟山海翼低空无人机
## 全栈 + IoT 探索 (Go + Vue3)

<div grid="~ cols-2 gap-8" mt-8 items-center>
  <div class="text-slate-300 leading-relaxed">
    <div class="flex items-center gap-2 mb-4 text-purple-400">
      <div i-carbon-calendar />
      <span>2025.03 - 至今</span>
    </div>
    <p>
      多方协同项目。通过 SDK 读取无人机遥感信息，上报云端并接收控制指令。涉及边缘端计算、实时流媒体处理。
    </p>
    <div class="mt-6 flex flex-col gap-2">
      <div class="flex items-center gap-2">
        <div i-carbon-cloud-satellite text-purple-400 />
        <span>边缘端数据交互 (MQTT)</span>
      </div>
      <div class="flex items-center gap-2">
        <div i-carbon-video text-purple-400 />
        <span>实时视频流 (go2rtc)</span>
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-go text-xl />
        <span>Golang 后端开发</span>
      </div>
    </div>
  </div>
  
  <div class="relative h-60 rounded-lg border border-purple-500/30 flex items-center justify-center">
    <img src="/2025-drone.webp" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
  </div>
</div>


<!--
接下来是舟山海翼低空无人机。
这是一个典型的 物联网 项目。
在这个项目中，我启用了 Go 语言进行后端开发，主要负责边缘端的数据处理。
核心任务是通过 SDK 读取无人机的遥测信息，并在边缘端进行计算后上报云端，同时接收并执行飞行指令。
-->


---
glowSeed: 3
---

# 3. 舟山海翼低空无人机
## 难点与成果

<div class="mt-6 grid grid-rows-2 gap-4 h-[350px]">
  <div class="grid grid-cols-[1fr_2fr] gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
    <div class="flex items-center justify-center border-r border-white/10 pr-4">
      <div class="text-right">
        <div class="text-purple-400 font-bold text-xl">通信不稳定</div>
        <div class="text-xs text-slate-500">边缘端 vs 云端</div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="text-slate-300 text-sm">
        <span class="text-purple-300 font-bold">解决方案：</span> 采用 <b>MQTT</b> 协议实现高效轻量的数据上报与指令下发，确保在弱网环境下的连接保持。
      </div>
    </div>
  </div>

  <div class="grid grid-cols-[1fr_2fr] gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
    <div class="flex items-center justify-center border-r border-white/10 pr-4">
      <div class="text-right">
        <div class="text-purple-400 font-bold text-xl">流媒体协同</div>
        <div class="text-xs text-slate-500">实时监控</div>
      </div>
    </div>
    <div class="flex flex-col justify-center">
      <div class="text-slate-300 text-sm">
        <span class="text-purple-300 font-bold">解决方案：</span> 集成 <b>go2rtc</b> 流媒体服务器，成功打通无人机摄像头的实时推流与前端低延迟播放。
      </div>
    </div>
  </div>
</div>

<!--
做硬件交互，最大的敌人是环境的不确定性。这里我主要攻克了两个难点：

第一是通信问题。无人机在户外远距离作业，网络非常不稳定。传统的 HTTP 请求太重且容易断连。
为此，我采用了 MQTT 协议。它的轻量级和发布/订阅模式，完美保证了在弱网环境下，控制指令依然能准确送达。

第二是视频监控。业务方要求低延迟看到无人机画面。
我调研并集成了 go2rtc 流媒体服务器，它对 RTSP 流的处理非常高效，成功打通了从无人机摄像头到前端界面的毫秒级推流链路。
-->

---
glowSeed: 4
---

# 4. 海上清舱作业系统
## 经典 web + h5 (前端)

<div grid="~ cols-2 gap-8" mt-8 items-center>
  <div class="relative h-60 bg-gradient-to-br from-cyan-900/30 to-slate-900 rounded-lg border border-cyan-500/30 flex items-center justify-center overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 bg-[url(https://source.unsplash.com/collection/190727/800x600)] opacity-10 mix-blend-overlay"></div>
    <div class="z-10 text-center">
      <img src="/2025-pcs.webp" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
    </div>
  </div>

  <div class="text-slate-300 leading-relaxed">
    <div class="flex items-center gap-2 mb-4 text-cyan-400">
      <div i-carbon-calendar />
      <span>2024.11 - 2025.11 (0 to 1)</span>
    </div>
    <p>
      历时一年，实现从需求分析到完整交付的<b>业务闭环</b>。针对油泥、油污水处理等核心业务进行深度定制，打造了集作业管控与安全监测于一体的综合平台。
    </p>
    <div class="mt-5 grid grid-cols-2 gap-y-2 text-sm">
      <div class="flex items-center gap-2">
         <div i-carbon-identification text-cyan-400 />
         <span>AI 人脸核验进场</span>
      </div>
      <div class="flex items-center gap-2">
         <div i-carbon-video-filled text-cyan-400 />
         <span>工业摄像头集成</span>
      </div>
      <div class="flex items-center gap-2">
         <div i-carbon-data-vis-4 text-cyan-400 />
         <span>数据大屏</span>
      </div>
      <div class="flex items-center gap-2">
         <div i-carbon-checkbox-checked text-cyan-400 />
         <span>代码质量深度重构</span>
      </div>
    </div>
  </div>
</div>

<!--
最后，我想重点介绍一下“海上清舱作业系统”。
这是一个历时整整一年的长周期项目，也是我今年完成的最完整的“从0到1”的业务闭环案例。
虽然技术栈是经典的 Web + H5，但业务复杂度极高，涵盖了油泥、油污水的全流程处理。
-->

---
glowSeed: 4
---

# 4. 海上清舱作业系统
## 核心成果与技术亮点

<div class="mt-8 grid grid-cols-3 gap-5">
  <!-- 亮点 1 -->
  <div class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-cyan-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-security text-3xl text-cyan-400 />
      <span class="text-xs bg-cyan-900/50 text-cyan-200 px-2 py-0.5 rounded">Security</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">智能化集成</h3>
    <p class="text-xs text-slate-400 leading-5">
      打通硬件壁垒，集成<b>AI人脸识别</b>终端与现场<b>工业摄像头</b>。确保“人防+技防”双重落地，作业现场安全风险实时可控。
    </p>
  </div>

  <!-- 亮点 2 -->
  <div class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-blue-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-dashboard text-3xl text-blue-400 />
      <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-0.5 rounded">Visualization</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">大屏</h3>
    <p class="text-xs text-slate-400 leading-5">
      开发运营数据可视化中心。将复杂的油泥、油污水处理数据实时渲染，为管理层提供决策依据，实现<b>数据驱动运营</b>。
    </p>
  </div>

  <!-- 亮点 3 -->
  <div class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-teal-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-clean text-3xl text-teal-400 />
      <span class="text-xs bg-teal-900/50 text-teal-200 px-2 py-0.5 rounded">Stability</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">工程化深度定制</h3>
    <p class="text-xs text-slate-400 leading-5">
      针对特种作业流程进行组件级定制。通过持续迭代，显著提升了系统稳定性，Bug 率随版本更新呈<b>指数级下降</b>。
    </p>
  </div>
</div>

<!--
在这个项目中，我有三个核心：

第一是打通 AI 人脸识别终端和工业摄像头，实现了进场核验保障。

第二是开发运营数据大屏，让管理层能实时掌握作业进度。

第三是代码工程化沉淀。进行了组件级的深度定制和重构。

这一年的持续打磨，最直观的反馈就是 Bug 率的直线下降和系统稳定性的显著提升。
-->

---
layout: default
glowOpacity: 0.15
---

# 其他项目与支持
## 多线程并发交付

<div grid="~ cols-3 gap-4" mt-8>
  <div v-click class="bg-slate-800 p-4 rounded border border-slate-700 hover:border-blue-500 transition">
    <div class="text-blue-400 font-bold mb-1">兴中库区门禁管控</div>
    <div class="text-xs text-slate-500 mb-2">03.01 - 08.07</div>
    <p class="text-xs text-slate-300">服务于管理员、承包商、审核员的多角色线上流程化解决方案。</p>
  </div>

  <div v-click class="bg-slate-800 p-4 rounded border border-slate-700 hover:border-blue-500 transition">
    <div class="text-blue-400 font-bold mb-1">兴中智慧关务</div>
    <div class="text-xs text-slate-500 mb-2">06.30 - 07.11</div>
    <p class="text-xs text-slate-300">电子账册业务流程优化，管理入库申请与货物转让。</p>
  </div>

  <div v-click class="bg-slate-800 p-4 rounded border border-slate-700 hover:border-red-500 transition">
    <div class="text-red-400 font-bold mb-1">森森可燃气报警</div>
    <div class="text-xs text-slate-500 mb-2">07.10 - 07.11</div>
    <p class="text-xs text-slate-300">极速开发的点位监控与异常报警系统。</p>
  </div>

  <div v-click class="bg-slate-800 p-4 rounded border border-slate-700 hover:border-orange-500 transition">
    <div class="text-orange-400 font-bold mb-1">人员定位加密</div>
    <div class="text-xs text-slate-500 mb-2">10.27 - 12.31</div>
    <p class="text-xs text-slate-300">集团侧跳转安全验证、签名校验及页面嵌入。</p>
  </div>
  
  <div v-click class="bg-slate-800 p-4 rounded border border-slate-700 hover:border-teal-500 transition">
    <div class="text-teal-400 font-bold mb-1">舟港富文本/泉州GC</div>
    <div class="text-xs text-slate-500 mb-2">11月 - 12月</div>
    <p class="text-xs text-slate-300">动态数据替换组件开发；船舶动态与作业计划管理。</p>
  </div>

  <div v-click class="bg-slate-800_50 p-4 rounded border border-slate-700 border-dashed opacity-70">
    <div class="text-slate-400 font-bold mb-1">调研与维保</div>
    <div class="text-xs text-slate-500 mb-2">全年</div>
    <p class="text-xs text-slate-300">培训空间、中化东方泵房、粮食分析系统调研、华北院 AI RAG 测试。</p>
  </div>
</div>

<!--
除了上述四个项目，我也保持着“多线程”的工作状态，快速响应并交付了多个支撑性项目。

上半年，我主要负责兴中库区的业务系统，包括“门禁管控”和“智慧关务”，解决了多角色流程流转和电子账册管理的痛点。

年中，展示了极速交付能力。比如“森森可燃气报警系统”，大家可以看到时间节点，仅用两天时间就完成了从开发到上线，解决了紧急的点位监控需求。

下半年，重点完成了“人员定位加密”对接，打通了集团侧的安全验证与签名校验，确保了系统合规接入。

此外，我全年持续投入在各类维保与前沿调研中，包括华北院的 AI RAG 测试等，为团队的技术储备提供支持。
-->

---
layout: statement
---

# 思考与规划

<div mt-10 grid="~ cols-2 gap-16">

  <!-- 不足：深度与习惯 -->
  <div v-click class="relative group">
    <div class="absolute -left-6 top-0 text-7xl text-red-500/20 font-bold -z-10 transition duration-500">Reflect</div>
    <h2 class="text-red-400 text-2xl font-bold mb-6 flex items-center gap-2">
      <div i-carbon-idea /> 不足：AI 的“浅尝辄止”
    </h2>
    <div class="space-y-6 text-slate-300 leading-7">
      <div class="bg-red-500/10 p-4 rounded-lg border-l-2 border-red-500">
        <div class="text-red-200 font-bold text-sm mb-1">缺乏深度研发实战</div>
        <div class="text-sm opacity-80">
          今年虽高频使用 AI 辅助编码，但多停留在“工具使用者”层面。缺乏像<b>华北院 AI RAG</b> 这样真正的 AI 原生应用研发项目练手，对 LLM 的落地能力储备不足。
        </div>
      </div>
      <div class="bg-red-500/10 p-4 rounded-lg border-l-2 border-red-500">
        <div class="text-red-200 font-bold text-sm mb-1">缺失“用后复盘”</div>
        <div class="text-sm opacity-80">
          <b>问题：</b> 过于追求交付速度，对 AI 生成的代码往往“拿来即用”。
          <br/>
          <b>隐患：</b> 缺少事后的逻辑拆解与知识点复习，导致“知其然不知其所以然”，技术难以内化为个人能力。
        </div>
      </div>
    </div>
  </div>

  <!-- 计划：内化与突破 -->
  <div v-click class="relative group">
    <div class="absolute -left-6 top-0 text-7xl text-blue-500/20 font-bold -z-10 transition duration-500">2026</div>
    <h2 class="text-blue-400 text-2xl font-bold mb-6 flex items-center gap-2">
      <div i-carbon-roadmap /> 2026 工作展望
    </h2>
    <div class="space-y-5">
      <!-- 目标 1: 学习习惯 -->
      <div class="flex items-start gap-3">
        <div class="mt-1 p-1.5 bg-blue-500/20 rounded text-blue-300">
          <div i-carbon-review text-lg />
        </div>
        <div>
          <h3 class="text-white font-bold text-base">建立“AI 结对复盘”机制</h3>
          <p class="text-slate-400 text-sm mt-1">
            拒绝盲目 Copy。对 AI 生成的核心逻辑代码，必须进行二次阅读与重构。定期整理“AI 编程笔记”，确保外脑的知识转化为内功。
          </p>
        </div>
      </div>
      <!-- 目标 2: 研发方向 -->
      <div class="flex items-start gap-3">
        <div class="mt-1 p-1.5 bg-purple-500/20 rounded text-purple-300">
          <div i-carbon-model text-lg />
        </div>
        <div>
          <h3 class="text-white font-bold text-base">寻求 RAG/Agent 项目突破</h3>
          <p class="text-slate-400 text-sm mt-1">
            主动争取 AI 研发机会。从单纯的 Prompt 编写转向 <b>LangChain/RAG</b> 开发，真正掌握 AI 应用落地的技术栈。
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
最后是关于不足与规划的思考。

今年的最大不足，我认为在于 AI 实践的“浅尝辄止”。
虽然我用 AI 写了很多代码，但本质上我还是一个“用户”。
一方面，我缺乏像华北院 RAG 那样真正的 AI 研发项目来练手，技术深度不够；
另一方面，为了赶进度，我对 AI 生成的代码缺乏“用后复盘”的习惯，这很容易形成依赖，而不是能力内化。

所以 2026 年，我的规划重点有两方面：
一是“修内功”，建立强制复盘机制，把 AI 写的代码真正变成我懂的代码。
二是“求突破”，主动争取参与 RAG 或 Agent 类的研发项目，实现从“AI 使用者”到“AI 开发者”的转型。
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

<div class="mt-10 opacity-80">
  <div i-carbon-favorite-filled text-red-400 text-4xl mb-4 inline-block />
  <p class="text-lg">拥抱变化，持续进化</p>
</div>

<div class="absolute left-1/2 translate-x--1/2 bottom-10 text-slate-500 text-sm">
  幻灯片源码: <a href="https://github.com/lanseria/talks" target="_blank" class="border-b border-slate-600 hover:text-white transition">github.com/lanseria/talks</a>
</div>

<!--
感谢大家的聆听。
2025是突破的一年，2026我将继续在深度和广度上精进。
-->