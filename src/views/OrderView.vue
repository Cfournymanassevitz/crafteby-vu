<script setup>

import Step from '@/components/Step.vue'
</script>

<template>
  <div class="step3">
    <ul class="steps">
      <li class="step step-error">Panier</li>
      <li class="step step-error">Authentification</li>
      <li class="step step-error">Paiement & transport</li>
      <li class="step">Confirmation</li>
    </ul>
  </div>
<div class="paiement">
  <h1>Récapitulatif</h1>

  <h2>Compte </h2>
<!--  <p>{{user.name}}</p>-->

  <h1>Livraison</h1>
  <div class="pays">
    <p>Pays de livraison </p>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Pays de livraison</span>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
  </div>

  <div class="livraison">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Boutique-gratuit</span>
        <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Livraison a domicile</span>
        <input type="radio" name="radio-10" class="radio checked:bg-red-500" checked />
      </label>
    </div>
  </div>
  <div>
    <h1>
      Adresse de livraison
    </h1>
    <div>
      <input type="text" placeholder="Nom" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Prénom" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Téléphone" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Socièté" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Code postal" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Ville" class="input input-bordered w-full max-w-xs" />
      <div>
      <input type="text" placeholder="Adresse" class="input input-bordered w-full max-w-xs" />
      <input type="text" placeholder="Information complementaire" class="input input-bordered w-full max-w-xs" />
    </div>
    </div>
  </div>
  <router-link to="/confirmation" class="btn btn-outline btn-error">Valider</router-link>

</div>

</template>

<style scoped>

</style>