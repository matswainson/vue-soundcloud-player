<template>
  <iframe
    ref="iframe"
    allow="autoplay"
    frameBorder="no"
    height="450"
    scrolling="no"
    :src="playerUrl"
    title="Soundcloud"
    width="100%"
  />
</template>

<script>
export default {
  name: "Iframe",
  props: {
    track: {
      type: String,
      default: undefined
    },
    playlist: {
      type: String,
      default: undefined
    }
  },
  computed: {
    playerUrl() {
      if (this.playlist) {
        return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${this.playlist}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
      } else {
        return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.track}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
      }
    }
  },
  mounted() {
    const iframeRef = this.$refs['iframe'];
    this.$emit('setIframeRef', iframeRef);
  }
};
</script>
