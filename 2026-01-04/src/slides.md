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

<div class="text-slate-400 mt-2 text-xl">
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
      基于公司自研 <b>LEGO 低代码框架</b> 开发的非常规作业票系统。旨在实现 PC 端与移动端的微应用定制开发，满足复杂的业务流转需求。
    </p>
    <div class="mt-6 flex flex-wrap gap-2">
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">LEGO Micro-App</span>
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Complex Forms</span>
      <span class="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Workflow</span>
    </div>
  </div>
  
  <div class="relative h-60 rounded-lg border border-blue-500/30 flex items-center justify-center">
    <!-- <div i-carbon-application-web text-6xl text-blue-500_50 /> -->
    <!-- IMAGE PROMPT: isometric view of a complex digital dashboard interface with modular blocks connecting like lego pieces, futuristic blue glowing lines, dark background, data flow visualization -->
    <img src="/2025-wlg3.webp" class="rounded-lg absolute top-0 left-0 w-full h-full object-cover" />
  </div>
</div>

---
glowSeed: 1
---

# 1. 物流港 3.0 (LEGO)
## 挑战与难点

<div grid="~ cols-2 gap-10" mt-10>
  <div v-click class="bg-slate-800_50 p-6 rounded-xl border-l-4 border-red-500">
    <h3 class="text-red-300 text-xl font-bold mb-2">框架限制与黑盒</h3>
    <p class="text-slate-400 text-sm">
      LEGO 框架限定较死，文档与实际表现存在差异。
      <br/><br/>
      <span class="text-slate-200">痛点：</span> 生成字段不一致导致容器与应用字段对不上，这类问题极其隐蔽，难以排查。
    </p>
  </div>

  <div v-click class="bg-slate-800_50 p-6 rounded-xl border-l-4 border-orange-500">
    <h3 class="text-orange-300 text-xl font-bold mb-2">维护成本指数级上升</h3>
    <p class="text-slate-400 text-sm">
      虽然创建项目便捷，但在面对复杂的非常规需求时，定制化修改难度极大。
      <br/><br/>
      <span class="text-slate-200">风险：</span> 甚至出现需要 hack 框架或被迫更改产品需求的情况。
    </p>
  </div>
</div>

---
glowSeed: 1
---

# 1. 物流港 3.0 (LEGO)
## AI 赋能解决方案

<div class="mt-8 space-y-6">
  <div v-click class="flex items-start gap-4">
    <div class="p-3 rounded-full bg-blue-500/20 text-blue-400">
      <div i-carbon-bot text-2xl />
    </div>
    <div>
      <h3 class="text-lg font-bold text-blue-200">智能 Debug 与逻辑补全</h3>
      <p class="text-slate-400 text-sm mt-1">
        利用 AI 快速分析 LEGO 框架的底层逻辑，即使是半日内提出的复杂需求，也能结合 AI 在极短时间内生成 hack 方案或标准解法。
      </p>
    </div>
  </div>

  <div v-click class="flex items-start gap-4">
    <div class="p-3 rounded-full bg-purple-500/20 text-purple-400">
      <div i-carbon-user-role text-2xl />
    </div>
    <div>
      <h3 class="text-lg font-bold text-purple-200">PM + AI + Dev 新工作流</h3>
      <p class="text-slate-400 text-sm mt-1">
        尝试让产品经理(PM)直接使用 AI 生成前端原型页面代码，我负责逻辑接入。大大减少了 UI 还原的沟通成本。
      </p>
    </div>
  </div>
  
  <div v-click class="mt-6 p-4 border border-blue-500/30 rounded bg-blue-900/10 text-center text-blue-300 text-sm">
    <span class="font-bold">成果：</span> 成功交付非常规作业票系统核心模块，验证了 AI 在低代码黑盒环境下的辅助价值。
  </div>
</div>

---
glowSeed: 2
---

# 2. 油品储运作业系统升级
## 原生化重构 (H5 / iOS / Android)

