<template>
    <div>
      <h2>Liste des produits</h2>
      <ul>
        <li v-for="produit in produits" :key="produit._id">
          {{ produit.nomProduit }} - {{ produit.prixProduit }} €
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageProduits',  // Nom multi-mots pour éviter l'erreur ESLint
    data() {
      return {
        produits: []
      };
    },
    mounted() {
      fetch('http://localhost:3000/produits')
        .then(response => response.json())
        .then(data => {
          this.produits = data;
        });
    }
  };
  </script>