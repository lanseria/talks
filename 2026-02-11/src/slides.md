---
layout: cover
glowOpacity: 0.25
glowSeed: 'future-protocol'
highlighter: shiki
css: unocss
---

<!-- 背景图片层：放在最底层 -->
<div class="absolute inset-0 z-0">
  <img src="/1.jpg" class="w-full h-full object-cover opacity-60" />
  <!-- 渐变遮罩，确保文字可读 -->
  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
</div>

<!-- 内容层：添加 z-10 确保在图片之上 -->
<div class="z-10 relative h-full flex flex-col justify-center">
  <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white mb-4">
    打破“围墙花园”
  </h1>
  <h2 class="text-3xl text-slate-300 font-light tracking-wide">
    致未来开发者的下一代通讯协议构想
  </h2>
  
  <div class="absolute bottom-10 left-0 w-full text-center op80 text-sm font-mono tracking-widest text-teal-100">
    <span class="mr-6">DATA SOVEREIGNTY</span>
    <span class="mr-6">LOCAL-FIRST</span>
    <span>DECENTRALIZED</span>
  </div>
</div>

<!--
大家好。今天我想和大家聊一个稍微沉重但又充满希望的话题——我们如何打破互联网的“围墙花园”。
我们将探讨一种全新的通讯架构，旨在将数据主权交还给用户。
-->

---
glowOpacity: 0.15
glow: 'right'
---

# 困境：我们被困住了

<div grid="~ cols-2 gap-12" class="w-full h-full items-center pt-4">
  <div class="text-slate-300 leading-8">
    <p class="text-xl mb-6">
      回顾过去二十年，互联网虽然连接了全人类，但也制造了无数孤岛。
    </p>
    <ul class="space-y-4">
      <li class="flex items-start gap-3">
        <div i-carbon-fragment text-red-400 text-2xl mt-1 />
        <div>
          <b class="text-slate-100">生态割裂:</b> 
          <span class="op80">微信无法发消息给钉钉，WhatsApp 连不通 Telegram。</span>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div i-carbon-locked text-red-400 text-2xl mt-1 />
        <div>
          <b class="text-slate-100">丧失主权:</b> 
          <span class="op80">我们的“数字人生”被锁定在巨头的服务器里。</span>
        </div>
      </li>
      <li class="flex items-start gap-3">
        <div i-carbon-warning text-red-400 text-2xl mt-1 />
        <div>
          <b class="text-slate-100">随时归零:</b> 
          <span class="op80">一旦封号或平台倒闭，记忆瞬间灰飞烟灭。</span>
        </div>
      </li>
    </ul>
  </div>

  <!-- 找到原本右侧的 div，替换为以下代码 -->
  <div class="relative w-full h-80 rounded-xl overflow-hidden border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] group">
    <!-- 图片 -->
    <img src="/2.jpg" class="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
    
    <!-- 内部光效叠加（可选，增加科技感） -->
    <div class="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>

<!--
现在的互联网被割裂成了一个个孤岛。
更可怕的是，承载我们记忆、情感和商业价值的聊天记录，并不属于我们。
一旦账号被封禁，或者平台倒闭，这些记忆将瞬间消失。这不应该是互联网的终局。
-->

---
glowOpacity: 0.1
---

# 核心架构：二元分离

<div class="mt-8 text-center mb-12">
  <p class="text-xl text-slate-300">
    未来的理想架构，应当将 <span class="text-teal-400 font-bold">传输</span> 与 <span class="text-purple-400 font-bold">应用</span> 彻底剥离。
  </p>
</div>