<div grid="~ cols-2 gap-8" mt-8 items-center>
  <div class="relative h-60 rounded-lg border border-lime-500/30 flex items-center justify-center">
    <!-- <div i-carbon-mobile text-6xl text-lime-500_50 /> -->
     <!-- IMAGE PROMPT: sleek mobile phone mockup showing an industrial oil management app, split screen showing code editor with kotlin and swift logos, green tech accents -->
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

---
glowSeed: 2
---

# 2. 油品储运作业系统升级
## 技术突破：从 Web 到 Native

<div grid="~ cols-3 gap-4" mt-8>
  <!-- Card 1 -->
  <div v-click class="bg-slate-800 p-4 rounded-lg text-center border-t-2 border-green-500">
    <div i-logos-vue text-4xl mb-2 mx-auto />
    <div class="font-bold text-slate-200">Vue 3 重构</div>
    <div class="text-xs text-slate-500 mt-2">
      现代化前端栈，提升交互流畅度与代码可维护性。
    </div>
  </div>

  <!-- Card 2 -->
  <div v-click class="bg-slate-800 p-4 rounded-lg text-center border-t-2 border-green-400">
    <div i-logos-kotlin-icon text-4xl mb-2 mx-auto />
    <div class="font-bold text-slate-200">Android (Kotlin)</div>
    <div class="text-xs text-slate-500 mt-2">
      零基础上手 Kotlin，实现 WebView 高级交互与权限管理。
    </div>
  </div>

  <!-- Card 3 -->
  <div v-click class="bg-slate-800 p-4 rounded-lg text-center border-t-2 border-white">
    <div i-logos-swift text-4xl mb-2 mx-auto />
    <div class="font-bold text-slate-200">iOS (Swift)</div>
    <div class="text-xs text-slate-500 mt-2">
      突破 iOS 开发壁垒，完成证书配置与上架测试流程。
    </div>
  </div>
</div>

<div v-click class="mt-8 bg-lime-900/20 border border-lime-500/30 p-4 rounded-lg">
  <div class="flex items-center gap-2 text-lime-400 font-bold text-lg">
    <div i-carbon-rocket />
    <span>AI 极速开发验证</span>
  </div>
  <div class="mt-2 text-slate-300 text-sm grid grid-cols-2 gap-4">
    <div>
      <div class="text-xs opacity-50">Android 开发周期</div>
      <div class="font-mono text-xl">12.18 -> 12.24 (6天)</div>
    </div>
    <div>
      <div class="text-xs opacity-50">iOS 开发周期</div>
      <div class="font-mono text-xl">12.25 -> 12.31 (6天)</div>
    </div>
  </div>
  <p class="mt-2 text-xs text-lime-200/60">* 开发速度比不借助 AI 的高级开发人员快 2-3 倍</p>
</div>

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

---
glowSeed: 3
---

# 3. 舟山海翼低空无人机
## 难点与成果

<div class="mt-6 grid grid-rows-2 gap-4 h-[350px]">
  <div v-click class="grid grid-cols-[1fr_2fr] gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
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

  <div v-click class="grid grid-cols-[1fr_2fr] gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
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

---
glowSeed: 4
---

# 4. 海上清舱作业系统
## 业务闭环与智能化安防 (前端)

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
         <span>OpsMonitor 数据大屏</span>
      </div>
      <div class="flex items-center gap-2">
         <div i-carbon-checkbox-checked text-cyan-400 />
         <span>代码质量深度重构</span>
      </div>
    </div>
  </div>
</div>

---
glowSeed: 4
---

# 4. 海上清舱作业系统
## 核心成果与技术亮点

