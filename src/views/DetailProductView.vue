<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'

// Get the route parameters
const route = useRoute()

// Fetch the product data when the component is mounted
let product = ref(null)
onMounted(async () => {
  const fetch = useFetch(`https://fakestoreapi.com/products/${route.params.id}`)
  await fetch.json()
  product.value = fetch.data.value
})
</script>

<template>
  <div class="hero min-h-screen bg-base-200" v-if="product">
    <div class="hero-content flex-col lg:flex-row">
      <img :src="product.image" class="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 class="text-5xl font-bold">{{ product.title }}</h1>
        <p class="py-6">{{ product.description }}</p>
        <p>{{ product.price }} €</p>
        <button class="btn btn-primary" @click="addToCart(product)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Votre CSS ici */
</style>