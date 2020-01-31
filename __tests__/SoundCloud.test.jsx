import { mount } from '@vue/test-utils'
import SoundCloud from '../src';

it('renders correctly', () => {
  const sc = mount(SoundCloud, {
    propsData: {
      track: '370226924'
    }
  });
  expect(sc.element).toMatchSnapshot();
});