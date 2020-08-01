import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import BlabHelloWorld from '@/components/BlabHelloWorld.vue';

describe('BlabHelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(BlabHelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
