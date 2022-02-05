import { IUser } from '~/types/users'

export const state = () => ({
  users: [] as IUser[],
  isLoadingUsers: false,
})

export const mutations = {
  setUsers(state: any, users: IUser[]) {
    state.users = users
  },
  setIsLoadingUsers(state: any, value: boolean) {
    state.isLoadingUsers = value
  },
}

export const actions: any = {
  async getUsers({ state, commit }: any) {
    commit('setIsLoadingUsers', true)
    try {
      const users = await this.$repository.users.getUsers()
      commit('setUsers', users)
    } catch (e: any) {
      console.log('getUsers', e)
    } finally {
      commit('setIsLoadingUsers', false)
    }
  },
}
