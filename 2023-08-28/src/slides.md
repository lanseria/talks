---
layout: cover
highlighter: shiki
css: unocss
lineNumbers: true
colorSchema: dark
title: 卫星云图资源下载
---

# 卫星云图资源下载

<p text-xl>
Download satellite cloud image resources
</p>

<div uppercase text-sm tracking-widest>
UP主 爱吃包子的超
</div>

<!--
今天，主要分享一下。如果你需要查看或下载卫星云图，有哪些方式，我这里只介绍我所了解的
-->

---

# 什么卫星云图

1. 卫星云图是由卫星拍摄的地球大气层中云的图像。它们显示了地球表面上云的位置、形状、大小和云层的运动情况。卫星云图通过使用不同的传感器和仪器来捕捉可见光、红外线和微波等不同波长的辐射，以获取不同的云图信息。

2. 卫星云图对于天气预报和气候研究非常重要。它们提供了全球范围内云的覆盖情况，帮助气象学家观察和分析云的变化，以预测天气系统的发展和演变。卫星云图还可以用于监测气候模式、研究气候变化以及观察大气环流等。

3. 卫星云图通常以彩色图像的形式呈现，其中不同颜色代表不同类型和厚度的云。云图还可以显示云的高度、云顶温度和云底温度等相关信息。这些图像通过卫星传输到地面站点，然后由气象机构和研究人员进行解读和分析，以提供准确的天气预报和气候信息。

<!--
首先快速了解一下什么是卫星云图，就是你地上看到的云在卫星眼里是长什么样子的。常用来看台风这类非常壮观的云系
-->

---

# 常见的获取卫星云图的方式

从简单到困难排序

- 各视频UP主，天气预报中看到
- 通过网站获取提供
- 通过程序或者FTP获取服务器贴图信息
- 直接从卫星上获取数据

<!--
获取云图的方式也有从难到易的，比如看天气预报这类被动获取卫星云图的方式。再到主动浏览网站，如Windy等。再到一些卫星云图提供ftp服务，供大众下载。最后高玩就直接拿着无线电，从卫星里获取广播信号了。后面两种我今天就不讲了，我也不会，如果有网友知道或者其他获取方式可以在评论区留言
-->

---

# 我要介绍的获取方式


今天我们主要讲讲普通人能获取下载的网站，以及通过程序获取更高阶的云图数据。

普通的天气气象爱好者呢，比如我，可以看看

- Windy
- Earch NullSchool
- 国内各家台风网与国家卫星气象中心
- RAMMB/CIRA SLIDER，
- 各国气象机构，日本向日葵8等

<!--
我这里主要讲讲Windy，等比较容易获取的网上方式。还有。。。
-->

---
layout: image-right
image: /zoom.jpg
---

# Zoom Earth

- 网址 https://zoom.earth/
- 提供了高分辨率的卫星云图/向日葵/美国宇航局
- 台风/热带低压编号/雷达/降雨/风速/温度/湿度/气压
- 提供了移动端以及台风预报
- 动画简洁美观


---
layout: iframe-right
url: https://embed.windy.com/embed2.html?lat=29.800&lon=121.740&detailLat=29.800&detailLon=121.740&width=650&height=450&zoom=8&level=surface&overlay=rain&product=gfs&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1
---

# Windy

- 网址 https://www.windy.com/
- 提供了高分辨率的卫星云图
- 风场/降雨/温度/低层云/中层云/高层云等
- 提供了移动端以及预报

---
layout: iframe-right
url: https://earth.nullschool.net/zh-cn/#current/wind/surface/level/orthographic=-225.31,15.30,588
---
# Earth NullSchool

- 网址 https://earth.nullschool.net/
- 提供全球风、海洋和气候数据的在线平台
- 提供了跨度非常大的时间轴功能

---
layout: iframe-right
url: https://typhoon.slt.zj.gov.cn/
---

# 中国台风网

- 网址 https://typhoon.slt.zj.gov.cn/
- 中文的台风名称
- 详细的台风路径记录
- api接口可以获取

---
layout: image-right
image: /rsapp.jpg
---

# 中国卫星气象中心

- 网址 http://rsapp.nsmc.org.cn/
- 中文的数据描述/专属中国区
- 风云四号A星云图

---
layout: image-right
image: /rammb.png
---

# R站 RAMMB/CIRA SLIDER

- 网址 https://rammb-slider.cira.colostate.edu/
- 科罗拉多州立大学大气研究合作研究所
- 韩国/日本/美国2颗/欧洲2颗
- 极地拼接

---
layout: image-right
image: /japan.png
---

# 日本向日葵8

- 网址 https://himawari8.nict.go.jp/
- 即时性强/可以在Zoom Earth看到
- 对目标台风有特殊标注
- 每天都有视频在线下载与查看

---
layout: quote
---
# 有更加专业的需求

- 高清的云图获取
- 制作媒体视频
- 等等

---
layout: section
---

# 获取原始数据，转为视频资源

源代码 https://jihulab.com/data1355712/pangu-data

---
layout: cover

---
# 下期再见
