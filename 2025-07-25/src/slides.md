---
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
layout: center
glowSeed: 4
lang: zh-CN
title: 基金投资助手 - 用 Nuxt 打造你的全栈投资看板
---

<div flex="~ col" items-center>
  <div flex="~" items-center gap-4>
    <img src="/logo.svg" class="w-18 h-18 -mt-4"/>
    <h1 class="text-6xl! font-serif! important-mb-0!">基金投资助手</h1>
  </div>
  <p v-after class="text-2xl! op75 mt-2">
    一个开源的全栈基金投资看板
  </p>
</div>

<div abs-br mx-10 my-11 flex="~ col gap-2 items-end" text-left op75>
  <span>Bilibili @爱吃包子的超</span>
  <a href="https://github.com/lanseria/fund-investment-assistant" target="_blank" class="text-sm border-none! font-300">
    github.com/lanseria/fund-investment-assistant
  </a>
</div>

<!--
哈喽大家好，我是爱吃包子的超。
今天非常高兴能在这里和大家分享我最近做的一个开源项目——基金投资助手。
简单来说，它是一个你可以自己部署、完全掌控的全栈基金投资看板。如果你和我一样，既是投资者，也是个喜欢折腾技术的开发者，那么相信今天的内容你一定会感兴趣。
-->

---
layout: intro
class: pl-30
---

# 我是 [爱吃包子的超]

<div class="[&>*]:important-leading-10 opacity-80">

全栈开发者 <br>
{Vue} {Nuxt} {TypeScript} 爱好者<br>
热衷于折腾各种开源项目<br>

</div>

<div my-10 flex="~ gap-8" items-center>
  <a href="https://github.com/lanseria" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-github-line op50 text-2xl />
    <span text-lg>lanseria</span>
  </a>
  <a href="https://space.bilibili.com/8487409" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-bilibili-line op50 text-2xl/>
    <span text-lg ws-nowrap>爱吃包子的超</span>
  </a>
</div>

<img src="https://avatars.githubusercontent.com/u/14802764?v=4" absolute top-36 right-30 w-40 rounded-full />

<!--
在正式开始之前，请允许我简单介绍一下自己。
我是一名全栈开发者，也是 Vue、Nuxt 和 TypeScript 的忠实爱好者。平时最大的乐趣就是把一些想法通过代码实现出来，并且热衷于参与和分享各种开源项目。
大家可以在 Bilibili 和 GitHub 上通过“爱吃包子的超”或者“lanseria”找到我。我会在这些平台分享一些技术和项目心得，欢迎大家关注和交流。
-->

---
layout: center
---

# 😫 我为什么要做这个项目？

<div
  class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 text-left text-lg"
>
<div v-click class="p-6 rounded-lg bg-gray-400/10">
<div class="text-3xl text-red-400 i-carbon-calculation-alt mb-3"></div>
<h3 class="font-bold mb-2">手动记账太麻烦</h3>
<p class="text-base opacity-80">
用 Excel 或记账软件记录基金买卖，不仅繁琐易错，而且无法直观看到实时收益。
</p>
</div>

<div v-click class="p-6 rounded-lg bg-gray-400/10">
<div class="text-3xl text-yellow-400 i-carbon-ibm-consulting-advantage-application mb-3"></div>
<h3 class="font-bold mb-2">官方App太臃肿</h3>
<p class="text-base opacity-80">
受不了各种理财App的广告轰炸和信息过载，我只想要一个纯粹、干净、聚焦于我持仓的看板。
</p>
</div>

<div v-click class="p-6 rounded-lg bg-gray-400/10">
<div class="text-3xl text-teal-400 i-carbon-code mb-3"></div>
<h3 class="font-bold mb-2">想自己实践技术</h3>
<p class="text-base opacity-80">
想用 Nuxt 3 搞一个全栈项目，把前端、后端、数据库、定时任务、认证都串起来，练练手！
</p>
</div>
</div>

