---
# 封面页
layout: 'cover'
transition: 'fade'
glowOpacity: 0.25
glowSeed: 'digital-future-rebuild'
---

# 我们的数字未来
## 告别内卷，重建地基

<div class="abs-br m-6 text-right text-slate-400">
  一场关于数字基础设施的深度思考
</div>

---
# 开篇提问
glowOpacity: 0.1
glow: 'top'
class: text-slate-200
---

# 我们忽略了什么？

<div class="w-full h-full flex items-center justify-center">
  <div class="text-center leading-relaxed">
    <p v-click class="text-2xl text-slate-300">
      AI 技术日新月异，能力令人惊叹...
    </p>
    <p v-click class="mt-8 text-4xl text-yellow-300 font-bold">
      但，这些先进的算法，
    </p>
    <p v-click class="text-4xl text-yellow-300 font-bold mt-2">
      正建立在一片<b class="text-red-400">混乱、分割、不规范</b>的数据地基之上。
    </p>
  </div>
</div>

<!--
大家好。我一直在思考一个问题。我们身处一个AI技术日新月异的时代，我们惊叹于它强大的能力，但我们似乎忽略了一件事：这些先进的算法，正建立在一片混乱、分割、且不规范的数据地基之上。
-->

---
# 第一部分：我们数字生活的“三大病症”
layout: 'section'
glowOpacity: 0.15
---

# **第一部分**
## 我们数字生活的“三大病症”

---
# 病症一：数据孤岛与重复劳动
glowOpacity: 0.15
glow: 'left'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">病症一: 数据孤岛</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-locked text-2xl text-teal-400 mt-1.5></div>
        <span>个人信息反复填写，联系人列表分散隔绝。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-chat-bot text-2xl text-teal-400 mt-1.5></div>
        <span>聊天记录被锁定在单一 APP，无法自由迁移。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-user-avatar-frail text-2xl text-red-400 mt-1.5></div>
        <!-- 修改点在这里 -->
        <span class="font-bold">我们不是数据的主人，而是平台的<b class="text-red-400">“数据的‘打工人’”</b>。</span>
      </li>
    </ul>
  </div>

  <!-- 右侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full object-cover" src="/demo/1.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: cyberpunk art style, a person is chained to a giant, monolithic server tower with a social media logo on it, their personal data glowing and flowing from them into the tower, surrounding them are other isolated towers representing different apps, dark, oppressive, neon blue and red highlights -->
  </div>
</div>

<!--
第一个病症，是“数据孤岛”。想一想，你的个人信息存在多少个不同的企业服务器里？你的联系人列表，分散在微信、钉钉和各种办公软件中。我们的聊天记录，被牢牢地锁在某一个APP里，我们不是数据的拥有者，更像是平台的“数据的‘打工人’”。
-->

---
# 病症二：功能臃肿与体验“内卷”
glowOpacity: 0.15
glow: 'right'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/2.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: editorial cartoon style, a Swiss Army knife that is comically oversized and bloated, with dozens of useless and confusing gadgets sticking out, such as a tiny video screen, a social media button, and a food delivery icon, on the main blade is written "Payment App", satirical, colorful, cluttered -->
  </div>
  
  <!-- 右侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">病症二: 体验“内卷”</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-video text-2xl text-lime-400 mt-1.5></div>
        <span>支付软件让你刷短视频，地图软件推送信息流。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-application-mobile text-2xl text-lime-400 mt-1.5></div>
        <span>公共服务 APP 设计复杂，商业 APP 广告泛滥。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-hourglass text-2xl text-red-400 mt-1.5></div>
        <span class="font-bold">无休止的功能堆砌，消耗开发者资源和<b class="text-red-400">用户耐心</b>。</span>
      </li>
    </ul>
  </div>
</div>

<!--
第二个病症，是应用的“恶性内卷”。一个支付软件想让你刷短视频；一个地图软件也开始推送信息流。一些公共服务APP本应简单高效，却设计得极其难用。这种无休止的“内卷”，消耗着开发资源，也消耗着我们的耐心。
-->
---
# 病症三：创新生态的失衡
glowOpacity: 0.15
glow: 'left'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">病症三: 创新生态的失衡</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-magnet text-2xl text-yellow-400 mt-1.5></div>
        <span><b class="text-yellow-300">商业模式的“引力”：</b>巨头们热衷于构建封闭生态，而非创造开放的公共价值工具。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-binoculars text-2xl text-yellow-400 mt-1.5></div>
        <span><b class="text-yellow-300">一个尖锐的问题：</b>为什么我们缺少 Flightradar24、Zoom.earth 这样服务于细分领域爱好者的“数据乐园”？</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-flow text-2xl text-red-400 mt-1.5></div>
        <span class="font-bold">结果是<b class="text-red-400">“才智的错配”</b>：顶尖人才涌向“流量”生意，而非解决真实、具体问题的创造。</span>
      </li>
    </ul>
  </div>

  <!-- 右侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/3.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: digital art, a vast, barren desert representing 'Niche & Public Value Tools', with a few small, struggling oases. In the distance, a massive, walled city overflowing with neon signs for 'Social Media' and 'Short Videos' has giant vacuum tubes sucking all the water and resources (representing talent and investment) from the desert. Symbolic, high contrast, cinematic lighting. -->
  </div>
