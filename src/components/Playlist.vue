<template>
  <ul
    v-if="showPlaylist"
    :class="playlistClasses"
  >
    <li
      v-for="(sound, idx) in sounds"
      :key="idx"
      class="sc-player__playlist__item"
      @click="selectTrack(idx)"
    >
      <span
        class="sc-player__playlist__thumb"
        :style="backgroundImage(sound)"
      />
      <span class="sc-player__playlist__title">
        {{ sound.title }}
      </span>
    </li>
  </ul>
</template>

<script>
import classnames from 'classnames';

export default {
  name: "Playlist",
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
    theme: {
      type: String,
      default: "dark"
    }
  },
  computed: {
    playlistClasses() {
      return classnames('sc-player__playlist', {'sc-player--dark': this.theme!=='light'});
    },
    showPlaylist() {
      return this.sounds && this.sounds.length > 1 ? true : false;
    }
  },
  methods: {
    backgroundImage(sound) {
      const bg = sound.artwork_url || (sound.user && sound.user.avatar_url) || '';
      return `backgroundImage: url(${bg})`;
    },
    selectTrack(idx) {
      this.setCurrentTrack(this.sounds[idx], idx);
      this.soundcloud.skip(idx);
    }
  }
};
</script>