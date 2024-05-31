<script setup>
import { useCartStore} from '@/stores/cartStore.js'

const cartStore = useCartStore()

const confirmOrder = () => {
  cartStore.deleteCart()
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

  <h1>Paiement </h1>
    <router-link to="/confirmation" @click="confirmOrder" class="text-white bg-vermillon hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</router-link>



</template>

<style scoped>

</style>