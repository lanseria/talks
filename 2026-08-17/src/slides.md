---
highlighter: shiki
css: unocss
transition: fade-out
mdc: true
layout: cover
colorSchema: dark
glowSeed: 20260817
glowOpacity: 0.4
lang: zh-CN
title: 便宜的 AI，难流动的数据
---

# 便宜的 AI，难流动的数据

<div class="text-white mt-6 text-xl opacity-90">
从 Agent 的最后一块拼图，畅想一座「国家数据基础设施」
</div>

<div class="absolute bottom-20 flex items-center gap-3 text-white/70">
  <div i-carbon-calendar text-lg />
  <span class="font-bold text-lg">2026 · 08 · 17</span>
</div>

<!--
【开场 · 约 30 秒】
大家好。今天想聊一个我最近感受特别强烈的事：AI 越来越便宜、越来越强，但真正卡住它的东西，一直没变过——数据。这期分享，我想把这个感受讲透，再往前多想一步：如果由国家来修一条「数据的高速公路」，我们的生活会变成什么样。
-->

---
layout: default
glow: left
---

# 2026 年，AI 已经强到「不值钱」

<div class="mt-8 grid grid-cols-3 gap-6">

<div class="p-5 rounded-lg bg-white/5 border border-white/10">
  <div i-carbon-money text-3xl text-teal-400 mb-3 />
  <div class="text-white text-lg font-bold mb-2">Token 便宜得离谱</div>
  <div class="text-white/70 text-sm leading-6">
    推理成本一路下探，跑一次深度分析的开销，可能还不如一口奶茶
  </div>
</div>

<div class="p-5 rounded-lg bg-white/5 border border-white/10">
  <div i-carbon-ai-status text-3xl text-blue-400 mb-3 />
  <div class="text-white text-lg font-bold mb-2">能力日新月异</div>
  <div class="text-white/70 text-sm leading-6">
    LLM 迭代飞快，deepseek-flash-0731 这代模型已经熟练掌握各种工具调用
  </div>
</div>

<div class="p-5 rounded-lg bg-white/5 border border-white/10">
  <div i-carbon-terminal text-3xl text-violet-400 mb-3 />
  <div class="text-white text-lg font-bold mb-2">Agent 工具百花齐放</div>
  <div class="text-white/70 text-sm leading-6">
    国内有 ZCode、新推出的 deepseek-harness，国外有 Codex，交互体验都很棒
  </div>
</div>

</div>

<div class="mt-10 text-center text-white/60 text-base">
  会思考的大脑、会动手的手脚，都已经在云上就位
</div>

<!--
【背景 · 约 1 分钟】
先说现状。第一，AI token 真的非常便宜，而且好用，推理价格一路下探。第二，LLM 的能力迭代非常快，比如 deepseek-flash-0731，已经会各种工具调用了。第三，Agent 交互工具也很多：国内的 ZCode，最新推出的 deepseek-harness，国外的 Codex，都是很好的交互工具。会思考的大脑、会动手的手脚，都已经在云上就位了。
-->

---
layout: default
glow: right
---

# 但还缺最后一块拼图

<div class="mt-12 flex justify-center gap-5">

<div class="text-center">
  <div class="w-38 h-24 rounded-lg bg-teal-400/10 border border-teal-400/30 flex flex-col items-center justify-center gap-1">
    <div i-carbon-thinking text-3xl text-teal-400 />
    <div class="text-white text-lg font-bold">思考</div>
  </div>
  <div class="mt-2 text-teal-400 text-sm">✓ LLM 已经解决</div>
</div>

<div class="text-center">
  <div class="w-38 h-24 rounded-lg bg-blue-400/10 border border-blue-400/30 flex flex-col items-center justify-center gap-1">
    <div i-carbon-tool-box text-3xl text-blue-400 />
    <div class="text-white text-lg font-bold">行动</div>
  </div>
  <div class="mt-2 text-blue-400 text-sm">✓ Agent 已经解决</div>
</div>

