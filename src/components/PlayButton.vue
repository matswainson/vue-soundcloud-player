<template>
  <button
    :class="buttonClasses"
    type="button"
    @click="playPause"
  />
</template>

<script>
import classnames from 'classnames';

export default {
  name: "PlayButton",
  props: {
    soundcloud: {
      type: Object,
      default: undefined
    },
    trackPlaying: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return classnames('sc-player__play', {'sc-player--pause': this.trackPlaying});
    }
  },
  methods: {
    playPause() {
      this.soundcloud.isPaused((paused) => {
        if (paused) {
          this.soundcloud.play();
        } else {
          this.soundcloud.pause();
        }
      });
    }
  }
};
</script>