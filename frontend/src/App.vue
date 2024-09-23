<template>
  <div id="app">
    <nav>
      <router-link to="/">Voir Produits</router-link> |
      <router-link to="/ajouter">Ajouter Produit</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>