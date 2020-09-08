![vue-soundcloud-player](https://matswainson.com/images/github/soundcloud.png)

# Vue custom soundcloud player

Custom Soundcloud player supporting single tracks & playlists

### Example

![vue-soundcloud-player-2](https://matswainson.com/images/github/soundcloud-player.png)

```js
<template>
  <SoundCloud
    track="194881641"
    :mini="true"
  />
</template>

<script>
import SoundCloud from 'vue-soundcloud-player';

export default {
  ...
  components: {
    SoundCloud
  },
  ...
}
</script>
```

#### Options

| Name | Type | Default | Description |
|-----------|-----------|-------------|-------------|
| track | `string` | - | ID of track |
| playlist | `string` | - | ID of playlist |
| mini | `boolean` | `false` | Small player with inline play button |
| theme | `string` | `dark` | Playlist colours - accepts `dark` or `light` |

Track or playlist IDs can be found from Soundcloud embed player URLs

### Browser Support

* Chrome
* Firefox
* Internet Explorer 9+
* Opera