import { mount } from '@vue/test-utils'
import ResolutionPicker from '@/components/ResolutionPicker'

window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn()
  }
})

describe('ResolutionPicker', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ResolutionPicker, {
      scopedSlots: {
        default: ''
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
