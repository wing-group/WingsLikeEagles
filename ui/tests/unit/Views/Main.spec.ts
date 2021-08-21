import { shallowMount } from '@vue/test-utils';
import Main from '@/views/Main/Main.vue';

describe('Main.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Main, {});
    expect(wrapper.find('#main-view-container')).toBe(true);
  });
});
