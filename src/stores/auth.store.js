import { defineStore } from 'pinia'
import { API_URL } from '@/config.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    },
  actions: {
    login(email , password) {
      console.log('email et pass :',email, password)
      fetch(`${API_URL}/login`,{
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
        })

    },
    logout() {
    },
  }
})