</div>

<!--
第三个病症，我们来谈谈创新生态的失衡。当大公司都在“卷”短视频、“卷”社交功能时，我们不禁要问：为什么那些真正服务于细分领域爱好者、数据透明的网站，比如 Flightradar24 或 Zoom.earth，在我们的环境中却难以诞生？我们的聪明才智，似乎都流向了如何更好地“圈住”用户的流量生意，而不是去创造能服务用户、提供公共价值的工具。
-->

---
# 第二部分：我的畅想：重建数字世界的基础设施
layout: 'section'
glowOpacity: 0.15
---

# **第二部分**
## 我的畅想：重建数字世界的基础设施

---
# 畅想支柱（一）：统一的国家数字身份
glowOpacity: 0.2
glow: 'top'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/4.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: futuristic infographic, a central, glowing digital ID card with a fingerprint icon, from which clean, secure data streams connect to various service icons (bank, hospital, government, utility), everything is orderly and encrypted, minimalist, holographic blue and white on a dark background -->
  </div>

  <!-- 右侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">支柱一: 统一数字身份</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-passport text-2xl text-teal-400 mt-1.5></div>
        <span>国家颁发，<b class="text-teal-300">一人一码</b>，关联官方安全邮箱作为“数据中央存储库”。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-api text-2xl text-teal-400 mt-1.5></div>
        <span>企业通过<b class="text-teal-300">标准安全接口</b>，在用户授权后调用信息，无需重复填写。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-touch-1 text-2xl text-lime-400 mt-1.5></div>
        <span class="font-bold text-lime-300">一次授权，永久方便。</span>
      </li>
    </ul>
  </div>
</div>

<!--
面对这些乱象，我们需要一次彻底的基础重建。第一个支柱：建立统一的国家数字身份体系。每个公民拥有一个由国家颁发的、独一无二的数字身份，它关联着你所有数据的“中央存储库”。任何企业需要你的信息，在获得你授权后进行调用。
-->

---
# 畅想支柱（二）：开放的国家通信协议
glowOpacity: 0.2
glow: 'bottom'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">支柱二: 开放通信协议</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-network-4 text-2xl text-teal-400 mt-1.5></div>
        <span>国家牵头，建立类似<b class="text-teal-300">电子邮件(SMTP)</b>的底层通信标准。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-app-switcher text-2xl text-teal-400 mt-1.5></div>
        <span>任何公司都可开发特色聊天APP，但关系链和聊天记录<b class="text-teal-300">属于用户</b>，可轻松迁移。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-data-unreal text-2xl text-lime-400 mt-1.5></div>
        <span class="font-bold text-lime-300">真正打破壁垒，将数据权利还给用户。</span>
      </li>
    </ul>
  </div>

  <!-- 右侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/5.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: minimalist illustration, a wide, shared river representing the 'Open Protocol', various beautifully designed boats with different brand logos (representing apps) are sailing on it, a person can easily jump from one boat to another, carrying their luggage (data) with them, clean, bright, vector style -->
  </div>
</div>

<!--
第二个支柱：打造开放的国家通信底层协议。我们的聊天和社交不应该被任何一家公司垄断。国家应该牵头，建立一个类似电子邮件协议的底层通信标准。你的联系人关系链和聊天记录都属于你自己，可以轻松地在不同平台间迁移。
-->

