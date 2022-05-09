import { describe, expect, afterEach, vi, beforeEach, test } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import HIcon from './HIcon.vue'
const iconName = ref('Bell')

vi.mock('@heroicons/vue/solid', () => {
  return {
    BellIcon: 'loaded',
  }
})

vi.mock('@heroicons/vue/outline', () => {
  return {
    BellIcon: 'loaded',
  }
})

describe('Test component', () => {
  let wrapper

  expect(HIcon).toBeTruthy()

  beforeEach(() => {
    wrapper = shallowMount(HIcon, {
      props: {
        name: iconName.value,
      },
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should works', () => {
    expect(wrapper.vm.outline).toBe(false)
    expect(wrapper.vm.icon).toEqual('loaded')
  })
})