<div class="text-center">
  <div class="w-38 h-24 rounded-lg bg-red-400/10 border border-red-400/40 flex flex-col items-center justify-center gap-1" v-click>
    <div i-carbon-data-blocked text-3xl text-red-400 />
    <div class="text-white text-lg font-bold">数据</div>
  </div>
  <div class="mt-2 text-red-400 text-sm" v-after>✗ 唯一缺的，是它</div>
</div>

</div>

<div class="mt-12 text-center text-xl text-white" v-click>
AI 能顺畅地<span class="text-teal-400 font-bold">用</span>数据，却很难顺畅地<span class="text-red-400 font-bold">获取</span>与<span class="text-red-400 font-bold">上传</span>数据
</div>

<!--
【转折 · 约 40 秒】
但是——现在唯一缺少的，是数据的获取与上传。你看：思考，LLM 解决了；行动，Agent 工具解决了；唯独数据这一块，AI 能顺畅地"用"数据，却很难顺畅地"获取"和"上传"数据。数据都锁在各自的柜子里。
-->

---
layout: default
---

# 「我让豆包对比 8.5 万的新能源车，很轻松啊」

<div class="mt-8 text-white/80 text-lg leading-9">

确实。新闻资讯、公开网页这类数据，AI 抓取和分析都很顺。

但总觉得……<span class="text-white font-bold">差点什么</span>。

</div>

<div class="mt-10 grid grid-cols-2 gap-6">

<div class="p-5 rounded-lg bg-teal-400/5 border border-teal-400/20">
  <div class="text-teal-400 font-bold mb-2 flex items-center gap-2">
    <div i-carbon-checkmark-outline /> AI 已经吃得很好的
  </div>
  <div class="text-white/70 text-sm leading-6">
    新闻 · 资讯 · 公开网页 · 通用常识<br/>——浅层、易得、人人可抓
  </div>
</div>

<div class="p-5 rounded-lg bg-red-400/5 border border-red-400/20" v-click>
  <div class="text-red-400 font-bold mb-2 flex items-center gap-2">
    <div i-carbon-lock /> 真正值钱、却锁在门后的
  </div>
  <div class="text-white/70 text-sm leading-6">
    专业 · 深度 · 可信 · 可写回<br/>——差的是这四样，不是「有没有数据」
  </div>
</div>

</div>

<!--
【回应质疑 · 约 45 秒】
你可能会说：我想对比 8.5 万的新能源车，让豆包轻松就能获取啊。确实，这些新闻类数据非常好获得。但总觉得差点什么。差的是什么？不是"有没有数据"，而是数据的深度、专业度、可信度，以及——能不能安全地把数据写回去。
-->

---
layout: default
glow: top
---

# 六个真实场景，同一声叹息

<div class="mt-8 grid grid-cols-3 gap-5">

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-partly-cloudy text-2xl text-sky-400 />
    <span class="text-white font-bold">天气</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    普通预报随手可得；但卫星云图、气压图这些专业数据，要 AI 读文档、注册账号、手动下载……一套流程走完，兴致全无
  </div>
</div>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-chart-line text-2xl text-amber-400 />
    <span class="text-white font-bold">金融</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    炒股、基金的数据限制都比较大，红线密布，没人敢做第一个
  </div>
</div>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-shopping-cart text-2xl text-rose-400 />
    <span class="text-white font-bold">购物</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    支付、比价还是人眼一个个比对；商品质量好不好，只能翻评论碰运气
  </div>
</div>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-building text-2xl text-emerald-400 />
    <span class="text-white font-bold">政务</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    政策获取、报表填报、公民信息统一存储，这些都还处于初级阶段
  </div>
</div>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-car text-2xl text-orange-400 />
    <span class="text-white font-bold">出行</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    酒店 + 交通信息散落各家平台，口径不一，拼不出全貌
  </div>
</div>

