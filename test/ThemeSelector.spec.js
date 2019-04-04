import { mount } from '@vue/test-utils'
import test from 'ava'
import ThemeSelector from '../components/ThemeSelector'

test('selects a theme on mount', (t) => {
  const wrapper = mount(ThemeSelector, {
    propsData: {
      themes: [
        { name: 'foo' }
      ]
    },
    scopedSlots: {
      default: ''
    }
  })
  t.deepEqual(wrapper.vm.theme.name, 'foo')
})

test('certain properties are always present', (t) => {
  const wrapper = mount(ThemeSelector, {
    propsData: {
      themes: [
        { name: 'foo' }
      ]
    },
    scopedSlots: {
      default: ''
    }
  })
  t.deepEqual(wrapper.vm.theme.ext, 'jpg')
  t.deepEqual(wrapper.vm.theme.position, 'center center')
})

test('always-present properties can be overwritten', (t) => {
  const wrapper = mount(ThemeSelector, {
    propsData: {
      themes: [
        { name: 'foo', ext: 'png' }
      ]
    },
    scopedSlots: {
      default: ''
    }
  })
  t.deepEqual(wrapper.vm.theme.ext, 'png')
})

test('custom theme properties are passed along', (t) => {
  const wrapper = mount(ThemeSelector, {
    propsData: {
      themes: [
        { name: 'foo', attr: 'bar' }
      ]
    },
    scopedSlots: {
      default: ''
    }
  })
  t.deepEqual(wrapper.vm.theme.attr, 'bar')
})

test('selects user-selected theme if specified', (t) => {
  const wrapper = mount(ThemeSelector, {
    propsData: {
      themes: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' }
      ],
      userSelectedTheme: '4'
    },
    scopedSlots: {
      default: ''
    }
  })
  t.deepEqual(wrapper.vm.theme.name, '4')
})
