<template>
  <div
    class="sc-player__wave"
    :style="progressWidth"
  />
</template>

<script>
export default {
  name: "Wave",
  props: {
    percentPlayed: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressWidth() {
      return `width: ${this.percentPlayed}%`;
    }
  }
};
</script>