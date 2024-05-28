<template>
  <div>
    <h2>Panier</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.quantity }} x {{ item.price }} €
        <button @click="() => removeFromCart(item.id)">Retirer</button>
      </li>
    </ul>
    <p>Total : {{ totalPrice }} €</p>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

// Utilisation du store Pinia
const cartStore = useCartStore()

// Accès aux états et aux actions du store
const cartItems = cartStore.items
const totalPrice = cartStore.totalPrice
const removeFromCart = cartStore.removeItem
</script>
