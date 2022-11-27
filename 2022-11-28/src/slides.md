---
layout: cover
highlighter: shiki
css: unocss
lineNumbers: true
colorSchema: dark
title: 虚拟现实与数字孪生
---

# 虚拟现实与数字孪生

<p text-xl>
Virtual Reality and Digital Twins.
</p>

<div uppercase text-sm tracking-widest>
前端工程师 张超
</div>

<div abs-bl mx-14 my-12 flex>
  <img src="/fes-logo.svg" />
  <div ml-3 flex flex-col text-left>
    <div>中安大讲堂 2022</div>
    <div text-sm opacity-50>11/28 2022</div>
  </div>
</div>

<!--
今天由我来讲一下《虚拟现实与数字孪生》有关的知识分享还有与我们公司的一些项目结合，产生的一些想法
-->

---
src: '../../reuse/intro.md'
---

---
layout: intro
---

# 什么是虚拟现实？

<!--
那很多人其实已经知道了虚拟现实，英文就叫VR，Virtual Reality。VR眼镜，VR设备特别是在游戏领域。但不看表面看本质，它其实就是一块戴在眼镜上的显示器。显示器上呈现出3D内容，让你近似感觉在虚拟的现实世界一样。
-->

---
layout: image
image: >-
  https://img.js.design/assets/img/637cd9498f66b414f2ed2564.png#1f8637af5f05f393dbff2c12be2f0cdb
---



<!--
就像以前windows的3D迷宫屏幕保护程序
-->

---
layout: image
image: >-
  https://img.js.design/assets/img/637cd978234a79bb071b0d1c.png#dc8f881e016443cc653e4273571de242
---



<!--
3D的FPS游戏，都是在2D屏幕上模拟3D的效果，这种演进很好的说明了我们有这样的需求，希望画出来的世界更加逼近真实世界
-->

---
layout: image
image: >-
  https://img.js.design/assets/img/637cd9b2e84aeeab1bf7dc92.png#c36e1b0ac10874ee20640bc3b53a45f5
---



<!--
同时我也相信，未来也会有类似《头号玩家》电影中的虚拟设备的出现。这都反映了信息的传递正在一步步的变化与变革
-->

---
layout: center
---

# 人类信息传递方式的演进 

- 远古时代，人类基于最原始的需求，
利用自然界的基本规律和人的基础感官可达性建立通信系统，
那个时候的通信基本靠吼。

<br/>

- 到了古代，随着疆域不断扩张，
人们用点燃烽火的方式，传递军事信息。
人们还设立驿站，骑马送文书。
此外，竹简、钟鼓、图符等也是当时常用的通信方式。

<br/>

- 近现代，引入电磁技术之后，人们尝试使用电话、
电报、无线电通信、模拟通信等。在20世纪90年代之前，
电话接线员是女孩儿的时髦职业。

<br/>

- 到了现代，5G已经全面展开商用，VR，AR，MR，XR，数字孪生，数字人，元宇宙...

<!--
从最初的声音，到文字，到通过电磁技术来更远的传播信息的载体，比如文字，图片，声音，到现在的视频。5G，6G等通信技术的发展，势必带来VR等一些新新技术的扩散与迭代。除了VR，也介绍一下其他正在推进的显示技术
-->

---
layout: quote
---

# 虚拟现实VR
遮挡视线以呈现全沉浸式数字体验的体验是“虚拟现实”。 

---
layout: image
image: >-
  https://img.alicdn.com/imgextra/i4/2207690525542/O1CN01y0ZBv01qoHnBKKugv_!!2207690525542.jpg
---



<!--
看世界杯
-->

---
layout: quote
---

# 增强现实AR
在物理世界中叠加图形、视频流或全息影像的体验称为“增强现实” 

---
layout: image

image: https://aws-obg-image-lb-2.tcl.com/content/dam/brandsite/region/china/leiniao/ar/content-3.png
---


---
layout: quote
---

# 混合现实MR
在增强现实和虚拟现实之间转换的体验形成了混合现实


---
layout: image
image: >-
  https://cdn.microsoftstore.com.cn/media/catalog/product/cache/7abce94ad89cfb8ca19b9f2425335e01/b/u/buybox_banner_0_pc_2.jpg
---



<!--
微软的MR眼镜，有了交互感
-->

---
layout: quote
---

# 扩展现实XR
人类交互方式的终极形态

---
layout: image

image: https://pica.zhimg.com/v2-ac50bb8669661be79dba37e6e12bef76_r.jpg?source=172ae18b
---