<!--
好，那我们回到正题。我当初为什么要做这么一个项目呢？主要有三个痛点。
(点击，出现第一项)
首先，手动记账太麻烦了。在座的各位可能也有过类似的经历，用 Excel 或者一些记账软件来记录每一笔基金的买入和卖出。这个过程不仅非常繁琐，容易出错，而且最大的问题是，它无法让我直观地看到实时的收益情况。每天的涨跌，我还是得打开另外的软件去看。
(点击，出现第二项)
其次，官方的 App 太臃肿了。不管是支付宝还是天天基金，打开应用，迎面而来的就是各种广告、理财推荐和信息流，信息过载非常严重。有时候，我真的只是想安安静静地看一眼我的持仓，只想关注我自己的那几只基金，而不是被各种信息轰炸。我想要一个纯粹、干净、只属于我的投资看板。
(点击，出现第三项)
最后，也是对我个人而言最重要的一个原因——我想自己实践技术。我一直想用 Nuxt 3 来完整地构建一个全栈项目，把前端、后端 API、数据库、定时任务，甚至是用户认证这些环节全部串联起来。这对我来说是一个绝佳的练手机会，也是一个能解决自己实际问题的有趣挑战。
-->

---
layout: center
class: text-center
glowOpacity: 0.1
---

# ✨ 项目功能一览

<div grid="~ cols-2 md:cols-3 gap-4" py8 text-left>
  <div v-click flex="~ col gap-1" p4 rounded bg-teal:15 text-teal1>
    <div text-3xl i-carbon-dashboard-reference mb2 />
    <div>清晰仪表盘</div>
    <div text-xs op60>实时汇总总资产、总盈亏和持仓列表。</div>
  </div>
  <div v-click flex="~ col gap-1" p4 rounded bg-blue:15 text-blue1>
    <div text-3xl i-carbon-chart-line-data mb2 />
    <div>交互式图表</div>
    <div text-xs op60>基于 ECharts 的历史净值、MA均线和策略信号展示。</div>
  </div>
  <div v-click flex="~ col gap-1" p4 rounded bg-violet:15 text-violet1>
    <div text-3xl i-carbon-edit mb2 />
    <div>持仓管理</div>
    <div text-xs op60>通过美观的模态框增、删、改基金持仓。</div>
  </div>
  <div v-click flex="~ col gap-1" p4 rounded bg-orange:15 text-orange1>
    <div text-3xl i-carbon-moon mb2 />
    <div>主题切换</div>
    <div text-xs op60>支持亮/暗色模式和多种主题色，适配你的审美。</div>
  </div>
  <div v-click flex="~ col gap-1" p4 rounded bg-lime:15 text-lime1>
    <div text-3xl i-carbon-document-import mb2 />
    <div>数据备份</div>
    <div text-xs op60>支持通过 JSON 文件一键导入/导出持仓数据。</div>
  </div>
  <div v-click flex="~ col gap-1" p4 rounded bg-yellow:15 text-yellow1>
    <div text-3xl i-twemoji-1st-place-medal mb2 />
    <div>收益率排行</div>
    <div text-xs op60>匿名化的用户收益率排行榜，看看大佬表现。</div>
  </div>
</div>

<!--
基于这些痛点，我开发了“基金投资助手”，它主要包含了这些核心功能：
(逐个点击，介绍功能)
清晰的仪表盘：一打开应用，你就能看到所有持仓的总资产、总盈亏，以及一个清晰的持仓列表，所有关键信息一目了然。
交互式图表：我们为每只基金都提供了基于 ECharts 的深度分析图表，包括历史净值、MA 均线，甚至还有一些策略信号的展示。
持仓管理：当然，你可以非常方便地通过一个美观的模态框来增加、删除或者修改你的基金持仓记录。
主题切换：为了满足不同的审美，项目内置了亮色和暗色模式，并且支持多种主题色，让界面更好看。
数据备份：你的数据完全由你掌控。我们支持通过 JSON 文件一键导入和导出所有的持仓数据，方便迁移和备份。
收益率排行：最后，我还做了一个好玩的功能，一个匿名化的用户收益率排行榜，可以看看社区里的大佬们表现如何，激励一下自己。
-->

