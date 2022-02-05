import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default function ({
  $axios,
  redirect,
}: {
  $axios: NuxtAxiosInstance
  redirect: Function
}) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `Bearer ${process.env.API_TOKEN}`
    return config
  })

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.onResponse((response) => {
    const data = response.data
    if (data.code === 401) {
      redirect('/login')
    }
  })
}
