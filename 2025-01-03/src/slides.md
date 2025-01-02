---
highlighter: shiki
css: unocss
colorSchema: light
transition: fade-out
mdc: true
layout: cover
glowSeed: 4
lang: zh-CN
title: 员工个人2024年年终述职工作
---

# 员工个人2024年年终述职工作

演讲人：张超

<!--
大家好，现在由我来汇报一下自己的2024年的年终述职报告。
-->

---
layout: intro
glowSeed: 15
glowOpacity: 0.3
class: pl-30
---

# 张超

<div class="[&>*]:important-leading-10 opacity-80">

了解使用框架 Vite, Vue, Nuxt, Nitro 等 Js 技术框架<br/>
了解使用数据库 Postgresql, Sqlite, Mysql <br/>
AI 使用者<br/>
AI 对话使用过 ChatGPT, GPT4o, Kimi, 豆包，Grok，Claude-3.5-Sonnet <br/>
AI 文成图，图生视频，音乐 <br/>

</div>

<div my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-github-line op50 ma text-xl />
  <div><a href="https://github.com/lanseria" target="_blank" class="border-none! font-300">lanseria</a></div>
  <div i-ri-bilibili-line op50 ma text-xl ml4/>
  <div><a href="https://space.bilibili.com/8487409" target="_blank" class="border-none! font-300" ws-nowrap>爱吃包子的超</a></div>
</div>

<img src="https://avatars.githubusercontent.com/u/14802764?v=4" absolute top-36 right-30 w-40 rounded-full />

<!--
作为一名开发人员，这是我今年的个人介绍，除了学习前端与后端基础内容。几乎把一半的经历用在了了解、体验与使用AI的方面上，后面我也会提到
-->

---
layout: statement
---

# 主要内容

<div mt-5 />

- 个人全年度工作
- 绩效对标
- 重点工作
- 工作亮点
- 工作不足及改进计划
- 2025 年工作计划

<!--
我的汇报主要包括以下几个方面：首先是个人全年度工作总结，然后是绩效对标情况，接着是重点工作内容，之后会分享一些工作亮点，最后会谈谈工作中存在的不足以及改进计划，并展望2025年的工作规划。
-->

<!--
在过去的一年里，我参与了多个项目的开发和维护工作。让我们先回顾一下这一年的主要工作内容。
-->

<!--
我主要有这几个方面来叙述我的年终总结
-->

---
layout: intro
---

# 个人全年度工作

<!--
首先是全年度工作，我用代码制作了一个时间线来描述我的全年度工作情况
-->

---
layout: default
---

<Timeline class="absolute top-0 left-0 right-0 bottom-0" v-click/>

<!--
可以看到项目分布较为均匀，
整体进展顺利。
观察发现，上半年重点集中在产品部的培训空间，
下半年则主要投入qPaas教育平台。
我用颜色区分了项目类型：
紫色代表qPaas相关项目，
蓝色为自主研发项目，
深蓝表示全栈项目（包含多次迭代），
红色则代表已停止或临时暂停的项目。
-->

---
layout: intro
---

# 绩效对标

| 考核内容             | 比重  | 自评  |
|----------------------|-------|-------|
| 售前对接金额         | 10%   | 全年完成与正在开发 20 个项目 |
| 开发执行率（进度）   | 40%   | 平均超前15% |
| 开发质量             | 25%   | 需求整理得当，bug解决快速 |
| 其他月度任务执行     | 15%   | 按时保质保量完成 |
| 培训工作             | 10%   | 完成《eslint介绍与使用》培训 |
|  个人常规工作 |   |  及时处理问题

<!--
在绩效对标上，
我的评价大致如此，
或许不够精确，
但对某些项目的细节把控还是相当到位的。
-->

---
layout: intro
---

# 重点工作

<!--
...
-->

---
layout: statement
---

<h1 flex="~ col">
<div mt1 forward:delay-300 ml10 flex="~ col" relative>
  <span flex="~ gap-2 items-center">
    <div>承接 qPaas 教育培训平台</div>
  </span>
