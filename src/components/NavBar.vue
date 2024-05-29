<template>
<header>
  <div class="logoC">

    <img src="..\assets\img\LOGO.svg" alt="Logo">

    <!--            <img src="..\assets\trash.svg" alt="Logo">-->
  </div>
  <div class="form-control">

    <input type="text" placeholder="Search" class="input input md:w-auto rounded-none"/>
  </div>

        <div class="indicator">
          <router-link to="/">
          <img src="..\assets\img\menu.svg" class="logo-compte">
          </router-link>
          <router-link to="/cart">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg img src="..\assets\img\shopping-basket.svg" class="logo-panier" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span class="badge badge-sm indicator-item">{{ itemCount }}</span>
              </div>
            </div>
          </router-link>
          <router-link to="/account">
          <img src="..\assets\img\icon.svg" class="logo-compte">
          </router-link>
        </div>


  </header>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore.js'
const cartStore = useCartStore()
const itemCount = cartStore.itemCount

</script>