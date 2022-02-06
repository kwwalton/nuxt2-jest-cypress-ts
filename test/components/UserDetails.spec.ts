import { shallowMount } from '@vue/test-utils'
import UserDetails from '@/components/UserDetails.vue'
// Cypress messed up the typescript definitions for Vue Test Utils, below is workaround
import { describe, expect, test, jest } from '@jest/globals'

const mockResponse = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
}
const $route = { path: '/user', params: { id: 1 } }
const $repository = {
  users: {
    getUser: jest.fn((id) => Promise.resolve(mockResponse)),
  },
}

describe('UserDetails', () => {
  test('getUser', async () => {
    const wrapper = shallowMount(UserDetails, {
      mocks: { $route, $repository },
      data() {
        return {
          user: null,
          isLoadingUser: false,
        }
      },
    })
    expect(wrapper.vm.$route.params.id).toEqual(1)
    expect(wrapper.vm.$repository.users.getUser).toHaveBeenCalled()
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.$data.user).toEqual(mockResponse)
  })
})
