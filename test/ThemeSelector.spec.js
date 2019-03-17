import { mount } from '@vue/test-utils'
import ThemeSelector from '@/components/ThemeSelector'

describe('ThemeSelector', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ThemeSelector, {
      propsData: {
        themes: [{ name: 'foo' }]
      },
      scopedSlots: {
        default: ''
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
