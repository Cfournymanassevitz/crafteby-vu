<script setup>
import Product from '@/components/Product.vue'
import Banniere from '@/components/Banniere.vue'
import AppLayout from '@/components/AppLayout.vue'

</script>

<template>
  <Banniere />
  <AppLayout>
  <h2 class="text-6xl text-align: center;">Meilleures ventes</h2>

  <Product />
  </AppLayout>
</template>
