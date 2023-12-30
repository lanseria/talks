<!--
Usage:
<vtt width=500 height=400 vSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" vttSrc="/video/my.vtt" controls  />
-->

<script setup lang="ts">
const props = defineProps({
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  vSrc: {
    type: String,
  },
  vttSrc: {
    type: String,
  },
  vttLabel: {
    type: String,
    default: "English"
  },
  vttSrclang: {
    type: String,
    default: "en-us"
  },
  autoplay: {
    type: Boolean,
  },
  controls: {
    type: Boolean,
  },
  mediaType: {
    type: String,
    default: "video/mp4"
  }
})
</script>

<template>
  <video :width="width" :height="height" :controls.sync="controls" :autoplay.sync="autoplay">
    <source :src="vSrc" :type="mediaType">
    <track :src="vttSrc" kind="captions" :srclang="vttSrclang" :label="vttLabel" default v-if="vttSrc">
  </video>
</template>

<style scoped>
video::cue(.big) {
  font-size: 3rem;
}
video::cue(.bigEx) {
  font-size: 6rem;
}
video::cue(.small) {
  font-size: 1rem;
}
video::cue(.smallEx) {
  font-size: 0.5rem;
}
video::cue(.yellow) {
  color: yellow;
}
video::cue(.bg_yellow) {
  background-color: yellow;
}
video::cue(.cyan) {
  color: cyan;
}
video::cue(.bg_cyan) {
  background-color: cyan;
}
video::cue(.red) {
  color: red;
}
video::cue(.bg_red) {
  background-color: red;
}
video::cue(.lime) {
  color: lime;
}
video::cue(.bg_lime) {
  background-color: lime;
}
video::cue(.magenta) {
  color: magenta;
}
video::cue(.bg_magenta) {
  background-color: magenta;
}
video::cue(.white) {
  color: white;
}
video::cue(.bg_white) {
  background-color: white;
}
video::cue(.blue) {
  color: blue;
}
video::cue(.bg_blue) {
  background-color: blue;
}
video::cue(.black) {
  color: black;
}
video::cue(.bg_black) {
  background-color: black;
}
</style>
