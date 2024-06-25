import { defineStore } from 'pinia'
import { API_URL } from '@/config.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    },
  actions: {
    login(email , password) {
      console.log('email et pass :',email, password)
      return fetch(`${API_URL}/login`,{ // Ajoutez le mot-clé return ici
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          password,
        })
      })
        .then(res=>res.json())
        .then(json=> {
          console.log('json :' , json)
          this.token = json.token
          localStorage.setItem('token', json.token)
        })
    },
    // logout() {
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('user')
    //   this.token = null
    //   this.user = null
    // },
  }
})