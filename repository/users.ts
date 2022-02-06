import { NuxtAxiosInstance } from '@nuxtjs/axios'
export default ($axios: NuxtAxiosInstance) => ({
  getUsers: () => $axios.$get('/users'),
  getUser: (id: number) => $axios.$get(`/users/${id}`),
})
