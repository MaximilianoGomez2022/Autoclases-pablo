<template>
  <div>
    <Header/>
    <BannerComponent/> 
    <Cursos/>
    <Redes/>
    <Footer/>
    <div class="logo-wsp">
      <a href="https://api.whatsapp.com/send?phone=1558769034" target="_blank">
        <img src="https://cambiojuez.000webhostapp.com/api/wspp.png" alt="WhatsApp">
      </a>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import BannerComponent from './components/Banner-Component.vue'
import Cursos from './components/Cursos.vue'
import Redes from './components/Redes.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    BannerComponent,
    Cursos,
    Footer,
    Redes
  },
  data: () => ({
    cursos : []
  }),
  mounted:function(){

  fetch("https://cambiojuez.000webhostapp.com/api/cursos-todos.php")
  .then(response => response.json())
  .then(response => {
    this.cursos = response;
    console.log(typeof response)
    localStorage.setItem("cursos",JSON.stringify(this.cursos))})
  .catch( err => console.error(err),);
},}
</script>


<style>

header, body, footer {
  max-width: 1875px;
  margin: auto;
}

.logo-wsp {
  width: 70px;
  position: fixed;
  top: 80%;
  right: 2px;
} 

</style>
