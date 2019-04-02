import { mount } from '@vue/test-utils'
import test from 'ava'
import Nav from '../components/Nav.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(Nav)
  t.is(wrapper.isVueInstance(), true)
})
