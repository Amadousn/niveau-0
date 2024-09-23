const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/monprojetdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware pour traiter les données JSON
app.use(express.json());

// Modèle de produit
const Produit = mongoose.model('Produit', { nomProduit: String, prixProduit: Number });

// Obtenir tous les produits
app.get('/produits', (req, res) => {
  Produit.find((err, produits) => res.json(produits));
});

// Ajouter un produit
app.post('/produits', (req, res) => {
  const produit = new Produit(req.body);
  produit.save(() => res.json(produit));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur backend sur http://localhost:${port}`);
});