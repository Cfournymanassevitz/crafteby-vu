<script setup>
import AppLayout from '@/components/AppLayout.vue'
import login from '@/views/account/login.vue'
import Register from '@/views/account/Register.vue'
import {useRoute} from 'vue-router'

const route = useRoute()
console.log(route)

</script>

<template>

  <AppLayout>


    <login v-if=" route.name == 'account'"/>
    <Register v-else />
  </AppLayout>
</template>

<style scoped>

</style>