<div class="p-4 rounded-lg bg-white/5 border border-white/10">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-chat text-2xl text-violet-400 />
    <span class="text-white font-bold">社交</span>
  </div>
  <div class="text-white/70 text-sm leading-6">
    甚至聊天场景、人际关系场景——数据都在围墙花园里各自沉睡
  </div>
</div>

</div>

<!--
【痛点场景 · 约 1 分 30 秒】
我们把场景摊开看。天气：我获取天气，就是非常普通的数据；但更专业的，比如卫星云图、气压图，这些数据没有非常公开，也能获取，但非常麻烦——让 AI 先读文档、注册账号、下载数据，等等。金融：炒股、基金，限制都比较大，没人敢做第一个。支付和购物：比价还是要人眼一个个对，商品质量只能看评论。政务：政策获取、报表填报、公民信息统一存储，都还在初级阶段。还有酒店加出行信息获取，甚至聊天场景、人际关系场景。六个场景，同一声叹息。
-->

---
layout: default
glow: center
---

# 摊开来看，其实是三层缺失

<div class="mt-10 flex flex-col gap-6 max-w-3xl mx-auto">

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 w-10 h-10 rounded-full bg-red-400/15 border border-red-400/40 flex items-center justify-center text-red-400 font-bold">
    1
  </div>
  <div>
    <div class="text-white text-xl font-bold">获取难</div>
    <div class="text-white/65 text-base mt-1">专业数据不公开、流程摩擦大——文档、注册、下载，一路都是门槛</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold">
    2
  </div>
  <div>
    <div class="text-white text-xl font-bold">无标准</div>
    <div class="text-white/65 text-base mt-1">来源分散、口径不一、真伪难辨——同一件事，十个数据源十个说法</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 w-10 h-10 rounded-full bg-blue-400/15 border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold">
    3
  </div>
  <div>
    <div class="text-white text-xl font-bold">不可写</div>
    <div class="text-white/65 text-base mt-1">数据只能「看」，不能安全地提交、更新、确权——AI 只有一只手</div>
  </div>
</div>

</div>

<!--
【归纳 · 约 35 秒】
把这些痛点归纳一下，其实是三层缺失：第一，获取难，专业数据不公开、流程摩擦大；第二，无标准，来源分散、口径不一、真伪难辨；第三，不可写，数据只能看，不能安全地提交、更新、确权。AI 只有一只手。
-->

---
layout: quote
glowX: 50
glowY: 120
---

# 与其让每个 AI 去敲遍每一扇门

## 不如由国家，修一条数据的高速公路

<!--
【主张引入 · 约 20 秒】
所以我的想法是：与其让每个 AI 去敲遍每一扇门，不如由国家来修一条数据的高速公路。或者说——国家应该做点什么。
-->

---
layout: default
glow: left
---

# 畅想：构建全新的「国家数据中心」

<div class="mt-8 text-white/80 text-lg leading-9 max-w-4xl">

一句话：<span class="text-teal-400 font-bold">统一数据来源与数据通信</span>，<span class="text-blue-400 font-bold">认证每个物品的真实性与质量</span>，<span class="text-violet-400 font-bold">统一用户对每个事物的评价</span>。

</div>

<div class="mt-10 flex items-center justify-center gap-3 text-white/60 text-base">
  <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10">身份</span>
  <div i-carbon-arrow-right text-sm />
  <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10">通信</span>
  <div i-carbon-arrow-right text-sm />
  <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10">物品</span>
  <div i-carbon-arrow-right text-sm />
  <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10">评价</span>
</div>

<div class="mt-8 text-center text-white/50 text-base">
  我们来分类，一步步处理
</div>

<!--
【总方案 · 约 35 秒】
我的畅想，是构建一个全新的数据中心。一句话概括：统一数据来源与数据通信，认证每个物品的真实性与质量高低，统一用户对每个事物的评价。落到具体，就是四件事：身份、通信、物品、评价。我们来分类，一步步处理。
-->

---
layout: default
---

# 四大支柱

<div class="mt-8 grid grid-cols-2 gap-6">