---
layout: default
glowOpacity: 0.1
glow: top
---

# 核心仪表盘

<img src="/demo/dashboard.webp" class="rounded-lg shadow-lg mt-4" />

<div v-click class="absolute top-100 left-30 p-2 bg-black/60 rounded text-white text-sm">清晰的表格布局</div>
<div v-click class="absolute top-45 right-30 p-2 bg-black/60 rounded text-white text-sm">SSE 实时估值更新 🟢</div>
<div v-click class="absolute top-52 left-100 p-2 bg-black/60 rounded text-white text-sm">自定义排序</div>
<div v-click class="absolute bottom-5 left-100 p-2 bg-black/60 rounded text-white text-sm">策略信号 Tag</div>

<!--
我们先来看一下项目的核心界面——仪表盘。
这就是你登录后看到的第一个页面。
(点击，出现第一个标注)
整个布局非常清晰，采用了大家最熟悉的表格形式，展示了基金代码、名称、持有份额、成本价、当前净值、日涨跌幅以及各项盈亏数据。
(点击，出现第二个标注)
大家请注意看“今日估算”这一列，它后面有一个绿色的小圆点。这代表数据是实时更新的。在交易日的交易时段，后端会定时去拉取最新的基金估值，然后通过 SSE (Server-Sent Events) 技术实时推送到前端，你不需要刷新页面，就能看到收益的跳动。
(点击，出现第三个标注)
我们还支持了非常方便的自定义排序功能，你可以点击表头，按持仓市值、累计收益率等任意你关心的指标进行排序。
(点击，出现第四个标注)
最后，表格末尾这个小小的 Tag，比如“MA”，是我们的策略信号。它会根据你设置的投资策略，给你一些简单的提示。
-->

---
layout: default
---

# 深度策略分析

<img src="/demo/fund-detail.webp" class="rounded-lg shadow-lg mt-4" />


<div v-click class="absolute top-60 left-30 p-2 bg-black/60 rounded text-white text-sm">ECharts 驱动</div>
<div v-click class="absolute top-50 right-30 p-2 bg-black/60 rounded text-white text-sm">买(B)/卖(S)信号标记</div>
<div v-click class="absolute bottom-20 left-30 p-2 bg-black/60 rounded text-white text-sm">动态时间范围选择</div>
<div v-click class="absolute top-80 right-30 p-2 bg-black/60 rounded text-white text-sm">支持多种策略图表</div>

<!--
当你点击仪表盘上的任意一只基金，就会进入到这个深度策略分析页面。
(点击，出现第一个标注)
这个交互式的图表是基于强大的 ECharts 库来驱动的，提供了非常流畅的缩放和拖拽体验。
(点击，出现第二个标注)
大家可以看到图上有一些 B点 和 S点 的标记。这是我内置的一些简单交易策略，比如均线策略，计算出的理论**买入（Buy）和卖出（Sell）**信号。这可以为我们的投资决策提供一些数据参考。
(点击，出现第三个标注)
底部有一个动态时间范围选择器，你可以方便地查看最近一个月、三个月，或者任意自定义时间范围内的基金走势。
(点击，出现第四个标注)
当然，除了基础的K线和均线，我们还支持切换多种不同的策略图表，比如布林带、MACD等等，来满足更专业的分析需求。
-->

---
layout: default
---

# 颜值即正义：主题切换

<div class="grid grid-cols-2 gap-8 mt-4">
  <div v-click>
    <h3 class="text-center mb-2">亮色模式 ☀️</h3>
    <img src="/demo/light-mode.webp" class="rounded-lg shadow-lg" />
  </div>
  <div v-click>
    <h3 class="text-center mb-2">暗色模式 🌙</h3>
    <img src="/demo/dark-mode.webp" class="rounded-lg shadow-lg" />
  </div>
</div>

<div v-click class="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 bg-black/60 rounded text-white text-sm flex items-center">
  <div i-carbon-color-palette mr-2 />
  <span>还支持自定义主题色哦！</span>
