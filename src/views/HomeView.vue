<script setup>
import Product from '@/components/Product.vue'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Banniere from '@/components/Banniere.vue'

</script>

<template>
  <header>

    <NavBar />

  </header>
  <Banniere />

  <h2>Meilleures ventes</h2>

  <Product />

  <footer>
    <Footer />

  </footer>


</template>
