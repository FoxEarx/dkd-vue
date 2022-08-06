// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'
import { getTokenTime } from '@/utils/auth.js'

const isTimeOut = function () {
  const currentTime = Date.now()
  const tokenTime = getTokenTime() || 0
  const timeout = 60 * 10000 * 10
  return currentTime - tokenTime > timeout
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}) // 创建一个axios的实例

service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (isTimeOut()) {
      await store.dispatch('user/logout')
      router.push('/login')
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  return config
}) // 请求拦截器
service.interceptors.response.use(
  (res) => {
    const id = store.state.user.clientToken
    if (res.config.url === `/api/user-service/user/imageCode/${id}`) {
      return res.data
    }
    if (res.data.success) {
      return res.data
    }
    return res
    // Message.error(res.data.msg)
    // return Promise.reject(new Error(res.data.msg))
  },
  async function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error?.response?.status === 401) {
      Message.error('登录过期')
      await store.dispatch('user/logout')
      router.push('/login')
      // store.dispatch('user/
    } else {
      Message.error(error.message)
    }
    return Promise.reject(error)
  },
) // 响应拦截器
export default service // 导出axios实例
