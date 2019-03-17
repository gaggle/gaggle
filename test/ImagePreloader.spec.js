import { mount } from '@vue/test-utils'
import ImagePreloader from '@/components/ImagePreloader'

describe('ImagePreloader', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImagePreloader, {
      propsData: {
        image: 'imagepath'
      },
      scopedSlots: {
        default: ''
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('starts in loading state', () => {
    const wrapper = mount(ImagePreloader, {
      propsData: {
        image: 'imagepath'
      },
      scopedSlots: {
        default: ''
      }
    })
    expect(wrapper.vm.loading).toBe(true)
  })
})
