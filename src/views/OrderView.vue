<script setup>
import { useCartStore } from '@/stores/cartStore.js'
import { API_URL } from '@/config.js'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store.js'

const cartStore = useCartStore()
const authStore = useAuthStore()

// const { post } = useFetch(API_URL + '/orders')
async function fetcher(method, url, data = null) {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    console.log('token ?');
    console.log(localStorage.token);
    console.log('auth token');
    console.log(authStore.token);

    if (localStorage.token) {
      headers['Authorization'] = `Bearer ${localStorage.token}`
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
    console.log(error)
    return {
      status: error.response.status || 500,
      data: null
    }
  }
}

const confirmOrder = async () => {
  // Get product IDs from cart items
  const productIds = cartStore.items.map(item => item.id)

  // Create an instance of useFetch
  // const { post } = useFetch(`${API_URL}/orders`)

  try {
    // Send POST request to backend
    // const response = await post('', { productIds }, {
    //   headers: {
    //     'Authorization': `Bearer ${localStorage.token}`
    //   }
    // })
    fetcher('post', 'orders',productIds).then(response => {
      if (response.status === 200) {
        console.log('Order placed successfully')
      } else {
        console.error(response)
      }})

    // Clear cart after successful order
    // cartStore.deleteCart()
  } catch (error) {
    // Handle error here
    console.error('Error while placing order:', error)
  }
}
</script>

<template>

  <div class="step3">
    <ul class="steps">
      <li class="step step-error">Panier</li>
      <li class="step step-error">Authentification</li>
      <li class="step step-error">Paiement & transport</li>
      <li class="step">Confirmation</li>
    </ul>
  </div>
  <div class="paiement">
    <div class="artboard artboard-horizontal phone-2">
      <h1 class=" text-4xl">Paiement </h1>
      <form class="grid gap-6" action="#" method="POST">
        <div class="relative z-0 w-full mb-5 group">
          <input type="password" name="repeat_password" id="floating_repeat_password"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required />
          <label for="floating_repeat_password"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom
            sur la carte </label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input type="password" name="repeat_password" id="floating_repeat_password"
                 class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 placeholder=" " required />
          <label for="floating_repeat_password"
                 class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numéro
            carte</label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_first_name" id="floating_first_name"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required />
            <label for="floating_first_name"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date
              expriration</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_CCV" id="floating_CCV"
                   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                   placeholder=" " required />
            <label for="floating_CCV"
                   class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CCV</label>
          </div>
        </div>

      </form>


      <fieldset>
        <legend class="sr-only">Checkbox variants</legend>

        <div class="flex items-center mb-4">
          <input checked id="checkbox-1" type="checkbox" value=""
                 class="w-4 h-4 text-vermillon-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          <label for="checkbox-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <a
            href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
        </div>

      </fieldset>

      <router-link to="/confirmation" @click="confirmOrder"
                   class="text-white bg-vermillon hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Valider
      </router-link>

    </div>
  </div>
</template>

<style scoped>
.paiement {
  display: flex;
  justify-content: center;
}
</style>