---
layout: two-cols

---

<div>
<img class="w-316px" src="https://img.js.design/assets/img/638187794d2016ae9666a716.png#a4524e96b8ad3c5fda77df3af439c5e5"/>
</div>
<br/>
<div>
<img class="w-316px" src="https://img.js.design/assets/img/63818b075bcbfa4c6077ac93.png#babf418861cbee0a7f95a391b55c062d"/>
</div>


::right::

# 边缘世界 The Peripheral

诺兰夫妇为亚马逊打造的科幻剧《边缘世界》

大致讲述在未来的美国，科技逐渐改变着社会，而一位名叫弗琳·费舍（科洛·莫瑞兹 饰）的年轻女子发现了一台可以进入另一个现实世界的设备，并探索属于自己的黑暗未来。

<iframe class="w-416px h-250px" src="//player.bilibili.com/player.html?aid=732366128&bvid=BV1qD4y1t7Dx&cid=884404720&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

---
layout: intro
---

# VR与公司项目的结合

---
layout: center
---

<div class="flex flex-col items-center">
<img class="h-150px" src="https://img.js.design/assets/img/63819f835bcbfa4c607a9ba2.jpg#277177bb02515ca093cf97a270d8c4b7" />

<h1 class="mt-40px">岙山学苑取证小助手</h1>
</div>

---
layout: quote
---

# 岙山学苑取证小助手（在线教育）

<div class="grid w-full grid-cols-5 gap-2">
<img src="https://img.js.design/assets/img/6381dbe64d2016ae967be16a.jpeg#ed1c73785ecddb669c4346ffcbae6b52" />
<img src="https://img.js.design/assets/img/6381dbeb70139645b6c74afc.jpeg#ae330fc23426aaec61ee08298dfac4a3" />
<img src="https://img.js.design/assets/img/6381dbef4d2016ae967be3c6.jpeg#1c5d2a24fb9c6ce6392d984da4fb5894" />
<img src="https://img.js.design/assets/img/6381dbf511e0c9e57e4b5a94.jpeg#1aaf1585f8eb39e2abe21b9a9316e5e3" />
<img src="https://img.js.design/assets/img/6381dc0d4d2016ae967beb22.jpeg#eac91d736501b0a1915180b3c72785fd" />
</div>

<!--
报名，学习，上课，练习，考试，就像大部分在线教育app一样，但取证最重要的环节，实践，在真实环境下操作的环境并没有，现在目前只有线下的练习与操作
-->

---
layout: quote
---

# 使用VR设备进行真实现场模拟

<div class="grid grid-cols-2 gap-10">
<img class="h-200px" src="https://img.js.design/assets/img/637f6a77e72d9870541110ed.png#eb28aa37f619541c0f39ae997d97fedc"/>
<img class="h-200px" src="https://img.js.design/assets/img/637f6af932fd15d93da7a7c0.png#73275a5e04ddbee4fdd41e6f1e803042"/>
</div>

<!--
如果将VR技术带入其中，学员可以戴着设备，真实的体验每一项操作，我认为体验感会提高不少
-->

---
layout: quote
---

# 政策导向
网络培训平台宜支持与虚拟现实等新技术进行交互。

<div class="grid grid-cols-2 gap-10">

<div>
<h4>[2022/11/1]五部门印发虚拟现实与行业应用融合发展行动计划：到 2026 年三维化等关键技术重点突破</h4>
<p>
到 2026 年，三维化、虚实融合沉浸影音关键技术重点突破，新一代适人化虚拟现实终端产品不断丰富，产业生态进一步完善，虚拟现实在经济社会重要行业领域实现规模化应用，形成若干具有较强国际竞争力的骨干企业和产业集群，打造技术、产品、服务和应用共同繁荣的产业发展格局。
</p>
</div>
<img class="h-200px" src="https://img.js.design/assets/img/6381de925663cae5a80c30a0.png#556522a8d410a88d85e3581975dfc264"/>
</div>

<!--
其实这次评选中也提出，“宜支持与虚拟现实等新技术进行交互”，加上政策导向，也佐证了这一点，国家也是在支持与努力推荐虚拟技术在工业上的发展
-->

---
layout: intro
---

# 什么是数字孪生？

<!--
刚刚的虚拟技术与现在讲的数字孪生其实都与3D技术离不开关系
-->

---
layout: two-cols
---

