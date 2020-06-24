import Vue from 'vue';
import SoundCloud from './SoundCloud.vue';

const fontStack = 'BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif';
const StyleWrapper = Vue.component('StyleWrapper', {
  template: `<div style="font-family: ${fontStack}"><slot /></div>`
});

export default { title: 'SoundCloud' };

export const standard = () => ({
  components: { SoundCloud },
  template: '<StyleWrapper><SoundCloud track="370226924" /></StyleWrapper>'
});

export const playlist = () => ({
  components: { SoundCloud },
  template: '<StyleWrapper><SoundCloud playlist="73448639" /></StyleWrapper>'
});

export const mini = () => ({
  components: { SoundCloud },
  template: '<StyleWrapper><SoundCloud track="194881641" :mini="true" /></StyleWrapper>'
});

export const lightTheme = () => ({
  components: { SoundCloud },
  template: '<StyleWrapper><SoundCloud playlist="73448639" theme="light" /></StyleWrapper>'
});

export const multiplePlayers = () => ({
  components: { SoundCloud },
  template: '<StyleWrapper><SoundCloud track="370226924" /><SoundCloud track="194881641" /></StyleWrapper>'
});