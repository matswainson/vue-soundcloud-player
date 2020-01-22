<template>
  <div class="sc-player__title">
    <a
      :href="permalink"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "TitleTrack",
  props: {
    permalink: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>