</div>

<!--
作为一个颜控，我认为应用的颜值也非常重要。
(点击，出现亮色模式)
所以，项目默认提供了一套清爽的亮色模式。
(点击，出现暗色模式)
同时也为喜欢在夜间使用的朋友们准备了现在非常流行的暗色模式。一键切换，非常丝滑。
(点击，出现底部提示)
不仅如此！为了满足个性化需求，我们还内置了多种主题色。你可以选择你最喜欢的颜色，比如骚气的紫色、沉稳的蓝色，让这个看板真正成为你自己的专属工具。
-->

---
layout: center
---

# 🛠️ 技术全家桶

<div grid="~ cols-1 md:cols-3 gap-x-10 gap-y-4" text-left text-lg p-6>

  <div v-click>
    <!-- [修改] 修复了图标和文字的对齐问题 -->
    <h3 class="font-bold text-xl text-teal-300 mb-2 flex items-center">
      <div i-logos-nuxt-icon mr-2 />前端
    </h3>
    <ul class="ml-6 space-y-1">
      <li><span text-lime-400 font-bold>Nuxt 3</span> - 全栈框架</li>
      <li><span text-lime-400 font-bold>Vue 3</span> - 核心UI库</li>
      <li><span text-lime-400 font-bold>UnoCSS</span> - 原子化CSS</li>
      <li><span text-lime-400 font-bold>Pinia</span> - 状态管理</li>
      <li><span text-lime-400 font-bold>ECharts</span> - 数据可视化</li>
    </ul>
  </div>

  <div v-click>
    <!-- [修改] 修复了图标和文字的对齐问题 -->
    <h3 class="font-bold text-xl text-blue-300 mb-2 flex items-center">
      <div i-carbon-server-proxy mr-2 />后端 (Nitro)
    </h3>
    <ul class="ml-6 space-y-1">
      <li><span text-cyan-400 font-bold>PostgreSQL</span> - 关系型数据库</li>
      <li><span text-cyan-400 font-bold>Drizzle</span> - TypeScript ORM</li>
      <li><span text-cyan-400 font-bold>Redis</span> - 密钥缓存</li>
      <li><span text-cyan-400 font-bold>PASETO</span> - 安全Token认证</li>
      <li><span text-cyan-400 font-bold>Scheduled Tasks</span> - 定时任务</li>
    </ul>
  </div>

  <div v-click>
    <!-- [修改] 修复了图标和文字的对齐问题 -->
    <h3 class="font-bold text-xl text-yellow-300 mb-2 flex items-center">
      <div i-carbon-3d-mpr-toggle mr-2 />开发 & 部署
    </h3>
    <ul class="ml-6 space-y-1">
      <li><span text-orange-400 font-bold>Vite</span> - 极速构建</li>
      <li><span text-orange-400 font-bold>pnpm</span> - 包管理</li>
      <li><span text-orange-400 font-bold>ESLint</span> - 代码规范 (@antfu/eslint-config)</li>
      <li><span text-orange-400 font-bold>Docker</span> - 容器化部署</li>
    </ul>
  </div>
</div>

<!--
聊完了功能，我们再深入到“船舱”底下，看看这个项目都用了哪些技术，也就是大家常说的“技术栈”。
(点击，出现前端部分)
首先是前端。整个项目是基于 Nuxt 3 这个全栈框架构建的，它的底层当然是 Vue 3。样式方面，我选择了原子化的 UnoCSS，写起来非常高效。状态管理则用了官方推荐的 Pinia，而图表就是刚才提到的 ECharts。
(点击，出现后端部分)
再来看后端。这部分完全由 Nuxt 的服务器引擎 Nitro 来驱动。数据库我选择了开源且强大的 PostgreSQL，并通过 Drizzle 这个 TypeScript ORM 来进行交互，它的类型安全做得非常棒。缓存方面，我用了 Redis 来存储一些临时数据和 Session。用户认证则采用了更现代、更安全的 PASETO Token方案。而数据的定时同步，则依赖 Nitro 内置的定时任务功能。
(点击，出现开发部署部分)
最后，在开发和部署方面。本地开发由 Vite 驱动，速度飞快。包管理用的是 pnpm。为了保证代码质量，我用了 Anthony Fu 大佬的 ESLint 配置。而最终的部署，我把它全部容器化了，通过 Docker 可以一键启动，非常方便。
-->