<div grid="~ cols-2 gap-8" class="px-4">
  <!-- 左侧：传输层 -->
  <div v-click class="border border-teal-500/30 bg-teal-500/5 rounded-xl p-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 op10">
      <div i-carbon-delivery text-8xl text-teal-400 />
    </div>
    <h3 class="text-2xl font-bold text-teal-300 mb-4 flex items-center gap-2">
      <div i-carbon-earth-filled /> 传输层 (公有制)
    </h3>
    <p class="text-sm text-slate-400 mb-4 uppercase tracking-widest">National Infrastructure</p>
    <ul class="text-slate-300 space-y-2 text-sm">
      <li>• 像<b>“邮局”</b>一样的国家基建</li>
      <li>• 负责路由、鉴权与监管</li>
      <li>• <b>即送即焚</b>，不存储数据</li>
      <li>• 互联互通，无视品牌差异</li>
    </ul>
  </div>

  <!-- 右侧：应用层 -->
  <div v-click class="border border-purple-500/30 bg-purple-500/5 rounded-xl p-6 relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 op10">
      <div i-carbon-application text-8xl text-purple-400 />
    </div>
    <h3 class="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
      <div i-carbon-notebook /> 应用层 (私有制)
    </h3>
    <p class="text-sm text-slate-400 mb-4 uppercase tracking-widest">Obsidian Mode</p>
    <ul class="text-slate-300 space-y-2 text-sm">
      <li>• 像<b>“日记本”</b>一样的本地工具</li>
      <li>• <b>Local-First</b> (JSON/SQLite)</li>
      <li>• 软件只是“播放器”或“编辑器”</li>
      <li>• 用户拥有数据的绝对控制权</li>
    </ul>
  </div>
</div>

<!--
目前的 IM 是大包大揽的：腾讯既负责修路，也负责造车，还拥有货物。
我们提议的架构是：
1. 传输层：像邮局一样，只负责送信，国家基建，互联互通。
2. 应用层：像 Obsidian 笔记一样，数据在本地，软件只是个编辑器。
-->

---
glowOpacity: 0.15
glowSeed: 'business-model'
---

# 商业重构：从流量到服务

<div class="text-slate-400 mb-8">
  如果是 Local-First，巨头怎么赚钱？答案是：倒逼商业模式升级。
</div>

<div grid="~ cols-3 gap-6" class="mt-4">
  <!-- 模式 1 -->
  <div v-click class="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-yellow-400/50 transition duration-300">
    <div class="w-16 h-16 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4 text-yellow-400">
      <div i-carbon-paint-brush text-3xl />
    </div>
    <h3 class="text-lg font-bold text-slate-200 mb-2">卖“体验”与“皮肤”</h3>
    <p class="text-xs text-slate-400 leading-5">
      既然数据通用，软件竞争回归 UI/UX。<br/>
      极简版免费，二次元 3D 特效版收费。
    </p>
  </div>

  <!-- 模式 2 -->
  <div v-click class="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/50 transition duration-300">
    <div class="w-16 h-16 rounded-full bg-blue-400/20 flex items-center justify-center mb-4 text-blue-400">
      <div i-carbon-cloud-upload text-3xl />
    </div>
    <h3 class="text-lg font-bold text-slate-200 mb-2">卖“云同步服务”</h3>
    <p class="text-xs text-slate-400 leading-5">
      数据在本地，多端同步是痛点。<br/>
      提供<b>加密数据搬运</b>服务，赚取订阅费。
    </p>
  </div>

  <!-- 模式 3 -->
  <div v-click class="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 border border-white/10 hover:border-green-400/50 transition duration-300">
    <div class="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-4 text-green-400">
      <div i-carbon-building text-3xl />
    </div>
    <h3 class="text-lg font-bold text-slate-200 mb-2">企业级服务</h3>
    <p class="text-xs text-slate-400 leading-5">
      为企业提供定制化的协作插件、<br/>
      审批流集成及高级安全加密。
    </p>
  </div>
</div>

<div class="mt-10 mx-auto w-3/4 h-24 border border-slate-600/50 rounded-lg flex items-center justify-center bg-black/30">
    <span class="text-slate-500 italic mr-4">Reference:</span>
    <span class="text-xl font-bold text-purple-400 flex items-center gap-2">
      <div i-carbon-idea /> Obsidian (黑曜石笔记) 模式
    </span>
</div>

