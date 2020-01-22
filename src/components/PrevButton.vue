<template>
  <button
    class="sc-player__prev"
    type="button"
    @click="prevTrack"
  />
</template>

<script>
export default {
  name: "PrevButton",
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
    prevTrack() {
      this.soundcloud.isPaused(function(paused) {
        if (paused) {
          this.soundcloud.prev().pause();
        } else {
          this.soundcloud.prev();
        }
      });
      this.setCurrentTrack(
        this.sounds[this.trackIndex - 1],
        this.trackIndex - 1
      );
    }
  }
};
</script>