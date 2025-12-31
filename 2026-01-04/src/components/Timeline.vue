<script setup lang="ts">
import { DataSet, Timeline } from 'vis-timeline/standalone'
import { onMounted, ref, watch } from 'vue'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  const start = '2024-01-01'
  const end = '2025-01-30'
  const groups = new DataSet([
    { id: 1, content: '《培训空间》' },
    { id: 2, content: '《华泰项目作业填报》' },
    { id: 3, content: '《兴中考勤/环保》' },
    { id: 4, content: '《VQC》' },
    { id: 5, content: '《取证小助手》' },
    { id: 6, content: '《上海亿升三期》' },
    { id: 7, content: '《中安惟新门户网站》' },
    { id: 8, content: '《油品储运》' },
    { id: 9, content: '《教育培训平台》' },
    { id: 10, content: '《中化东方无人泵房》' },
    { id: 11, content: '《应急救援员》' },
    { id: 12, content: '《海上清舱作业系统》' },
    { id: 13, content: '《光汇大屏》' },
    { id: 14, content: '《波士特》' },
    { id: 15, content: '《受限空间》' },
    { id: 16, content: '《青岛港》' },

  ])
  let id = 0
  const items = new DataSet([
    {
      id: id++,
      content: '《培训空间》3月完成，6月迁移，HW，后续迭代运维，v1.4.5',
      group: 1,
      start,
      end,
      type: 'range',
      className: 'text-center rounded-lg! bg-sky:20! text-sky! border-sky:50!',
    },
    {
      id: id++,
      content: '《华泰项目作业填报》1-4月开发',
      group: 2,
      start: start,
      end: '2024-04-01',
      type: 'range',
      className: 'text-center rounded-lg! bg-purple:20! text-purple! border-purple:50!',
    },
    {
      id: id++,
      content: '《兴中考勤/环保》1-7月开发',
      group: 3,
      start: start,
      end: '2024-07-01',
      type: 'range',
      className: 'px2 rounded-lg! bg-sky:20! text-sky! border-sky:50!',
    },
    {
      id: id++,
      content: '《VQC》门户网站 v2.2.0',
      group: 4,
      start: '2024-03-01',
      className: 'px2 rounded-lg! bg-sky:20! text-sky! border-sky:50!',
    },
    {
      id: id++,
      content: '《VQC》付费企业专属 v2.3.0',
      group: 4,
      start: '2024-07-01',
      className: 'px2 rounded-lg! bg-sky:20! text-sky! border-sky:50!',
    },
    {
      id: id++,
      content: '《VQC》航运专属 v3.0.0',
      group: 4,
      start: '2024-10-01',
      end: '2024-12-01',
      type: 'range',
      className: 'px2 rounded-lg! bg-sky:20! text-sky! border-sky:50!',
    },
    {
      id: id++,
      content: '《取证小助手》迁移与HW',
      group: 5,
      start: '2024-06-01',
      className: 'px2 rounded-lg! bg-orange:20! text-orange! border-orange:50!',
    },
    {
      id: id++,
      content: '人员定位地图第三期重构（停摆）',
      group: 6,
      start: '2024-06-01',
      className: 'px2 rounded-l-lg! bg-red:20! text-red! border-red:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '开发与部署 v1.0.0',
      group: 7,
      start: '2024-05-01',
      className: 'px2 rounded-r-lg! bg-blue:20! text-blue! border-blue:50!',
    },
    {
      id: id++,
      content: '升级数据库架构 v1.2.0',
      group: 7,
      start: '2024-12-01',
      className: 'px2 rounded-r-lg! bg-blue:20! text-blue! border-blue:50!',
    },
    {
      id: id++,
      content: '《油品储运》运维与HW维护',
      group: 8,
      start: '2024-06-01',
      className: 'px2 rounded-l-lg! bg-sky:20! text-sky! border-sky:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《教育培训/中烟》开发',
      group: 9,
      start: '2024-07-01',
      end: '2024-09-01',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《教育培训/三棵树》开发',
      group: 9,
      start: '2024-07-01',
      end: '2024-09-01',
      type: 'range',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《教育培训/中远海运》开发',
      group: 9,
      start: '2024-09-01',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《教育培训/河南骏化》开发',
      group: 9,
      start: '2024-09-01',
      end,
      type: 'range',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《教育培训/鼎实大榭》开发',
      group: 9,
      start: '2024-12-01',
      end,
      type: 'range',
      className: 'px2 rounded-l-lg! bg-purple:20! text-purple! border-purple:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《中化东方》开发/视频/测试 v1.0.0',
      group: 10,
      start: '2024-08-01',
      className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《中化东方》到场部署 v1.5.1',
      group: 10,
      start: '2024-11-18',
      className: 'px2 rounded-l-lg! bg-blue:20! text-blue! border-blue:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《应急救援员》（停摆）',
      group: 11,
      start: '2024-09-01',
      className: 'px2 rounded-l-lg! bg-red:20! text-red! border-red:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《海上清舱作业系统》0.6.0',
      group: 12,
      start: '2024-09-01',
      end,
      className: 'px2 rounded-l-lg! bg-sky:20! text-sky! border-sky:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《光汇大屏》静态开发（临时）',
      group: 13,
      start: '2024-09-01',
      className: 'px2 rounded-l-lg! bg-red:20! text-red! border-red:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《波士特风险四色图》v1.0.0',
      group: 14,
      start: '2024-11-01',
      className: 'px2 rounded-l-lg! bg-sky:20! text-sky! border-sky:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《受限空间》',
      group: 15,
      start: '2024-11-01',
      end,
      type: 'range',
      className: 'px2 rounded-l-lg! bg-green:20! text-green! border-green:50! border-dashed! border-r-none!',
    },
    {
      id: id++,
      content: '《青岛港大屏》',
      group: 16,
      start: '2024-12-01',
      end,
      type: 'range',
      className: 'px2 rounded-l-lg! bg-green:20! text-green! border-green:50! border-dashed! border-r-none!',
    },
  ])

  // Create a Timeline
  const timeline = new Timeline(el.value, null, {
    stack: true,
    height: 1080,
    width: 1920,
    horizontalScroll: false,
    verticalScroll: false,
    zoomable: false,
    moveable: false,
    margin: {
      item: {
        horizontal: 0,
      },
    },
    locale: 'en_US',
  })
  timeline.setGroups(groups)
  timeline.setItems(items)

  timeline.redraw()
  // @ts-expect-error missing type
  watch([$clicks, $page], () => {
    timeline.redraw()
  })
})
</script>

<template>
  <div mb-3 flex="~ col">
    <div scale-50 origin-left-top relative>
      <div ref="el" absolute h-920px w-1700px/>
    </div>
  </div>
</template>

<style>
.vis-timeline {
  border: 0 !important;
}

.vis-labelset .vis-label,
.vis-time-axis .vis-text {
  color: inherit;
  opacity: 0.8;
}

</style>
