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

<!-- 这是封底信息，会显示在右下角 -->
<div abs-br mx-10 my-11 flex="~ col gap-2 items-end" text-left op75>
  <span>Bilibili @爱吃包子的超</span>
  <a href="https://github.com/lanseria/fund-nuxt-app" target="_blank" class="text-sm border-none! font-300">
    github.com/lanseria/fund-nuxt-app
  </a>
</div>

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

<!-- [修改] 修复了图标和文字的对齐问题，并微调了样式 -->
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

<!-- 替换成你的头像 -->
<img src="https://avatars.githubusercontent.com/u/14802764?v=4" absolute top-36 right-30 w-40 rounded-full />

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

---
layout: center
class: text-center
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

---
layout: default
---

# 核心仪表盘

<img src="/demo/dashboard.png" class="rounded-lg shadow-lg mt-4" />

<!-- 请将你的项目截图放在 public/demo/dashboard.png -->

<div v-click class="absolute top-40 left-10 p-2 bg-black/60 rounded text-white text-sm">清晰的表格布局</div>
<div v-click class="absolute top-28 right-10 p-2 bg-black/60 rounded text-white text-sm">SSE 实时估值更新 🟢</div>
<div v-click class="absolute bottom-20 right-80 p-2 bg-black/60 rounded text-white text-sm">自定义排序</div>
<div v-click class="absolute bottom-10 left-40 p-2 bg-black/60 rounded text-white text-sm">策略信号 Tag</div>

---
layout: default
---

# 深度策略分析

<img src="/demo/fund-detail.png" class="rounded-lg shadow-lg mt-4" />

<!-- 请将你的项目截图放在 public/demo/fund-detail.png -->

<div v-click class="absolute top-25 left-10 p-2 bg-black/60 rounded text-white text-sm">ECharts 驱动</div>
<div v-click class="absolute top-50 right-10 p-2 bg-black/60 rounded text-white text-sm">买(B)/卖(S)信号标记</div>
<div v-click class="absolute bottom-20 left-40 p-2 bg-black/60 rounded text-white text-sm">动态时间范围选择</div>
<div v-click class="absolute top-80 right-20 p-2 bg-black/60 rounded text-white text-sm">支持多种策略图表</div>

---
layout: default
---

# 颜值即正义：主题切换

<div class="grid grid-cols-2 gap-8 mt-4">
  <div v-click>
    <h3 class="text-center mb-2">亮色模式 ☀️</h3>
    <img src="/demo/light-mode.png" class="rounded-lg shadow-lg" />
  </div>
  <div v-click>
    <h3 class="text-center mb-2">暗色模式 🌙</h3>
    <img src="/demo/dark-mode.png" class="rounded-lg shadow-lg" />
  </div>
</div>

<div v-click class="absolute bottom-10 left-1/2 -translate-x-1/2 p-2 bg-black/60 rounded text-white text-sm flex items-center">
  <div i-carbon-color-palette mr-2 />
  <span>还支持自定义主题色哦！</span>
</div>

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
      git clone https://github.com/lanseria/fund-nuxt-app.git
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

---
layout: intro
class: text-center pb-5
---

<h1 font-serif important-text-5em>感 谢 观 看</h1>

<div class="mt-8 mb-4 text-xl">
  项目已在 GitHub 开源，欢迎 <span class="text-yellow-300">Star</span> & <span class="text-lime-300">Fork</span>！
</div>

<!-- [修改] 修复了图标和文字的对齐问题，并微调了样式 -->
<div my-10 flex="~ gap-8" items-center justify-center>
  <a href="https://github.com/lanseria/fund-nuxt-app" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-github-line op50 text-2xl />
    <span text-lg>github.com/lanseria/fund-nuxt-app</span>
  </a>
  <!-- 友情提示：记得把这里的B站ID换成你自己的 -->
  <a href="https://space.bilibili.com/8487409" target="_blank" class="flex items-center gap-2 border-none! font-300">
    <div i-ri-bilibili-line op50 text-2xl/>
    <span text-lg ws-nowrap>@爱吃包子的超</span>
  </a>
</div>

<div class="opacity-70 text-sm">
  期待与大家在评论区和 GitHub 上交流！
</div>