---
layout: default
---

# 🏗️ 项目架构：不止是前端

Nuxt 3 提供了强大的**前后端同构**能力，所有代码都在一个仓库里！

<div v-click class="mt-8 p-6 rounded-lg bg-gray-800/50 text-center">
  <div class="flex items-center justify-center gap-4 text-lg">
    <div class="p-4 rounded-md bg-blue-500/30">
      <div i-carbon-user-avatar-filled-alt text-2xl mb-2 />
      浏览器
    </div>
    <div class="i-carbon-arrow-right text-3xl opacity-50" />
    <div class="p-4 rounded-md bg-teal-500/30">
      <div flex items-center gap-2>
        <div i-logos-nuxt-icon text-2xl mb-2 />
        Nuxt 3 应用
      </div>
      <div class="text-sm opacity-70">
        (Vue组件 / Pinia / Composables)
      </div>
    </div>
    <div class="i-carbon-arrows-horizontal text-3xl opacity-50" />
    <div class="p-4 rounded-md bg-violet-500/30">
      <div flex items-center gap-2>
        <div i-carbon-server-proxy text-2xl mb-2 />
        Nitro 后端
      </div>
      <div class="text-sm opacity-70">
        (API / 任务 / 中间件)
      </div>
    </div>
    <div class="i-carbon-arrow-right text-3xl opacity-50" />
    <div class="p-4 rounded-md bg-orange-500/30">
      <div flex items-center>
        <div i-logos-postgresql text-2xl mb-2 />
        <div i-logos-redis text-2xl mb-2 ml-2 />
      </div>
      <div class="mt-[-8px]">数据库 & 缓存</div>
    </div>
  </div>
</div>

<div v-click class="mt-6 text-xl text-center opacity-90">
  从用户界面到数据库操作，<span class="text-lime-400 font-bold">一套TS，全部搞定！</span>
</div>

<!--
刚才的技术栈里，大家可能注意到了，前端和后端的核心都是 Nuxt。这正是 Nuxt 3 最强大的能力之一：前后端同构。
(点击，出现架构图)
我们可以看一下这个简单的架构图。
从左到右，用户的请求从浏览器发出，首先到达我们的 Nuxt 3 应用。
在这个 Nuxt 应用内部，它其实分成了两部分：一部分是大家熟悉的 Vue 组件、Pinia 状态管理等，负责渲染用户界面；另一部分则是运行在服务器端的 Nitro 后端，它负责处理 API 请求、执行定时任务、和数据库交互等。
Nitro 后端再进一步和我们的**数据库（PostgreSQL）以及缓存（Redis）**进行通信，完成数据的增删改查。
(点击，出现结论)
这种架构最大的好处是什么呢？就是从用户界面到数据库操作，**一套 TypeScript，全部搞定！**你不需要再维护一个前端项目和一个后端项目，所有的代码都在一个仓库里，共享类型定义，开发体验极度舒适。
-->

---
layout: default
---

# 后端亮点 (1): Drizzle ORM

告别手写 SQL 和繁琐的类型定义，享受完全的**类型安全**！

<div class="grid grid-cols-2 gap-4 mt-4">
<div>
<h4 class="font-bold mb-2">定义 Schema (`schemas.ts`)</h4>

```ts {all|2-3|5|10|13}
// server/database/schemas.ts
export const users = fundSchema.table('users', {
  id: bigserial('id', { mode: 'number' }).primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
})

export const holdings = fundSchema.table('holdings', {
  userId: bigint('user_id', { mode: 'number' }).notNull()
    .references(() => users.id),
  fundCode: varchar('fund_code', { length: 10 }).notNull()
    .references(() => funds.code),
  shares: numeric('shares'),
})
```
</div>
<div>
<h4 class="font-bold mb-2">查询数据 (类型自动推断)</h4>

