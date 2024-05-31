<!-- src/views/account/login.vue -->
<script setup>
import { ref } from 'vue'
import { useAuthStore} from '@/stores/auth.store.js'


const user = ref({ name: '', password: '' })
const authStore = useAuthStore()

function login() {
  authStore.login(user.value.name, user.value.password)
}
</script>

<template>



  <h2>Connectez vous</h2>
  <div class="avatar">
    <div class="w-24 rounded-full ring ring-error ring-offset-base-100 ring-offset-2">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="login">
    <label class="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
      <input v-model="user.name" type="text" class="grow" placeholder="Username" />
    </label>
    <label class="input input-bordered flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
      <input v-model="user.password" type="password" class="grow" value="password" />

    </label>
    <div class="btnlogin">
    <div>
      <router-link to="/">
      <button class="btn btn-wide btn-error" @click="login">Login</button>
      </router-link>
    </div>
      <div class="mp">
    <button >Mot de passe oublier</button>
    </div>
    </div>

    <div class="divider divider-error">OR</div>

      <router-link to="/register" class="btn btn-wide">Crée un compte</router-link>

  </div>
</template>

<style scoped>

</style>