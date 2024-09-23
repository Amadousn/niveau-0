<template>
    <div>
      <h2>Ajouter un produit</h2>
      <form @submit.prevent="ajouterProduit">
        <input v-model="nomProduit" placeholder="Nom du produit" />
        <input v-model="prixProduit" type="number" placeholder="Prix" />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nomProduit: '',
        prixProduit: ''
      };
    },
    methods: {
      ajouterProduit() {
        fetch('http://localhost:3000/produits', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nomProduit: this.nomProduit, prixProduit: this.prixProduit })
        })
        .then(() => {
          this.nomProduit = '';
          this.prixProduit = '';
        });
      }
    }
  };
  </script>