<div class="h-full flex items-center">
<img class="w-416px" src="https://img.js.design/assets/img/637e2e3ce72d987054b54e98.png#fc492314381feaabe609c95e3d83f638"/>
</div>

::right::


<div class="h-full flex items-center">
<p>
互联网的下一次演化称为元宇宙，将借由 3D 技术实现扩展

黄仁勋
</p>
</div>



---
layout: two-cols
---

<div class="h-full flex items-center">
<img class="w-416px" src="https://img.js.design/assets/img/637e2e8d0fb5d48ccc5e6c3a.png#9314e3f9a2974239ece6a38ac1353657"/>
</div>

::right::


<div class="h-full flex items-center">
<p>
当下，互联网通过 HTML 描述的网站，使用户可以通过浏览器进行查看
</p>
</div>


---
layout: two-cols
---

<div class="h-full flex items-center">
<img class="w-416px" src="https://img.js.design/assets/img/637e2ebb0fb5d48ccc5e7616.png#94942584fe42d55a8363dbe3c4cf1f66"/>
</div>

::right::

<div class="h-full flex items-center">
<p>
元宇宙(即3D互联网)连接了以 USD 描述的虚拟 3D 世界，用户可以通过模拟引擎进行查看
</p>
</div>

---
layout: center
---

# VR 更进一步，从3D转变为物理模拟即数字孪生

- 数字孪生是一种旨在精确反映物理对象的虚拟模型。 

- 会给研究对象（例如，风力涡轮机）配备与重要功能方面相关的各种传感器。 

- 这些传感器产生与物理对象性能各个方面有关的数据，例如，能量输出、温度和天气条件等等。 然后将这些数据转发至处理系统并应用于数字副本。 

- 现实中多次模拟测试才能在现实中敢于部署的设备，现在在数字世界即可1:1还原所有特性，模拟尽可能的情况。达到更高的容错能力

---
layout: cover
---

# 数字孪生具体能做哪些呢？

---
layout: quote
---

#  自动驾驶模拟器

- 英伟达(由 Omniverse 驱动的 NVIDIA DRIVE Sim)
- 特斯拉(FSD Simlation)

---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>NVIDIA DRIVE Sim</h1>

<img class="h-220px w-350px" src="https://img.js.design/assets/img/63819f0f03815fcbf719e372.jpg#7a1d39ae863140367dd0116089f8e48a"/>

</div>

::right::

<div class="h-full flex items-center">
<p>
自动驾驶汽车是我们这个时代最复杂的工程挑战之一，对工具和开发团队的要求非常高。在现实世界中我们无法安全和彻底地对自动驾驶汽车进行测试，面对这一痛点，NVIDIA DRIVE Sim™ 构建了一个物理属性准确的仿真平台，能够快速、高效地进行大规模的自动驾驶汽车测试和验证。
</p>
</div>

---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>FSD Simlation</h1>

<img class="h-220px w-350px" src="https://img.js.design/assets/img/63819f45a34f137822583c5e.png#823dff7fdc51f3d1067ab98c3ceac34"/>

</div>

::right::

<div class="h-full flex items-center">
<p>
驾驶模拟器，场景的绘制需要大量的人力参与通过标签还原现实中十字路口坡度等细节，
<br/>
详细的地面材质然后绘制车道线，中间的岛屿与周边的街道还有写上物体的阴影然后是红绿灯。
<br/>
安排上车辆，车流的统计程度。模拟可以随时改变，比如车道线方向等等模拟不同的天气情况
</p>
</div>


---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>创作与设计流程中的优化</h1>
<br/>
<p>
在不同团队、企业组织地区工作的专业设计师、
艺术家和工程师会采用许多专业的工具<br/>
来传递工作事项存储不同的数据格式例如：建模，绑定，动画，模拟
</p>

</div>

::right::

<div class="h-full flex items-center justify-end">
<img class="h-220px w-320px" src="https://img.js.design/assets/img/637e30230fb5d48ccc5ec44b.png#4594359e455963939b627381d3875b24"/>

</div>

---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>生产制作中测试</h1>
<br/>
<p>
通用公司生产设计制造车辆的同时可以同时与设计师，工程师，营销人员开展协作
</p>

</div>

::right::

<div class="h-full flex items-center justify-end">
<img class="h-220px w-320px" src="https://img.js.design/assets/img/637e3088de472253fc50ba06.png#2c5a1baf527c8c4fae69281a2c44fd52"/>

</div>



---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>信号塔的布局</h1>
<br/>
<p>
利用雷达扫描，卫星图像，建筑物，树木和周围环境以及其射频传播模型，可以实时模拟无线电网络的性能
</p>

