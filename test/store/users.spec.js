import { mutations, actions } from '~/store/users'
import $repository from '~/plugins/api'

// TODO: use beforeEach to set state

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

  test('actions: getUsers - Happy Path', async () => {
    const state = {
      users: [],
      isLoadingUsers: false,
    }
    const mockResponse = [
      { id: 1, name: 'Pierre' },
      { id: 2, name: 'Jared' },
    ]
    const commit = jest.fn()

    actions.$repository = {
      users: {
        getUsers: jest.fn().mockResolvedValue(mockResponse),
      },
    }

    await actions.getUsers({ commit, state })
    expect(commit).toHaveBeenCalledWith('setIsLoadingUsers', true)
    expect(commit).toHaveBeenCalledWith('setUsers', mockResponse)
    expect(commit).toHaveBeenCalledWith('setIsLoadingUsers', false)
  })

  test('actions: getUsers - Unhappy Path', async () => {
    const state = {
      users: [],
      isLoadingUsers: false,
    }
    const commit = jest.fn()

    actions.$repository = {
      users: {
        getUsers: jest.fn().mockRejectedValue(new Error('Error')),
      },
    }

    await actions.getUsers({ commit, state })
    expect(commit).toHaveBeenCalledWith('setIsLoadingUsers', true)
    expect(commit).toHaveBeenCalledWith('setIsLoadingUsers', false)
  })
})
