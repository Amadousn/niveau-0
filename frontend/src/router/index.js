import { createRouter, createWebHistory } from 'vue-router';
import PageProduits from '../views/Home.vue';  // On garde Home.vue mais avec le nom de composant changé
import AjouterProduit from '../views/AjouterProduit.vue';

const routes = [
  {
    path: '/',
    name: 'PageProduits',  // Nouveau nom du composant
    component: PageProduits
  },
  {
    path: '/ajouter',
    name: 'AjouterProduit',
    component: AjouterProduit
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;