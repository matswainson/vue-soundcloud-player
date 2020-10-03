import Vue from 'vue';
import Events from './Events.vue';
import SoundCloud from './SoundCloud.vue';

const fontStack = 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';
const StyleWrapper = Vue.component('StyleWrapper', {
  template: `<div style="font-family: ${fontStack}"><slot /></div>`
});

const components = {
  SoundCloud,
  StyleWrapper
};

export default { title: 'SoundCloud' };

export const standard = () => ({
  components,
  template: '<StyleWrapper><SoundCloud track="370226924" /></StyleWrapper>'
});

export const playlist = () => ({
  components,
  template: '<StyleWrapper><SoundCloud playlist="73448639" /></StyleWrapper>'
});

export const mini = () => ({
  components,
  template: '<StyleWrapper><SoundCloud track="194881641" :mini="true" /></StyleWrapper>'
});

export const lightTheme = () => ({
  components,
  template: '<StyleWrapper><SoundCloud playlist="73448639" theme="light" /></StyleWrapper>'
});

export const multiplePlayers = () => ({
  components,
  template: '<StyleWrapper><SoundCloud track="370226924" /><SoundCloud track="194881641" /></StyleWrapper>'
});

export const events = () => ({
  components: {
    StyleWrapper,
    Events
  },
  template: '<StyleWrapper><Events /></StyleWrapper>'
});