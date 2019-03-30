import { mount } from '@vue/test-utils'
import test from 'ava'
import ImagePreloader from '../components/ImagePreloader'
import { waitForPredicate } from './helpers/wait-for'

test('starts loading', (t) => {
  const wrapper = mount(ImagePreloader, {
    propsData: {
      image: 'thumb.jpg'
    },
    scopedSlots: {
      default: ''
    }
  })
  t.is(wrapper.vm.loading, true)
})

test('stops loading at some point later', async (t) => {
  const wrapper = mount(ImagePreloader, {
    propsData: {
      image: 'thumb.jpg'
    },
    scopedSlots: {
      default: ''
    }
  })
  await waitForPredicate(() => wrapper.vm.loading === false)
  t.is(wrapper.vm.loading, false)
})
