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
    async getAllList(context, id) {
      const res = await repairSearch(id)
      context.commit('setRepair', res.data)
    },
  },
}
