import { repairSearch } from '@/api'
export default {
  namespaced: true,
  state: {
    AllList: '',
  },
  mutations: {
    setRepair(state, payload) {
      state.AllList = payload
    },
  },
  actions: {
    async getAllList(context) {
      const res = await repairSearch()
      context.commit('setRepair', res)
      console.log(res)
    },
  },
}
