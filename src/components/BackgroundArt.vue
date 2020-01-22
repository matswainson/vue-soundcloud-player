<template>
  <div
    class="sc-player__background"
    :style="backgroundImage"
  />
</template>

<script>
export default {
  name: "BackgroundArt",
  props: {
    background: {
      type: String,
      default: ""
    }
  },
  computed: {
    backgroundImage() {
      return `background-image: url(${this.background})`;
    }
  }
};
</script>
