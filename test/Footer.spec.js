import { mount } from '@vue/test-utils'
import test from 'ava'
import Footer from '../components/Footer.vue'

test('is a Vue instance', (t) => {
  const wrapper = mount(Footer)
  t.is(wrapper.isVueInstance(), true)
})
