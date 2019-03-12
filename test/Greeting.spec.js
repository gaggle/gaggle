import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Greeting)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
