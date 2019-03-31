import { mount } from '@vue/test-utils'
import test from 'ava'
import ResolutionPicker from '../components/ResolutionPicker'

window.matchMedia = (query) => {
  return {
    matches: true,
    media: query,
    onchange: null
  }
}

test('mounts with a size', (t) => {
  const wrapper = mount(ResolutionPicker, {
    scopedSlots: {
      default: ''
    }
  })
  t.not(wrapper.vm.size, undefined)
})

test('queries media for size', (t) => {
  const wrapper = mount(ResolutionPicker, {
    scopedSlots: {
      default: ''
    }
  })
  t.is(wrapper.vm.size, 'xl')
})