</div>
</h1>
<div class="flex flex-col items-center w-full gap-40px">
<div class="flex-none w-full grid grid-cols-5 gap-6 place-items-center mt-20">
  <div font-hand text-3xl
    v-motion
    :initial="{ opacity: 0 }"
    :enter="{opacity: 1, transition: { delay: 0, duration: 400 } }" 
     class="text-teal-500 flex items-center justify-center">四川中烟</div>
  <div font-hand text-3xl
    v-motion
    :initial="{ opacity: 0}"
    :enter="{opacity: 1, transition: { delay: 400, duration: 400 } }" 
    class="text-lime-500 flex items-center justify-center">三棵树</div>
  <div font-hand text-3xl
    v-motion
    :initial="{ opacity: 0}"
    :enter="{opacity: 1, transition: { delay: 800, duration: 400 } }" 
     class="text-blue-500 flex items-center justify-center">中远海运</div>
  <div font-hand text-3xl
    v-motion
    :initial="{ opacity: 0}"
    :enter="{opacity: 1, transition: { delay: 1200, duration: 400 } }" 
   class="text-orange-500 flex items-center justify-center">河南骏化</div>
  <div font-hand text-3xl
    v-motion
    :initial="{ opacity: 0}"
    :enter="{opacity: 1, transition: { delay: 1600, duration: 400 } }"
      class="text-purple-500 flex items-center justify-center">鼎实大榭</div>
</div>
<div class="flex-1 relative w-full flex gap-40px items-center justify-center">
  <img src="/qpaas.jpg" class="shadow w-300px">
  <img src="/qpaas1.jpg" class="shadow w-300px">
</div>
</div>

<!--
今年我主要负责了qPaas教育培训平台的开发维护工作
[click]
从7月开始，我们先后为四川中烟和三棵树完成了定制化开发，这些都是和产品部的何益挺一同完成的
[click]
期间我们还修复了中远海运系统中存在的一些问题
[click]
到了10月，我们将这套代码的相关模块应用到了马世永负责的河南骏化项目中
[click]
12月，我们又将系统部署到了路良辰负责的鼎实大榭项目中
-->

---
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-hex-8080f2 transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    qPaas 教育培训平台
  </span>
  <span v-click op75 forward:delay-400 text-2xl>总结</span>
</div>
</h2>

<img src="/1.webp" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
承接 qPaas 教育培训平台
[click] 就像
[click] 是维修一辆老旧的车，虽然能立马上路，而且问题还是挺多的。
-->

---
layout: statement
---

<h1 flex="~ col">
<div mt1 forward:delay-300 ml10 flex="~ col" relative>
  <span flex="~ gap-2 items-center">
    <div i-logos-docker-icon />
    <div>项目的开发与维护</div>
  </span>
</div>
</h1>
<div class="flex flex-col items-center w-full gap-40px">
<div class="flex-none w-full grid grid-cols-5 gap-6 place-items-center mt-20">
  <div text-2xl class="text-teal-500 flex items-center justify-center" v-click>培训空间/取证小助手</div>
  <div text-2xl class="text-lime-500 flex items-center justify-center" v-click>中化东方储罐泵房</div>
  <div text-2xl class="text-blue-500 flex items-center justify-center" v-click>到港船舶质量控制公共服务平台VQC</div>
  <div text-2xl class="text-orange-500 flex items-center justify-center" v-click>兴中考勤/环保/油品储运</div>
  <div text-2xl class="text-purple-500 flex items-center justify-center" v-click>海上清舱/受限空间</div>
</div>
<div class="flex-1 relative w-full flex gap-40px items-center justify-center">
  <img src="/tp.jpg" class="shadow w-200px">
  <img src="/zhdf.jpg" class="shadow w-200px">
  <img src="/vqc.jpg" class="shadow w-200px">
  <img src="/pcs.jpg" class="shadow w-200px">
</div>
</div>

<!--
接下来
是项目的开发与维护
[click]
上半年的《培训空间》项目
[click]
下半年的中化东方储罐项目
[click]
夏静驰《VQC》项目翻新工作：3月门户网站，7月增加VIP企业，10-12月航运专属站点
[click]
兴中的考勤和环保系统衍生项目
还有海上清舱与受限空间
-->

