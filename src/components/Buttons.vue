<template>
  <div class="sc-player__buttons">
    <PrevButton
      v-if="hasPlaylist && trackIndex !== 0"
      :set-current-track="setCurrentTrack"
      :soundcloud="soundcloud"
      :sounds="sounds"
      :track-index="trackIndex"
    />
    <PlayButton
      :soundcloud="soundcloud"
      :track-playing="trackPlaying"
    />
    <NextButton
      v-if="hasPlaylist && trackIndex !== sounds.length-1"
      :set-current-track="setCurrentTrack"
      :soundcloud="soundcloud"
      :sounds="sounds"
      :track-index="trackIndex"
    />
  </div>
</template>

<script>
import NextButton from './NextButton.vue';
import PlayButton from './PlayButton.vue';
import PrevButton from './PrevButton.vue';

export default {
  name: "Buttons",
  components: {
    NextButton,
    PlayButton,
    PrevButton
  },
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
    },
    trackPlaying: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasPlaylist() {
      return this.sounds && this.sounds.length > 1;
    }
  }
};
</script>