<div class="mt-8 grid grid-cols-3 gap-5">
  <!-- 亮点 1 -->
  <div v-click class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-cyan-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-security text-3xl text-cyan-400 />
      <span class="text-xs bg-cyan-900/50 text-cyan-200 px-2 py-0.5 rounded">Security</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">安防智能化集成</h3>
    <p class="text-xs text-slate-400 leading-5">
      打通硬件壁垒，集成<b>AI人脸识别</b>终端与现场<b>工业摄像头</b>。确保“人防+技防”双重落地，作业现场安全风险实时可控。
    </p>
  </div>

  <!-- 亮点 2 -->
  <div v-click class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-blue-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-dashboard text-3xl text-blue-400 />
      <span class="text-xs bg-blue-900/50 text-blue-200 px-2 py-0.5 rounded">Visualization</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">OpsMonitor 大屏</h3>
    <p class="text-xs text-slate-400 leading-5">
      开发运营数据可视化中心。将复杂的油泥、油污水处理数据实时渲染，为管理层提供决策依据，实现<b>数据驱动运营</b>。
    </p>
  </div>

  <!-- 亮点 3 -->
  <div v-click class="bg-slate-800/50 p-5 rounded-xl border-t-2 border-teal-500 hover:bg-slate-800 transition duration-300">
    <div class="flex justify-between items-start mb-3">
      <div i-carbon-clean text-3xl text-teal-400 />
      <span class="text-xs bg-teal-900/50 text-teal-200 px-2 py-0.5 rounded">Stability</span>
    </div>
    <h3 class="text-slate-200 font-bold mb-2">工程化深度定制</h3>
    <p class="text-xs text-slate-400 leading-5">
      针对特种作业流程（清舱/化验）进行组件级定制。通过持续迭代，显著提升了系统稳定性，Bug 率随版本更新呈<b>指数级下降</b>。
    </p>
  </div>
</div>

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

---
layout: statement
---

# 思考与规划

<div mt-10 grid="~ cols-2 gap-20">

  <!-- 不足 -->
  <div v-click class="relative">
    <div class="absolute -left-6 top-0 text-6xl text-red-500/20 font-bold -z-10">Thinking</div>
    <h2 class="text-red-400 text-2xl font-bold mb-4">不足：AI 的"黑盒"依赖</h2>
    <p class="text-slate-300 leading-7">
      今年在多个紧急项目中（如 iOS/Android 开发），为了追求极致速度，我大量依赖 AI 生成代码。
      <br/><br/>
      <b>问题：</b> 虽然功能完美上线，但对 AI 生成的底层逻辑、特定语言特性的理解不够深入。这在未来可能导致维护困难或遇到深层 Bug 时束手无策。
    </p>
  </div>

  <!-- 计划 -->
  <div v-click class="relative">
    <div class="absolute -left-6 top-0 text-6xl text-blue-500/20 font-bold -z-10">2026</div>
    <h2 class="text-blue-400 text-2xl font-bold mb-4">2026 工作展望</h2>
    <div class="space-y-6">
      <div>
        <h3 class="text-white font-bold flex items-center gap-2">
          <div i-carbon-cube text-blue-400 /> 物流港 3.0 深化
        </h3>
        <p class="text-slate-400 text-sm mt-1 ml-6">
          不仅仅是“能用”，重点转向代码优化。增强 LEGO 模块的可读性与可维护性，减少“胶水代码”。
        </p>
      </div>
      <div>
        <h3 class="text-white font-bold flex items-center gap-2">
          <div i-carbon-drone text-purple-400 /> 无人机系统联调
        </h3>
        <p class="text-slate-400 text-sm mt-1 ml-6">
          推进上线前的联合调试。重点攻克极端环境下的安全性与连接稳定性，确保交付质量。
        </p>
      </div>
    </div>
  </div>
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
  <p class="text-lg">拥抱变化，持续进化</p>
</div>

<div class="absolute left-1/2 translate-x--1/2 bottom-10 text-slate-500 text-sm">
  幻灯片源码: <a href="https://github.com/lanseria/talks" target="_blank" class="border-b border-slate-600 hover:text-white transition">github.com/lanseria/talks</a>
</div>

<!--
感谢大家的聆听。
2025是突破的一年，2026我将继续在深度和广度上精进。
-->