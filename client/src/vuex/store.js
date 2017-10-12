import Vue from 'vue'
import Vuex from 'vuex'
// digunakan untuk install library yang akan menghubungkan server dengan client
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

// daftarkan vuex yang berfungsi sebagai middleware
Vue.use(Vuex)
const state = {
  questionuser: [],
  questionuserall: [],
  userprofile: ''
}
// membuat objek store-nya
const mutations = {
  // pada mutetions setArtikel memerlukan parameter state, sebagaimana actions, itu wajib ada, state dibawah merujuk pada bagian state state pada store tugas mutations adalah melakukan pengolahan data yang diterima state dari actions

  setQuestion (state, payload) {
    console.log('data di mutations -------> ', payload)
    state.questionuser = payload
  },
  setQuestionAll (state, payload) {
    console.log('data di mutations -------> ', payload)
    state.questionuserall = payload
  },
  setUserProfile (state, payload) {
    console.log('data di mutations -------> ', payload)
    state.userprofile = payload
  }
}
const actions = {
  // disini digunakan untuk melakukan sesuatu yang sifatnya asinkronus, seperti api & ajax request dll
  dapatkanQuestionUser ({commit}) {
    console.log('=================')
    // context menuju ke object store secara keseluruhan, dalam context ada commit, sehingga kita langsung menggunakan commit saja.
    http.get('/question', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({data}) => {
      console.log('data di actions----------> ', data)
      commit('setQuestion', data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  dapatkanQuestionAll ({commit}) {
    http.get('/question/all')
    .then(({data}) => {
      console.log('data di actions----------> ', data)
      commit('setQuestionAll', data)
    })
    .catch((err) => {
      console.log(err)
    })
  },
  dapatkanUser ({commit}) {
    http.get('/user/profile', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(({data}) => {
      console.log('data di actions----------> ', data)
      commit('setUserProfile', data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

// sintak ini digunakan karna store ini akan digunakan oleh komponen lain dan harus diimpor
export default store