<div class="p-5 rounded-lg bg-teal-400/5 border border-teal-400/20">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-user-avatar text-2xl text-teal-400 />
    <span class="text-white font-bold text-lg">公民信息 · 国家统管</span>
  </div>
  <div class="text-white/70 text-sm leading-7">
    每个人的信息不再存储在各商业公司里，由国家统一管理；查询与修改，都有私密的方式、有限地读取
  </div>
</div>

<div class="p-5 rounded-lg bg-blue-400/5 border border-blue-400/20">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-chat-bot text-2xl text-blue-400 />
    <span class="text-white font-bold text-lg">通信 · 统一加密 API</span>
  </div>
  <div class="text-white/70 text-sm leading-7">
    聊天通信不再被微信等每个软件各自把持，所有公司只调用国家提供的加密通信 API，来实现各自的聊天工具
  </div>
</div>

<div class="p-5 rounded-lg bg-amber-400/5 border border-amber-400/20">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-certificate text-2xl text-amber-400 />
    <span class="text-white font-bold text-lg">物品 · 认证与指标</span>
  </div>
  <div class="text-white/70 text-sm leading-7">
    物品质量好坏不再抽象、不再被随意定义。每类物品都有独特属性——一个车库摄像头，可以有上百个指标来评价它的好用程度
  </div>
</div>

<div class="p-5 rounded-lg bg-violet-400/5 border border-violet-400/20">
  <div class="flex items-center gap-2 mb-2">
    <div i-carbon-blockchain text-2xl text-violet-400 />
    <span class="text-white font-bold text-lg">评价 · 上链不可篡改</span>
  </div>
  <div class="text-white/70 text-sm leading-7">
    借助区块链不可修改的特性，每个人的评价都记录在案；同时用 AI 杜绝刷分情况
  </div>
</div>

</div>

<!--
【四大支柱 · 约 1 分钟】
第一，公民信息国家统管。每个人的信息不再存储在每个商业公司中，国家统一管理公民信息，查询与修改都有私密的方式、有限地读取。第二，信息通信不再被微信这类软件各自把持——这些公司只能调用国家提供的加密通信 API，来实现各自的聊天工具。第三，物品质量好坏不再抽象、不再由别人的评价随意定义。每类物品都有自己独特的属性，比如一个车库摄像头，会有上百个指标来评价它的好用程度。第四，评价体系。通过区块链不可修改的特性，每个人的评价都有记录在案，同时用 AI 杜绝刷分。
-->

---
layout: default
glow: right
---

# 畅想：一个孩子的一生 <span class="text-white/40 text-xl">（上）</span>

<div class="mt-8 flex flex-col gap-5 max-w-4xl">

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-teal-400" />
  <div>
    <div class="text-white text-lg font-bold">诞生 · 一个公民账号</div>
    <div class="text-white/65 text-sm mt-1">他的一生，只需一个账号。出生信息从医院直接获取、编辑、记录——依靠区块链，不可修改</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-blue-400" />
  <div>
    <div class="text-white text-lg font-bold">求学 · 一份成长档案</div>
    <div class="text-white/65 text-sm mt-1">从上学开始，每次成绩与性格变化都由 AI 分析记录，教育从「猜测」走向「了解」</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-amber-400" />
  <div>
    <div class="text-white text-lg font-bold">生活 · 每次购物都可信</div>
    <div class="text-white/65 text-sm mt-1">买的食品与物品都有可靠认证、详细的物品信息，而不是像现在只看表面；他自己的评价也会留下来</div>
  </div>
</div>

</div>

<!--
【愿景·上 · 约 50 秒】
其他情况还远不止这些。让我们想象一个具体情况：一个孩子诞生，他就有了一个公民账号，他的一生只需一个账号。他的信息会从医院中获取并编辑记录下来，依靠区块链记录，不可修改。从上学开始，他的每次成绩以及性格都会与 AI 进行分析记录。他的每次购物，买的食品与物品都有可靠的认证、详细的物品信息，而不是光看表面。他的评价也会留下来。
-->