---
layout: center
glow: bottom
---

<div flex="~ col items-center justify-center w-full">

<h2 flex="~ col" text-center>
<div text-center flex="~ col gap-2" transition duration-500 :class="$clicks < 2 ? 'translate-y-40' : ''">
  <span
    flex="~ gap-2 items-center justify-center"
    text-blue transition duration-500 text-1.5em
    :class="$clicks < 1 ? 'scale-150 translate-y' : ''"
  >
    <div i-logos-docker-icon />
    自主项目开发与运维
  </span>
  <span v-click op75 forward:delay-400 text-2xl>总结</span>
</div>
</h2>

<img src="/2.webp" v-click mt4 w-60 rounded-lg shadow forward:delay-400 />
</div>

<!--
虽然项目杂还多
[click] 但是
[click]
有些项目还是希望它能从小果变大果，等待它丰收的那天。
-->

---
layout: intro
---

# 工作亮点

<!--
...
工作亮点
首先是顺利完成了两个不复杂的项目全栈开发与正式上线部署
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div text-2xl>《中安惟新门户网站》</div>
<div mt-4 />

<span flex="~ inline gap-0.5 items-center" text-blue bg-blue:15 px1 rounded text-xs><div i-carbon-tag text="[0.8em]" /> 1.2.0</span>
<span flex="~ inline gap-0.5 items-center" ml-2 text-orange bg-orange:15 px1 rounded text-xs><div i-carbon-layers text="[0.8em]" />全栈</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>


# 门户网站

<div mt-6 />

<div flex items-center gap-2>
<img w-300px src="/csafety.jpg">
<img w-300px src="/csafety2.png">
</div>

<div mt-6 />

## 亮点

<div mt-2 />

- **快速开发与初期架构** <sup>借助简单轻量的 SQLite 数据库，快速启动与迭代</sup>  
- **平滑升级数据库** <sup>12 月份从 SQLite 升级至 MySQL，满足更高的数据复杂度需求</sup>  
- **高效全栈开发** <sup>使用 Nuxt.js 构建，全栈开发简单高效</sup>  
- **适配 SSR 的门户网站** <sup>Nuxt.js 自带 SSR 功能，适合构建 Landing Page 等门户型网站</sup>  
- **未来发展方向**  
  - 升级 UI 样式为现代模板  
  - 提升移动端适配，优化交互动画  

</div>
</div>

<!--
其中有公司的新，门户网站
5月完成，12月完成数据库架构升级
在这样不复杂的项目中可以尽可能尝试一些新技术，加快开发速度与开发效率
-->

---
class: "grid grid-cols-[1fr_1fr] p0 h-full"
clicks: 1
glow: left
---

<div p4 flex="~ col gap-1 items-center justify-center" transition duration-500 :class="$clicks >= 1 ? '' : 'translate-x-65'">

<div text-2xl>《中化东方的无人泵房》</div>
<div mt-4 />

<span flex="~ inline gap-0.5 items-center" text-blue bg-blue:15 px1 rounded text-xs><div i-carbon-tag text="[0.8em]" /> 1.5.1</span>
<span flex="~ inline gap-0.5 items-center" ml-2 text-orange bg-orange:15 px1 rounded text-xs><div i-carbon-layers text="[0.8em]" />全栈</span>

</div>

<div
  bg-hex-5552 p8 border="l main" transition duration-500
  :class="$clicks >= 1 ? '' : 'translate-x-100%'"
>
<div scale-70 origin-left-top w-160 mb--100 mr--40>


# 中化东方的无人泵房

<div mt-6 />

<div flex items-center gap-2>
<img w-300px src="/zhdf.jpg">
<img w-300px src="/zhdf1.jpg">
</div>

<div mt-6 />

## 亮点

<div mt-2 />

- **继承成熟经验** <sup>基于门户网站项目经验，继续使用 Nuxt.js 作为全栈开发框架</sup>  
- **可靠的数据库支持** <sup>采用开源的 PostgreSQL 数据库，结合 Drizzle ORM，实现高效数据管理</sup>  
- **集成视频监控功能** <sup>沿用兴中无人泵房的 go2rtc 视频监控软件，确保视频监控可靠性</sup>  
- **高效实时通信** <sup>利用 SSE（Server-Sent Events）实现数据的单向实时通信</sup>  