<!--
这并非消灭商业。参考 Obsidian 的成功：
厂商可以卖精美的 UI 皮肤，卖加密的云同步带宽，卖企业级插件。
这比现在的广告变现和贩卖隐私要健康得多。
-->

---
glowOpacity: 0.2
glowSeed: 'ai-future'
---

# 杀手锏：AI 时代的必然选择

<div grid="~ cols-2 gap-10" class="h-full items-center">
  <div>
    <h3 class="text-2xl text-slate-200 mb-6 font-light">
      我们需要一个 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">个人 AI 助理</span>
    </h3>
    <div class="space-y-6">
      <div class="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-r-lg">
        <h4 class="text-red-400 font-bold text-sm mb-1">现有模式 (SaaS)</h4>
        <p class="text-slate-400 text-sm">
          数据封闭。你无法训练属于自己的 AI。即便厂商推出 AI，你敢把十年隐私都交给它分析吗？
        </p>
      </div>
      <div class="flex justify-center">
        <div i-carbon-arrow-down text-2xl text-slate-500 />
      </div>
      <div class="bg-teal-500/10 border-l-4 border-teal-500 p-4 rounded-r-lg">
        <h4 class="text-teal-400 font-bold text-sm mb-1">本地化模式 (Local-First)</h4>
        <p class="text-slate-400 text-sm">
          数据在硬盘。下载开源大模型(LLM)到本地，读取你的聊天记录。<b>数据不出域，隐私零风险，却最懂你。</b>
        </p>
      </div>
    </div>
  </div>

  <div class="h-90 w-full relative">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      <!-- 找到原本右侧的 div (h-90 w-full relative)，替换为以下代码 -->
    <div class="h-90 w-full relative group">
        <!-- 背景光晕动画 -->
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <!-- 图片容器 -->
        <div class="relative w-full h-full rounded-2xl overflow-hidden border border-purple-500/30 bg-black">
          <img src="/3.jpg" class="w-full h-full object-cover opacity-90" />
          <!-- 科技感网格覆盖层 -->
          <div class="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 mix-blend-overlay"></div>
        </div>
    </div>
  </div>
</div>

<!--
为什么现在提这个？因为 AI 来了。
未来的社交是人与 AI 的共生。你需要一个最懂你的 AI，它需要读取你过去十年的聊天记录。
只有数据在本地，你才能安全地训练这个属于你自己的数字分身。
-->

---
layout: end
glowOpacity: 0.3
---

<!-- 背景图片层 -->
<div class="absolute inset-0 z-0">
  <img src="/4.jpg" class="w-full h-full object-cover opacity-50" />
  <div class="absolute inset-0 bg-black/60"></div> <!-- 压暗背景 -->
</div>

<!-- 内容层 -->
<div class="z-10 relative h-full flex flex-col justify-center items-center text-center">
  <h1 class="mb-8 text-5xl font-bold text-white drop-shadow-lg">致未来的创造者</h1>

  <div class="text-xl text-slate-200 mt-6 max-w-2xl leading-relaxed font-serif italic">
    <p class="mb-8">
      "上一代互联网人解决了<span class="text-yellow-300 font-sans not-italic">连接</span>的问题。<br>
      你们的使命，是解决<span class="text-teal-300 font-sans not-italic">主权</span>的问题。"
    </p>
    <p class="font-bold text-white text-2xl not-italic font-sans mt-12">
      不要再去造下一个微信了。<br>
      去创造属于未来的<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">数字水管</span>和<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">数字水杯</span>。
    </p>
  </div>

  <div class="mt-16 flex justify-center gap-6 text-sm text-slate-400">
    <div class="flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-black/40"><div i-carbon-code /> Data Sovereignty</div>
    <div class="flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-black/40"><div i-carbon-security /> Privacy</div>
    <div class="flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-black/40"><div i-carbon-connect /> Open Protocol</div>
  </div>
</div>

<!--
未来的开发者们，请不要再造围墙了。
让通讯回归沟通，让数据回归个人。
这才是互联网原本该有的样子。谢谢大家。
-->