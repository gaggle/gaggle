import { mount } from '@vue/test-utils'
import test from 'ava'
import Greeting from '../components/Greeting.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(Greeting)
  t.is(wrapper.isVueInstance(), true)
})
