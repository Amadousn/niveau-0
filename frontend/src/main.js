import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Utilise le router pour naviguer entre les pages

createApp(App)
  .use(router)
  .mount('#app');