</div>
</div>

<!--
还有就是《中化东方项目》
8月开发，
继承了兴中的无人泵房
也公司官网一样使用了同一套框架
离线环境
高可用的视频监控
11月到场部署
12月至今仍旧更新迭代中
比如处理大量数据记录问题
每10天会生成上千万的数据量
C端，分表？
我这里只记录变化值，
其他不变值靠前后端自己计算得出画出这些阶梯图
-->

---

# 熟练使用先进工具

<!-- https://x.com/mattwensing/status/1552136584224509954 -->
<!-- https://fortune.com/longform/amazon-web-services-ceo-adam-selipsky-cloud-computing/ -->

<div grid="~ cols-2 gap-8" pt6>

<div v-click bg-lime:10 border="~ lime/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-lime:10 px4 py2 rounded>
<img w-20px h-20px src="https://sf3-scmcdn-cn.feishucdn.com/obj/tos-cn-v-826391/oQCVAmQlDDKAm9HQU4ybBel8fnLwvpIHOl12Mg" />
 多维表格</div>

  <div ml2 p2 text-lime5>
  <v-after>

  - 好协作：实现多人编辑实时同步、批注讨论，历史记录一键溯源
  - 个性化：提供丰富的字段、仪表盘等能力
  - 自动化：无需代码即可快速同步项目进展
  </v-after>
  </div>
</div>

<div v-click bg-gray:10 border="~ gray/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-gray:10 px4 py2 rounded><img w-20px h-20px src="https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png" />豆包 AI</div>

  <div ml2 p2 text-gray5>
  <v-after>

  - AI 搜索：实时资讯，丰富信源，整合搜索
  - AI 阅读：论文课件，财报合同，翻译总结
  - 图像生成：自定风格，搜集灵感，复制同款
  </v-after>
  </div>
</div>

<div v-click bg-orange:10 border="~ orange/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-orange:10 px4 py2 rounded>
<img w-20px h-20px src="https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image" />
飞行社</div>

  <div ml2 p2 text-orange5>
  <v-after>

  - 知识：丰富的社区支持
  - 课程：大量官方精选
  - 模板：涵盖 AIGC 等工作管理等类型的飞书模板

  </v-after>
  </div>
</div>

<div v-click bg-pink:10 border="~ pink/50 rounded-lg">
  <div flex="~ items-center gap-2" bg-pink:10 px4 py2 rounded>
<img bg-black rounded w-20px h-20px src="https://js.design/static/media/js.638082e9e19161d42f2bc2eb803cee11.svg" />
 即时设计</div>

  <div ml2 p2 text-pink5>
  <v-after>

  - 实时协同，提升各角色工作流中的效率
  - 多种主流文件格式迁移，让你进得来出得去
  - AI设计纪元：打破传统设计界限，无限释放设计灵感

  </v-after>
  </div>
</div>

</div>

<!--
除了开发全栈应用

[click]

团队协作离不开得力工具
比如多维表格用来对齐任务
AI 用于资料搜索
飞行社用来寻找好用的文档模板与工具使用
即时设计替换国外著名的 Figma UI 设计工具
-->

---

<div grid="~ cols-2 gap-10" mt4>

<div>
<div op50 font-serif italic mb--1>需求/Bug</div>
<img src="/lark.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

<div>
<div op50 font-serif italic mb--1>仪表盘</div>
<img src="/lark1.png" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

</div>

<!--
这是我们PCS系统开发中详细的对齐工具
需求与bug有非常井然有序
上级也可以查仪表盘来查看大致的进度情况
-->

---

# 熟练运用 AI

<div text-gray flex="~ items-center gap-1" v-click>
例子： <div i-icon-park-solid-lark-one inline-block /> 编码
</div>

<div grid="~ cols-2 gap-4" h="80%">
<div
  v-click="1"
  flex="~ col gap-2 items-center justify-center"
  transition duration-500
  :class="$clicks < 2 ? 'scale-130 translate-x-55' : ''"
