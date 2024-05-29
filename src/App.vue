<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import AppLayout from '@/components/AppLayout.vue'
import Banniere from '@/components/Banniere.vue'

</script>

<template>

  <NavBar />

    <RouterView />



  <Footer />

</template>