```ts {all|2|5-9}
// server/utils/holdings.ts
const userHoldings = await db.query.holdings.findMany({
  where: eq(holdings.userId, userId),
  // 就像 GraphQL 一样，声明式地关联查询！
  with: {
    fund: true, // 自动 join funds 表
  },
})

// userHoldings 的类型是...
// (Holding & { fund: Fund | null; })[]
// 所有字段和类型都由 Drizzle 自动推断！
```
</div>
</div>

<!--
在后端技术选型中，我特别想和大家分享两个让我觉得体验非常棒的亮点。第一个就是 Drizzle ORM。
如果你用过其他的 ORM，可能会被复杂的配置和不确定的返回类型所困扰。但 Drizzle 真正做到了完全的类型安全。
(指向左侧代码)
我们看左边，这是定义数据表结构的代码。我们用 TypeScript 的方式来定义 users 表和 holdings 表，每个字段的类型、是否为空、是否是外键都一清二楚。
(指向右侧代码)
神奇的地方在右边。当我们去查询数据时，比如这里我们查询某个用户的所有持仓，并且通过 with 关键字声明，要把它关联的 fund 信息也一起查出来。
Drizzle 会自动分析你的查询语句，然后推断出返回结果的 TypeScript 类型！你甚至不需要手动去写 interface 或 type。这意味着你在写后续的业务逻辑时，所有的字段和类型都会有智能提示，并且在编译时就会检查错误，这极大地提升了代码的健壮性。
-->

---
layout: default
---

# 后端亮点 (2): Nitro 定时任务

利用 Nitro 内置的 `scheduledTasks`，轻松实现自动化任务。

<div class="grid grid-cols-2 gap-8 mt-4">
<div>
<h4 class="font-bold mb-2">配置任务 (`nuxt.config.ts`)</h4>

```ts {all|5|6|7|12|15|18}
// nuxt.config.ts
const scheduledTasks: Record<string, string[]> = {}

// 从环境变量读取 Cron 表达式
const syncHistoryCron = env.CRON_FUND_SYNC_HISTORY ?? '0 2 * * *'
const syncEstimateCron = env.CRON_FUND_SYNC_ESTIMATE ?? '* 9-15 * * *'
const runStrategiesCron = env.CRON_FUND_RUN_STRATEGIES ?? '0 6 * * *'

export default defineNuxtConfig({
  nitro: {
    scheduledTasks: {
      // 每天凌晨2点，同步历史数据
      [syncHistoryCron]: ['fund:syncHistory'],
      // 交易时段每分钟，同步实时估值
      [syncEstimateCron]: ['fund:syncEstimate'],
      // 每天早上6点，运行策略分析
      [runStrategiesCron]: ['fund:runStrategies'],
    },
    experimental: {
      tasks: true,
    },
  },
})
```
<p v-click class="mt-4 opacity-80 text-sm">就像 Linux 的 crontab 一样简单，但完全集成在 Nuxt 项目中！</p>
</div>

<div>
<h4 class="font-bold mb-2">任务实现 (`server/tasks/...`)</h4>

```ts
// server/tasks/fund/syncEstimate.ts
import { syncAllFundsEstimates } from '~~/server/utils/holdings'

export default defineTask({
  meta: {
    name: 'fund:syncEstimate',
    description: '盘中定时同步所有基金的实时估值',
  },
  async run() {
    // 调用核心业务逻辑
    const result = await syncAllFundsEstimates()

    // 任务完成后，通过 mitt 发出事件通知
    if (result.success > 0) {
      emitter.emit('holdings:updated')
    }
    return { result }
  },
})
```
<p v-click class="mt-4 opacity-80 text-sm">任务执行后，通过事件总线通知前端，实现数据实时更新！</p>
</div>
</div>

