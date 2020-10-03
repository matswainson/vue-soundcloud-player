<template>
  <SoundCloud
    playlist="73448639"
    @ready="ready"
  />
</template>

<script>
import SoundCloud from './SoundCloud'

export default {
  name: 'Events',
  components: {
    SoundCloud
  },
  methods: {
    ready() {
      console.log('player ready')
    }
  }
}
</script>