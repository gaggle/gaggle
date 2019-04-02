import { mount } from '@vue/test-utils'
import test from 'ava'
import FSBG from '../components/FullscreenBackground.vue'

test('sets image to component background image', (t) => {
  const wrapper = mount(FSBG, { propsData: { image: 'foo.bar' } })
  t.is(wrapper.vm.$el.style['background-image'], 'url(foo.bar)')
})

test('centers position by default', (t) => {
  const wrapper = mount(FSBG, { propsData: { image: 'foo.bar' } })
  t.is(wrapper.vm.$el.style['background-position'], 'center center')
})

test('sets position to component background position', (t) => {
  const wrapper = mount(FSBG, { propsData: { image: '', position: 'top' } })
  t.is(wrapper.vm.$el.style['background-position'], 'top')
})