---
# 畅想支柱（三）：清晰的软件开发规范
glowOpacity: 0.2
glow: 'left'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">支柱三: 清晰开发规范</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-rule text-2xl text-yellow-400 mt-1.5></div>
        <span>为软件功能设<b class="text-yellow-300">“边界”</b>：限制广告形式、严控权限索取。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-plant text-2xl text-yellow-400 mt-1.5></div>
        <span>大力扶持解决实际问题的<b class="text-yellow-300">“小而美”</b>应用和开源工具。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-money text-2xl text-lime-400 mt-1.5></div>
        <span class="font-bold text-lime-300">鼓励通过优秀插件或高级功能收费，而非广告。</span>
      </li>
    </ul>
  </div>

  <!-- 右侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/6.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: fantasy art, a well-tended magical garden, where many unique, glowing plants of different shapes and sizes ('small & beautiful' apps) grow freely, a gentle gardener (representing regulation) is trimming away thorny, invasive weeds (ads and bloatware), serene, beautiful, golden hour lighting -->
  </div>
</div>

<!--
第三个支柱：制定清晰的软件开发规范。政府应该为软件的功能设定“边界”，限制广告，严格限制APP过度索取权限。同时，大力鼓励和扶持那些解决实际问题的“小而美”的应用。让开发者通过提供优秀的插件或高级功能来收费，而不是通过广告骚扰用户。
-->

---
# 畅想支柱（四）：推广更公平的付费模式
glowOpacity: 0.2
glow: 'right'
---

<div grid="~ cols-2 gap-12" class="w-full h-full items-center">
  <!-- 左侧图片占位符 -->
  <div v-after class="w-full h-80% bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/7.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: 3D illustration, a clean, modern digital vending machine interface, users can select individual items like '1 Song', '10 Mins of Video', '1 Article', and pay with small, glowing tokens, emphasizes precision and fairness, user-friendly, soft pastel colors -->
  </div>
  
  <!-- 右侧文本内容 -->
  <div class="text-slate-300 leading-8">
    <h1 class="!text-4xl text-white mb-6">支柱四: 公平付费模式</h1>
    <ul class="space-y-4">
      <li v-after class="flex items-start gap-3">
        <div i-carbon-shopping-cart-arrow-down text-2xl text-yellow-400 mt-1.5></div>
        <span>告别“懒政”的包月会员，鼓励<b class="text-yellow-300">按次、按量</b>付费。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-chip text-2xl text-yellow-400 mt-1.5></div>
        <span>借鉴 AI 的 Token 计费模式：看一分钟视频、听一首歌，付相应的费用。</span>
      </li>
      <li v-after class="flex items-start gap-3">
        <div i-carbon-scale text-2xl text-lime-400 mt-1.5></div>
        <span class="font-bold text-lime-300">对用户更公平，激励平台提供更高质量的内容。</span>
      </li>
    </ul>
  </div>
</div>

<!--
第四个支柱：推广更公平、更精细化的付费模式。我一个月可能只听几首歌，却要支付整个月的会员费。我们应该鼓励按次、按量付费。就像现在AI的Token计费一样，“用了才付钱”。这不仅对用户更公平，也能激励平台提供更高质量的内容。
-->

---
# 结语：铺好“数字高速公路”
glowOpacity: 0.25
glow: 'center'
---

<div class="w-full h-full flex flex-col items-center justify-center text-center">
  <p v-click class="text-slate-300 text-2xl">
    这不是限制，而是通过建立<b class="text-teal-300">坚实、公平的基础设施</b>，
  </p>
  <p v-click class="text-white text-4xl mt-6">
    来释放更大的<b class="text-lime-300">创新自由</b>。
  </p>
  <div v-click class="w-2/3 h-60% mt-8 bg-slate-500/10 rounded-lg flex items-center justify-center border border-slate-500/30">
    <img class="rounded-lg w-full h-full" src="/demo/8.jpg">
    <!-- <div i-carbon-image-search text-4xl op30></div> -->
    <!-- IMAGE PROMPT: epic wide shot, a vast, clean, glowing digital highway at night representing a solid infrastructure, on which thousands of unique, creative, and diverse vehicles (apps) are driving smoothly and fast, symbolizing unleashed innovation, futuristic, cinematic, blue and orange tones -->
  </div>
  <p v-click class="mt-8 text-slate-300 text-xl">
    让我们停止内耗，去建设那个真正属于我们每一个人的、开放、高效、且充满创造力的数字世界。
  </p>
</div>

<!--
朋友们，我今天所描绘的，是一个通过建立坚实、公平的基础设施，来释放更大创新自由的未来。当国家铺好了“数字高速公路”，无数的企业和开发者才能在这条路上，安心地制造出各式各样优秀的“汽车”，而不是把所有精力都耗费在造路、堵路和设置收费站上。
-->

---
# 谢谢大家
layout: 'cover'
class: 'text-center'
glowOpacity: 0.2
glowSeed: 'digital-future-thanks'
---

# 谢谢大家

<div class="text-2xl text-slate-300">
  Q & A
</div>