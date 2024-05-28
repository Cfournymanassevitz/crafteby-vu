<template>
  <ul class="steps">
    <li class="step step-error">Register</li>
    <li class="step step-error">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
  <div>
    <h2>Votre Panier</h2>
    <ul>
      <li v-for="product in cartItems" :key="product.id">
        {{ product.name }} - {{ product.quantity }} x {{ product.price }} €
        <button @click="() => removeFromCart(product.id)">Retirer</button>
      </li>
    </ul>
    <p>Total : {{ totalPrice }} €</p>
    <button @click="clearCart">Vider le panier</button>
  </div>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore.js'

const cartStore = useCartStore()

// Accès aux états et aux actions du store
const cartItems = cartStore.items
const totalPrice = cartStore.totalPrice
const removeFromCart = cartStore.removeItem
const clearCart = cartStore.clearCart
</script>
