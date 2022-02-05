import { NuxtAxiosInstance } from '@nuxtjs/axios'
import posts from './posts'
import users from './users'

export default ($axios: NuxtAxiosInstance) => ({
  posts: posts($axios),
  users: users($axios),
})
