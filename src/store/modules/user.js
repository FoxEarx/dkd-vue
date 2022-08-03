import { login } from '@/api/user.js'
export default {
  namespaced: true,
  state: {
    token: '',
    clientToken: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setclientToken(state, payload) {
      state.clientToken = payload
    },
  },
  actions: {
    async getToken(context, payload) {
      try {
        const res = await login({
          code: payload.loginValidation,
          loginName: payload.loginAccount,
          password: payload.loginpassword,
          loginType: 0,
          clientToken: payload.clientToken,
        })
        console.log(res)
        context.commit('setToken', res.token)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
