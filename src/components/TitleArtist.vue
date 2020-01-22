<template>
  <div class="sc-player__artist">
    <a
      :href="artistUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ artist }}
    </a>
  </div>
</template>

<script>
export default {
  name: "TitleArtist",
  props: {
    artist: {
      type: String,
      default: ''
    },
    artistUrl: {
      type: String,
      default: ''
    }
  }
};
</script>