<template>
  <AppLayout>
  <div class="step">
  <ul class="steps">
    <li class="step step-error">Panier</li>
    <li class="step step-error">Authentification</li>
    <li class="step step">Paiement & transport</li>
    <li class="step">Confirmation</li>
  </ul>
  </div>
    <h3 class="text-4xl">Votre Panier</h3>

  <div class="panier ">

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

      <div class="recapitu grid gap-2">
        <h3 class="text-4xl"> Récapitulatif : </h3>

<div class="infoRecap grid gap-1">
        <p>Nombre d'articles : {{ cartItems.length }}</p>
        <p>Frais de port : 0 €</p>
        <p>Code promo </p>
  <input type="text" placeholder="Code" class="input input-bordered input-error w-full max-w-xs" />
</div >
<div class="finrecap grid gap-0.5">
        <p class="text-2xl">Total : {{ totalPrice }} €</p>
  <router-link v-if="token" to="/order">
    <button class="btn btn-outline btn-error">Commander</button>
  </router-link>
  <router-link v-else to="/account">
    <button class="btn btn-outline btn-error">Se connecter</button>
  </router-link>
</div>
      </div>
    </div>
  </div>
  </div>
  </AppLayout>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth.store.js'
import { useCartStore } from '@/stores/cartStore.js'
import AppLayout from '@/components/AppLayout.vue'
const cartStore = useCartStore()

// Accès aux états et aux actions du store
const cartItems = cartStore.items
const totalPrice = cartStore.totalPrice
const removeFromCart = cartStore.removeItem
const authStore = useAuthStore()
const user = authStore.user
const token = authStore.token
</script>
<style>
.recap{
  padding: 20px;
  box-shadow: #e5e8ea 0px 0px 10px;
}
</style>