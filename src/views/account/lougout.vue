
<script setup>
import authService from '@/services/authService.js'

const logout = async () => {
  try {
    await authService.logout()
    // Redirigez l'utilisateur vers la page de connexion après une déconnexion réussie
    router.push('/login')
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error)
  }
}

// Déconnectez l'utilisateur dès que le composant est monté
// function handleLogout() {
//   fetcher('post', 'logout').then(response => {
//     if (response.status === 200) {
//       user.value = null
//       localStorage.removeItem('auth')
//     } else {
//       console.error(response)
//     }
//   })
// }
</script>

<template>
  <!-- Vous pouvez afficher un message de déconnexion ici -->
  <p>Vous êtes en train de vous déconnecter...</p>
</template>tyle>