---
layout: default
glow: left
---

# 畅想：一个孩子的一生 <span class="text-white/40 text-xl">（下）</span>

<div class="mt-8 flex flex-col gap-5 max-w-4xl">

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-emerald-400" />
  <div>
    <div class="text-white text-lg font-bold">福利 · AI 帮他领</div>
    <div class="text-white/65 text-sm mt-1">AI 自动帮他寻找适合他的政策信息，帮他填写、确认、提交，把政策福利稳稳拿到手</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-orange-400" />
  <div>
    <div class="text-white text-lg font-bold">出行 · 万物皆健康</div>
    <div class="text-white/65 text-sm mt-1">每个班次、每辆车的信息都非常健康，很少出现空调坏掉的情况——数据交互极快，坏了马上就能修</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-sky-400" />
  <div>
    <div class="text-white text-lg font-bold">城市 · 拍照即上报</div>
    <div class="text-white/65 text-sm mt-1">遇到路面破损，他只需要拍照，AI 就能帮他上报相关部门，马上进行修复</div>
  </div>
</div>

<div class="flex items-start gap-4" v-click>
  <div class="shrink-0 mt-1 w-3 h-3 rounded-full bg-rose-400" />
  <div>
    <div class="text-white text-lg font-bold">兴趣 · 创造即快乐</div>
    <div class="text-white/65 text-sm mt-1">喜欢机器人，就做一个机器人伴侣；对天气感兴趣，马上能创造点什么去研究天气因素；对运动感兴趣，也一样</div>
  </div>
</div>

</div>

<div class="mt-8 text-center text-xl text-white" v-click>
创造、建造、获取快乐——在这一刻，变得<span class="text-gradient font-bold">轻松自如</span>
</div>

<!--
【愿景·下 · 约 50 秒】
再往后：AI 在他成长过程中，会自动帮他寻找适合他的政策信息，帮他填写、确认、提交，获取政策福利。出行游玩时，每个班次、每辆车都非常健康，很少出现空调坏掉的情况——因为各种数据交互非常快，很快就能维修。遇到路面破损，他只需拍照，AI 就能帮他上报相关部门，马上修复。他大概会对机器人很感兴趣，做一个机器人伴侣；对天气感兴趣，马上能创造点什么研究天气因素；对运动感兴趣，也一样。创造建造获取快乐，在这一刻变得非常轻松自如。
-->

---
layout: default
glow: center
---

# 这不是科幻清单，是地基工程

<div class="mt-12 flex flex-col gap-8 max-w-3xl mx-auto text-center">

<div class="text-white/80 text-xl leading-9" v-click>
AI 已把「<span class="text-teal-400 font-bold">使用数据</span>」的成本，打到接近零
</div>

<div class="text-white/80 text-xl leading-9" v-click>
下一步，是把「<span class="text-blue-400 font-bold">获得与贡献数据</span>」的成本，也打到接近零
</div>

<div class="text-white text-2xl leading-10" v-click>
当数据像<span class="text-gradient font-bold">水电</span>一样流动，<br/>每一个普通人，都是受益者
</div>

</div>

<!--
【收尾·观点 · 约 30 秒】
最后说回我的观点：这不是一份科幻清单，而是一项地基工程。AI 已经把"使用数据"的成本打到接近零了，下一步，应该是把"获得与贡献数据"的成本也打到接近零。当数据像水电一样流动，每一个普通人，都是受益者。
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
  <p class="text-lg">当 AI 无所不能，愿数据奔流不息</p>
</div>

<div class="absolute left-1/2 translate-x--1/2 bottom-10 text-slate-500 text-sm">
  幻灯片源码: <a href="https://github.com/username/talks" target="_blank" class="border-b border-slate-600 hover:text-white transition">github.com/username/talks</a>
</div>

<!--
【结尾 · 约 10 秒】
我是本次的分享者，谢谢大家。当 AI 无所不能，愿数据奔流不息。
-->