<!--
第二个后端亮点，是 Nitro 内置的定时任务功能。
对于我们这个项目来说，定时任务是至关重要的，比如我们需要每天收盘后同步基金的历史净值，在交易时段内分钟级地同步实时估值。
(指向左侧代码)
在 Nuxt 中实现这个需求非常简单。我们只需要在 nuxt.config.ts 这个配置文件里，进行一些声明。这里的语法和 Linux 的 crontab 完全一样，你可以指定任务在何时执行。比如 0 2 * * * 就代表每天凌晨2点执行。然后把它和你定义的任务名称关联起来，比如 fund:syncHistory。
(指向右侧代码)
具体的任务逻辑，我们写在 server/tasks 目录下。比如这个同步估值的任务，它会导出一个 defineTask 对象。在 run 方法里，我们调用核心的业务逻辑，比如这里的 syncAllFundsEstimates。
最妙的是，当任务执行完毕，成功获取到新数据后，我们通过一个全局的事件总线 emitter，发出了一个 holdings:updated 的事件。这个事件，就是接下来我们要讲的前端实时更新的关键。
-->

---
layout: default
---

# 前端亮点: SSE 实时更新

利用 `useEventSource` 组合式函数，优雅地接收后端推送的实时数据。

<div class="grid grid-cols-2 gap-8 mt-4 items-start">

<div v-click>
<h4 class="font-bold mb-2">后端事件推送 (`/sse/holdings.get.ts`)</h4>

```ts
// server/routes/api/sse/holdings.get.ts
import { emitter } from '~~/server/utils/emitter'
import { getUserHoldingsAndSummary } from '~~/server/utils/holdings'

export default defineEventHandler(async (event) => {
  const user = getUserFromEvent(event)
  const eventStream = createEventStream(event)

  async function sendUpdate() {
    const data = await getUserHoldingsAndSummary(user.id)
    await eventStream.push(JSON.stringify(data))
  }

  // 监听 'holdings:updated' 事件
  emitter.on('holdings:updated', sendUpdate)

  // ... 省略关闭连接时的清理逻辑
})
```
</div>

<div v-click>
<h4 class="font-bold mb-2">前端监听 (`/pages/index.vue`)</h4>

```ts
// app/pages/index.vue
// 1. 定义 SSE 连接地址
const sseUrl = ref('/api/sse/holdings')

// 2. 使用 @vueuse/core 提供的 useEventSource
const { status, data: sseData, open, close } = useEventSource(
  sseUrl,
  [],
  { withCredentials: true }, // 确保 cookie 被发送
)

// 3. 监听数据变化并更新 Pinia Store
watch(sseData, (newData) => {
  if (newData) {
    const updatedData = JSON.parse(newData)
    // 更新持仓和汇总信息
    holdingStore.holdings = updatedData.holdings
    holdingStore.summary = updatedData.summary
  }
})
```
</div>

</div>

<div v-click class="mt-6 text-center text-xl opacity-90">
当定时任务更新数据后，后端 `emit` 事件，前端 `watch` 自动响应，UI 无缝刷新！
</div>

<!--
好，刚才我们说到，后端定时任务在更新完数据后，会发出一个事件。那前端是如何接收到这个通知并更新界面的呢？这里我们就用到了 SSE，也就是服务器发送事件。
相比 WebSocket，SSE 更轻量，非常适合这种从服务器到客户端的单向数据流场景。
(指向左侧代码)
我们先看后端的实现。我们创建了一个 /api/sse/holdings 的路由。当有客户端连接时，它会创建一个事件流。然后，它就开始监听我们刚才提到的那个 holdings:updated 事件。一旦事件被触发，它就会立刻调用 sendUpdate 函数，把最新的持仓数据通过这个事件流 push 给前端。
(指向右侧代码)
再来看前端的实现，就更加优雅了。我借助了 @vueuse/core 这个强大的工具库，它提供了一个 useEventSource 组合式函数。
我们只需要把后端的 SSE 地址传给它，它就会自动建立连接。然后，我们用一个 watch 来监听 sseData 的变化。一旦后端推送了新的数据过来，watch 就会被触发，我们在这里解析 JSON 数据，然后调用 Pinia store 的 action 来更新全局状态。
(点击，出现底部文字)
这样一来，一个完整的实时更新链路就形成了：**后端定时任务更新数据库 -> 触发事件 -> SSE 推送给前端 -> 前端 watch 自动响应 -> UI 无缝刷新！**整个过程用户是无感的，体验非常流畅。
-->

