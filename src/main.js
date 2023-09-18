import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/estilos.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted() {
    AOS.init({
      duration: 1500,
      once: true,
      delay: 100,
  }); // Inicialice AOS después de que Vue esté completamente cargado
  },
}).$mount('#app')
