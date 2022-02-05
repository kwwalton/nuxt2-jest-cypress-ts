import { mutations } from '~/store/users'

// TODO: test actions, have a setup function to reset state and have one state for all tests

describe('store/users', () => {
  test('mutations: isLoadingUsers', () => {
    const state = {
      users: [],
      isLoadingUsers: false,
    }
    mutations.setIsLoadingUsers(state, true)
    expect(state.isLoadingUsers).toBeTruthy()
  })

  test('mutations: setUsers', () => {
    const state = {
      users: [],
      isLoadingUsers: false,
    }
    const mockResponse = [
      { id: 1, name: 'Pierre' },
      { id: 2, name: 'Jared' },
    ]
    mutations.setUsers(state, mockResponse)
    expect(state.users).toEqual(mockResponse)
  })
})
