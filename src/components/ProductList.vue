<template>
  <div>
    <h2>Liste de produits</h2>
    <div v-for="product in products" :key="product.id">
      <p>{{ product.name }} - {{ product.price }} €</p>
      <button @click="() => addToCart(product)">Ajouter au panier</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'

// Définir une liste de produits pour l'exemple
const products = [
  { id: 1, name: 'Produit A', price: 10 },
  { id: 2, name: 'Produit B', price: 20 }
]

// Utilisation du store Pinia
const cartStore = useCartStore()

// Accès à l'action pour ajouter un produit au panier
const addToCart = (product) => {
  console.log('Adding to cart:', product)
  cartStore.addItem(product)
}
</script>