</div>

::right::

<div class="h-full flex items-center justify-end">
<img class="h-220px w-320px" src="https://img.js.design/assets/img/637e30e5c21951f3cdad157a.png#233492f17221825effd7837f2feb9fd6"/>

</div>


---
layout: two-cols
---


<div class="h-full flex justify-center flex-col">

<h1>未来，所有的产品都将具有数字孪生</h1>
<br/>
<p>
制造商利用数字孪生模拟产品在物理世界中的作用和性能不对软件的数字孪生版本进行测试，则无法大规模部署
</p>

</div>

::right::

<div class="h-full flex items-center justify-end">
<img class="h-220px w-320px" src="https://img.js.design/assets/img/637e30d232fd15d93d50a33f.png#a09f855a22b71ae2342b845ee8969ad5"/>

</div>

---
layout: intro
---

# VR/数字孪生与公司项目的结合

---
layout: center
---

<div class="flex flex-col items-center">
<img class="h-150px" src="https://img.js.design/assets/img/6381dc55a34f1378226a63fb.png#b0662191cdf2a06712d3236a40268126" />

<h1 class="mt-40px">易目视</h1>
</div>

---
layout: quote
---

# 易目视（大屏地图应用）

<div class="grid grid-cols-4">
<div>
目前
<ul>
<li>GIS项目</li>
<li>可视化项目</li>
<li>预备警情方案</li>
</ul>
</div>

<div>
视觉方案
<ul>
<li>大字体</li>
<li>词云</li>
<li>Gis地图</li>
<li>图表</li>
</ul>
</div>

<div>
地图应用
<ul>
<li>影像</li>
<li>DEM</li>
<li>BIM</li>
<li>CIM</li>
</ul>
</div>

<div>
<h3>影像</h3>
<p>
各家地图，高德、百度、腾讯、天地图、谷歌、必应，都提供影像地图。
</p>
<h3>坐标系</h3>
<p>
WGS84 GCJ02 BD09 等等
</p>
</div>

<div>
</div>
</div>

---
layout: quote
---

# 结合虚拟现实与数字孪生

1. 灾情发生提前感知
2. 模拟物理天气系统演练，使模拟场景更加实际
3. 人员使用 VR 演练，更能提出建议修改方案

---
layout: quote
---

# 结合虚拟现实与数字孪生

<div class="grid grid-cols-2">
<img class="w-400px h-200px" src="https://ccdn.goodq.top/caches/49ba5ac80d26c3c8efc2aad117e60f70/aHR0cHM6Ly93d3cuY2hhbmdoZXZyLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjIvMDkvZTRiODAwYzFiOGJiNGE2MWYxMDA5ODMzY2RkOGQyMTktMzAweDIwMC5qcGc_p_p100_p_3D.jpg"/>
<img class="w-400px h-200px" src="https://ccdn.goodq.top/caches/49ba5ac80d26c3c8efc2aad117e60f70/aHR0cHM6Ly93d3cuY2hhbmdoZXZyLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMjIvMDkvMzA3OWFmMzIzNWJmOWM4ODQ4M2VlNmNlNzE2YjdmMzktMzAweDIwMC5wbmc_p_p100_p_3D.png"/>
<img class="w-400px h-200px" src="https://pic2.zhimg.com/80/v2-39f4dd1a3960bb37dd652abe146638a1_720w.webp"/>
<img class="w-400px h-200px" src="https://pic4.zhimg.com/80/v2-31c4de98fc1567b43292cab2bb60774b_720w.webp"/>
</div>

---
layout: statement
---

# 建议


---
layout: statement
---

# 建模师/地图测绘师


---
layout: statement
---

# 建立模型库/地图库影像

---
layout: statement
---

# 游戏引擎

---
layout: statement
---

# Q&A

---
layout: statement
---

# Q&A

---
layout: statement
---

# 1. 你觉得未来的显示方式有哪些？

---
layout: section
---

VR,AR,MR,XR,等等

---
layout: statement
---

# 2. GIS影像目前有哪几家？

---
layout: section
---

百度,必应,天地图,谷歌,高德等等

---
layout: statement
---

# 3. 常用的 GIS 坐标系有哪几种？

---
layout: section
---

WSG84,GCJ02,BD09等等

---
layout: statement
---

# 4. 数字孪生有哪些应用？

---
layout: section
---

信号基站选址,机器人调试,管道建设,自动驾驶模拟训练等等
