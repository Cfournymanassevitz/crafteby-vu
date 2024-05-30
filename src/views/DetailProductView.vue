<script setup xmlns="http://www.w3.org/1999/html">
import Product   from '@/components/Product.vue'
</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <li v-for="product in products" :key="product.id" class="card-body col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow" id="carte">
        <figure><img :src="product.image" class="img-card w-full h-full" alt="image" /></figure>
        <h2 class="card-title">{{ product.title }}</h2>
        <div class="card-actions justify-end ">
          <p class="prix">{{ product.price }} €</p>

        </div>
      </li>
<!--      <img :src="product.image" class="max-w-sm rounded-lg shadow-2xl" />-->
<!--      <div>-->
<!--        <h1 class="text-5xl font-bold">{{ product.id }}</h1>-->
<!--        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>-->
<!--        <button class="btn btn-primary">Get Started</button>-->
<!--      </div>-->
    </div>
  </div>
</template>

<style scoped>

</style>