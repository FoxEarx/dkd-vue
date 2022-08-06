import { login, userInfo } from '@/api/user.js'
import { setTokenTime } from '@/utils/auth.js'
export default {
  namespaced: true,
  state: {
    token: '',
    clientToken: '',
    userInfo: {},
    userId: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setclientToken(state, payload) {
      state.clientToken = payload
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
    setUserId(state, payload) {
      state.userId = payload
    },
  },
  actions: {
    async getToken(context, payload) {
      const res = await login({
        code: payload.loginValidation,
        loginName: payload.loginAccount,
        password: payload.loginpassword,
        loginType: 0,
        clientToken: payload.clientToken,
      })
      context.commit('setToken', res.token)
      context.commit('setUserInfo', res)
      context.commit('setUserId', res.userId)
      setTokenTime()
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserInfo', {})
      context.commit('setUserId', '')
    },
    async getUserInfo(context) {
      console.log(context.state.userId)
      const res = await userInfo(context.state.userId)
      context.commit('setUserInfo', res.data)
    },
  },
}
