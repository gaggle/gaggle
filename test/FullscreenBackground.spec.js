import { mount } from '@vue/test-utils'
import FSBG from '@/components/FullscreenBackground.vue'

describe('FSBG', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FSBG, {
      propsData: {
        image: 'imagepath'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