>
  <img src="/cursor.jpg" w-90 rounded-lg shadow border="~ main" />
  <a href="https://www.cursor.com/" text-sm>www.cursor.com</a>
</div>



<div flex="~ col items-center justify-center" forward:delay-500 pb-10 v-click>

## AI 编码与文本，革新工作方式

简洁的代码结构和智能生成，让你与团队专注于逻辑而非重复工作，进一步提升开发效率。

</div>
</div>

<!--
第三点就是 AI 的运用

[click]

我觉得以后考核不需要你会不会编码
就问你会不会 AI 快速完成任务就是一个人的指标了
这是我的感想
-->

---
layout: intro
---

# 工作不足与改进

<!--
...
工作不足与改进
-->

---
layout: statement
---

<h1 flex="~ col">
<div mt1 forward:delay-300 ml10 flex="~ col" relative>
  <span flex="~ gap-2 items-center">
    <div>复杂项目的产品设计力</div>
  </span>
</div>
</h1>
<div mt-3/>

#### 1. 用户需求理解不足
用户调研深度不够，导致需求来源单一或片面，对目标用户的核心痛点理解不足。

#### 2. 信息架构混乱
在模块划分和层级设计时未充分考虑复杂性，导致用户在操作路径中迷失或逻辑不连贯。
定期开展用户可用性测试，根据反馈优化信息架构。

#### 3. 需求优先级管理不当
在需求决策时过于迎合短期目标，忽视了系统长期发展和技术债务的积累。
设置明确的版本迭代目标，区分必须实现和可延期的功能。

#### 4. 跨部门沟通障碍
创建跨部门协作文档模板，确保每个需求包含背景、目标、具体功能描述等关键信息。

<!--
首先是复杂项目的产品设计

虽然作为一个前端只要敲好代码就可以了
但理解能力也要跟上
今年部分项目经常是要别人来帮我理解，这点我需要慢慢改进
-->

---
layout: statement
---

<h1 flex="~ col">
<div mt1 forward:delay-300 ml10 flex="~ col" relative>
  <span flex="~ gap-2 items-center">
    <div>qPaas项目的开发</div>
  </span>
</div>
</h1>
<div mt-3/>

#### 1. **技术负担较重，开发效率受限**  
   qPaas项目在技术架构和代码基础上存在一定的历史遗留问题，这些问题使得新功能的开发和现有功能的维护变得复杂且耗时。

#### 2. **文档与知识传递不够完善**  
   由于项目复杂性较高，部分功能和模块的知识传递不足，容易导致开发人员在问题定位和修复时花费较多时间。


#### 3. **需求变更影响开发稳定性**  
   需求频繁调整或功能扩展可能导致开发过程中的返工情况，进一步加剧了对老旧系统的负担。

通过上述措施，我们希望能够从根本上改善qPaas项目开发的痛点，让团队在面对“维修老旧车辆”般的挑战时，不再是疲于应对，而是能够有序、高效地推动项目的健康发展。

<!--
其次是 qPaas 项目开发困难

明年呢，继续学习深造 qPaas 的文档
-->

---
layout: intro
---

# 2025年工作计划

<!--
...
2025年工作计划
-->

---

<div grid="~ cols-2 gap-10" mt4>

<div>
<div op50 font-serif italic mb--1>Part I</div>
<h2><span op75>Port Clean System</span><br>港航清舱系统</h2>
<img src="/pcs.jpg" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

<div>
<div op50 font-serif italic mb--1>Part II</div>
<h2><span op75>Develop Others</span><br>开发、协助其他项目的开发</h2>
<img src="/tcssm.jpg" rounded-lg shadow-xl w-120 border="~ gray/25" mt-6 />
</div>

</div>

<!--
1. 继续完成海上清舱系统
2. 继续开发维护其他项目的开发
-->

---
layout: intro
class: text-center pb-5
glowX: 50
glowY: 120
---

# 谢谢

幻灯片在 [https://github.com/lanseria/talks](https://lanseria-talks.netlify.app/2025/work-end)

<!--
谢谢大家
-->
