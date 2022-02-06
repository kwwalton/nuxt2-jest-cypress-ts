import { Plugin } from '@nuxt/types'
import createRepository from '~/repository'

declare module 'vue/types/vue' {
  interface Vue {
    $repository: any
  }
}

declare module '@nuxt/types' {
  interface Context {
    $repository: any
  }
}

const $repository: Plugin = (context, inject) => {
  const repositoryWithAxios = createRepository(context.$axios)
  inject('repository', repositoryWithAxios)
}

export default $repository
