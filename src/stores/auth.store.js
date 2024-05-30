import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  getters: {
    },
  actions: {
    login(username , password) {
      fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username,
          password,
        })
      })
        .then(res=>res.json())
        .then(json=> {
        console.log(json)
        this.token = json.token
        })

    },
    logout() {
    },
  }
})
