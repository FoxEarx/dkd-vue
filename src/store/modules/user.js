import { login } from '@/api/user.js'
export default {
  namespaced: true,
  state: {
    token: '',
    msg: '请求超时',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setclientToken(state, payload) {
      state.clientToken = payload
    },
    setMsg(state, payload) {
      state.msg = payload
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
        context.commit('setToken', res.data.token)
        context.commit('setMsg', res.data.msg)
      } catch (error) {}
    },
  },
}