---
layout: center
---

# 🚀 快速上手 & 部署

项目已完全 Docker 化，部署从未如此简单！

<div class="text-left mt-8 max-w-xl mx-auto space-y-6">
  <div v-click>
    <h3 class="font-bold text-lg mb-1">1. 开发模式</h3>
    <p class="text-sm opacity-70 mb-2">克隆项目，安装依赖，启动开发服务器。</p>
    <code class="block whitespace-pre-wrap p-3 rounded bg-gray-800 text-sm">
      git clone https://github.com/lanseria/fund-investment-assistant.git
      <br>
      pnpm install
      <br>
      pnpm run dev
    </code>
  </div>

  <div v-click>
    <h3 class="font-bold text-lg mb-1">2. Docker 部署 (推荐)</h3>
    <p class="text-sm opacity-70 mb-2">一行命令构建镜像，一行命令运行容器。</p>
    <code class="block whitespace-pre-wrap p-3 rounded bg-gray-800 text-sm">
      # 构建镜像
      <br>
      docker build -t fund-frontend:latest .
      <br><br>
      # 运行容器 (记得配置好环境变量)
      <br>
      docker run -p 3000:3000 -d --name fund-app fund-frontend:latest
    </code>
  </div>
</div>

<!--
聊了这么多技术细节，相信有些朋友已经跃跃欲试，想把它部署起来自己玩玩了。
别担心，整个过程非常简单，因为我已经把它完全 Docker 化了。
(点击，出现开发模式)
如果你想在本地进行二次开发，或者只是想看看源码，那么只需要三步：git clone 克隆项目，pnpm install 安装依赖，然后 pnpm run dev 就能把开发服务器跑起来了。
(点击，出现 Docker 部署)
但我更推荐的方式是直接用 Docker 部署。这只需要两行命令。第一行，docker build，把项目打包成一个镜像。第二行，docker run，直接把这个应用容器跑起来。你只需要提前配置好数据库地址之类的环境变量，就可以在自己的服务器上拥有一个专属的基金投资助手了！
-->

---
layout: intro
class: text-center pb-5
---

<h1 font-serif important-text-5em>感 谢 观 看</h1>

<div class="mt-8 mb-4 text-xl">
  项目已在 GitHub 开源，欢迎 <span class="text-yellow-300">Star</span> & <span class="text-lime-300">Fork</span>！
</div>

<div my-10 flex="~ gap-8" items-center justify-center>
  <a href="https://github.com/lanseria/fund-investment-assistant" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-github-line op50 text-2xl />
    <span text-lg>github.com/lanseria/fund-investment-assistant</span>
  </a>
  <a href="https://space.bilibili.com/8487409" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-bilibili-line op50 text-2xl/>
    <span text-lg ws-nowrap>@爱吃包子的超</span>
  </a>
</div>

<div class="opacity-70 text-sm">
  期待与大家在评论区和 GitHub 上交流！
</div>

<!--
好的，那么我今天的分享就到这里。非常感谢大家的观看！
这个项目承载了我对于技术的热情和解决实际问题的思考。
它目前已经在 GitHub 上完全开源，如果你觉得它对你有一点点的启发或者帮助，或者你觉得这个项目有点意思，都非常欢迎你给我一个 Star 和 Fork！你的支持是我继续完善它的最大动力。
大家可以通过屏幕上的链接访问项目主页，也可以在 Bilibili 找到我。
再次感谢大家的时间，期待在评论区和 GitHub 上与大家交流！谢谢！
-->
