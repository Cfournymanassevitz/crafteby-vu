<script setup>

  import { useFetch } from '@vueuse/core'
  import { useCartStore } from '../stores/cartStore'

  const { data: products } = useFetch('https://fakestoreapi.com/products?limit=21').json()

  // Utilisation du store Pinia
  const cartStore = useCartStore()

  // Accès à l'action pour ajouter un produit au panier
  const addToCart = (product) => {
  console.log('Adding to cart:', product)
  cartStore.addItem(product)
}
</script>

<template>


  <div class="p-12">

    <ul role="list" class="grid grid-cols-1 gap-10 sm:grid-cols-4 lg:grid-cols-4 rounded">
      <li v-for="product in products" :key="product.id"
          class="card-body col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" id="carte">
          <figure><img :src="product.image" class="img-card w-full h-full" alt="image"  /></figure>

            <h2 class="card-title">{{ product.title}}</h2>
            <div class="card-actions justify-end ">
              <p class="prix">{{ product.price }} €</p>
              <button class="btn btn-error " @click="addToCart(product)">Ajouter au panier €</button>
            </div>


      </li>
    </ul>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
