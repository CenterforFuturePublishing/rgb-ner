import Vue from 'vue'
import Vuex from 'vuex'
import {getJpegData, IApi} from "@/api"

Vue.use(Vuex)


export const store = new Vuex.Store<IRootState>({
  state: {
    jpegData: null
  },
  mutations: {
    updateJpegData(state, jpegData: IApi) {
      state.jpegData = jpegData
    }
  },
  actions: {

  }
})

getJpegData().then(value => {
  store.commit("updateJpegData", value)
})

export interface IRootState {
  jpegData: IApi | null
}