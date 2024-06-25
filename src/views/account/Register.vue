<script setup>

import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.store.js'
import axios from 'axios'
import { API_URL } from '@/config.js'


const user = ref({ email: '', password: '', name: '' })
const authStore = useAuthStore()

//effectue une requête de connection a mon api Si la requête est réussie, vous réinitialisez l'utilisateur et supprimez le token d'authentification du localStorage.
async function fetcher(method, url, data = null) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    if (localStorage.token) {
      headers['Authorization'] = `Bearer ${authStore.token}`
    }

    const response = await axios({
      method: method,
      url: `${API_URL}/${url}`,
      headers: headers,
      data: data
    })

    return {
      status: response.status,
      data: response.data
    }
  } catch (error) {
    return {
      status: error.response.status || 500,
      data: null
    }
  }
}

onMounted(() => {
  if (authStore.token) {
    fetcher('get', 'users').then(response => {
      if (response.status === 200) {
        user.value = response.data
      } else {
        console.error(response)
      }
    })
  }
})

async function register() {
  console.log('user : ', user.value)

  try {
    const response = await axios.post(`${API_URL}/register`, {
      email: user.value.email,
      password: user.value.password,
      name: user.value.name
    })

    console.log('Inscription réussie:', response.data)
    // Stocke le token dans le localStorage et dans le store
    localStorage.setItem('token', response.data.token)
    authStore.token = response.data.token
    authStore.login(user.value.email, user.value.password)
      .then(() => {
        if (authStore.token) {
          console.log('Connexion réussie')
        }
      })
  } catch (error) {
    console.error('Erreur d\'inscription:', error)

  }
}
</script>
<template>
  <div class="centrereg">
    <div class="register">
      <h2>Création de compte</h2>

      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" class="grow" placeholder="Email" v-model="user.email" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input type="text" class="grow" placeholder="Username" v-model="user.name" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
        </svg>
        <input type="password" class="grow" value="password" />
      </label>
      <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
          <path fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd" />
        </svg>
        <input type="password" class="grow" placeholder="Password" v-model="user.password" />
      </label>
      <div class="grid grid-rows-2 grid-cols-[1fr,12fr] gap-2">

        <input type="checkbox" checked="checked" class="checkbox" />
        <p>Je donne mon accord pour la collecte des données RGPD*</p>


        <input type="checkbox" checked="checked" class="checkbox" />
        <p class="grids col">Je donne mon accord pour recevoir de les newsleter</p>

      </div>
      <router-link to="/">
        <button class="btn btn-wide btn-error" @click="register">Créer un compte</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>


</style>