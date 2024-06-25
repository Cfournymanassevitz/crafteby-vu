import { defineStore } from 'pinia'
import { API_URL } from '@/config.js'
import axios from 'axios'


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
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.token = null
      this.user = null
    },
    actions: {
      async register(email, password, name) {
        try {
          const response = await axios.post(`${API_URL}/register`, {
            email,
            password,
            name,
          });
          this.token = response.data.token;
          localStorage.setItem('token', response.data.token);
        } catch (error) {
          console.error('Erreur lors de l\'inscription:', error);
        }
      },
    }
  }
});