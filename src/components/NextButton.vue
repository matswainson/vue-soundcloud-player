<template>
  <button
    class="sc-player__next"
    type="button"
    @click="nextTrack"
  />
</template>

<script>
export default {
  name: "NextButton",
  props: {
    setCurrentTrack: {
      type: Function,
      default: undefined
    },
    soundcloud: {
      type: Object,
      default: undefined
    },
    sounds: {
      type: Array,
      default: () => {
        return [];
      }
    },
    trackIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    nextTrack() {
      this.soundcloud.isPaused(function(paused) {
        if (paused) {
          this.soundcloud.next().pause();
        } else {
          this.soundcloud.next();
        }
      });
      this.setCurrentTrack(
        this.sounds[this.trackIndex + 1],
        this.trackIndex + 1
      );
    }
  }
};
</script>
