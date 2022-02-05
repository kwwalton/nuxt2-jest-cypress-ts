import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { IPost } from '~/types/posts'

export default ($axios: NuxtAxiosInstance) => ({
  getPosts: () => $axios.$get('/posts'),
  createPost: (payload: IPost) => $axios.$post('/posts', payload),
})
