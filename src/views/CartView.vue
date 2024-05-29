<template>
  <AppLayout>
  <div class="step">
  <ul class="steps">
    <li class="step step-error">Register</li>
    <li class="step step-error">Choose plan</li>
    <li class="step">Purchase</li>
    <li class="step">Receive Product</li>
  </ul>
  </div>
    <h3>Votre Panier</h3>

  <div class="panier">

    <div class="articles-recap">

      <div class="articles">
        <ul v-for="product in cartItems" :key="product.id" class="article-panier">
          <img :src="product.image" class="img-card w-full h-full" alt="image"  />
          <li>{{ product.title }} </li>
          <li> Quantité : {{ product.quantity }} </li>
          <li> Prix unitaire : {{ product.price }} €</li>
          <button @click="() => removeFromCart(product.id)" class="poubelle">Retirer <img src="..\assets\img\trash.svg"></button>
        </ul>
      </div>
<div class="recap">

      <div>
        <h3> Récapitulatif : </h3>

<div class="infoRecap">
        <p>Nombre d'articles : {{ cartItems.length }}</p>
        <p>Frais de port : 0 €</p>
        <p>Code promo </p>
  <input type="text" placeholder="Code" class="input input-bordered input-error w-full max-w-xs" />
</div >
<div class="finrecap">
        <p>Total : {{ totalPrice }} €</p>
  <button class="btn btn-outline btn-error">Commander</button>
</div>
      </div>
    </div>
  </div>
  </div>
  </AppLayout>
</template>

<script setup>

import { useCartStore } from '@/stores/cartStore.js'
import AppLayout from '@/components/AppLayout.vue'
const cartStore = useCartStore()

// Accès aux états et aux actions du store
const cartItems = cartStore.items
const totalPrice = cartStore.totalPrice
const removeFromCart = cartStore.removeItem
const clearCart = cartStore.clearCart
</script>
