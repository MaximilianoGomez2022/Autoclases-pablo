<template>
<section class="cursos" id="cursos">
 <h2>NUESTROS CURSOS</h2>
 <article v-for="curso in items" :key="curso.curso_id">
  <figure>                  
      <picture>
          <source media="(max-width: 355px)" srcset="../assets/imgs/cursos-cel-355.jpg">
          <source media="(max-width: 576px)" srcset="../assets/imgs/cursos-cel.jpg">
          <img src="../assets/imgs/cursos-dektop-2.png" alt="Estacion espacial Inernacional">
      </picture>
  </figure>
    <div class="contenedor-article">
    <h2>{{curso.nombre}}</h2>
    <div class="texto">
    <p class="parr-1">{{curso.parrafo_1}}</p>
    <p class="parr-2">{{curso.parrafo_2}}</p> 
    </div>
    <p class="precio-1">{{curso.precio_1}}</p>
    <p v-if="curso.precio_2 !==null" class="precio-2">{{curso.precio_2}}</p>
  </div>
 </article>
</section>
</template>

<script>
  export default{
      name: "Cursos",
      data() {
      return {
      items: [],
    };
  },
  mounted:function(){
      this.items=JSON.parse(localStorage.getItem("cursos"))
  },
}
</script>

<style scoped>

.cursos article {
  padding: 0px 0;
  position: relative;
  margin-bottom: 2.6em;
}

.texto {
  padding: 20px;
}

.cursos article .contenedor-article {
  position: absolute;
  top: 120px;
}

.cursos > :nth-child(2) {
  max-width: 1885px;
}

.cursos > :nth-child(3) {
  max-width: 1885px;
}

.cursos > :nth-child(4) {
  max-width: 1885px;
  color: black;
  margin-bottom: -45px;
}

.cursos > article h2 {
  font-size: 1.6em;
  margin-bottom: 20px;
  color: white;
  background: #C60C1E;
}

.cursos > article .parr-1 {
  color: white;
  font-size: 1.2em;
  margin: auto;
  margin-bottom: 20px;
}

.cursos > article .parr-2 {
  color: white;
  font-size: 1.2em;
  margin: auto;
  margin-bottom: 0px;
}

.cursos .precio-1 {
  background-color: #C60C1E;
  padding: 10px 20px;
  font-size: 1.4em;
  font-weight: 600;
  width: 90%;
  margin-bottom: 18px;
  color: white;
  clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
}

.cursos .precio-2 {
  background-color: #C60C1E;
  padding: 10px 20px;
  font-size: 1.4em;
  font-weight: 600;
  width: 90%;
  margin-bottom: 20px;
  color: white;
  clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
}

.cursos h2 {
  text-align: center;
  margin-bottom: 20px;
}

@media only screen and (max-width: 317px) {

  .cursos article .contenedor-article {
    position: absolute;
    top: 100px;
}

  .texto {
    padding: 8px;
  }

}

@media only screen and (min-width: 1200px) {

.cursos h2 {
  font-size: 3em;
  margin-bottom: 10px;
}

.cursos article {
  padding: 40px 0;
  margin-bottom: 4em;
}

.cursos article .contenedor-article {
  position: absolute;
  top: 120px;
  width: 100%;
  margin: auto;
}

.cursos > article h2 {
  color: white;
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  background: none;
  padding-left: 0;
}

.cursos > article .parr-1 {
  color: white;
  font-size: 1.4em;
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
}

.cursos > article .parr-2 {
  color: white;
  font-size: 1.4em;
  width: 60%;
  margin: auto;
  margin-bottom: 40px;
}

.cursos .precio-1 {
  background-color: #C60C1E;
  padding: 10px 132px;
  font-size: 2.2em;
  font-weight: 600;
  color: white;
  width: max-content;
  margin: auto;
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
  margin-bottom: 2em;
}

.cursos .precio-2 {
  background-color: #C60C1E;
  padding: 10px 132px;
  font-size: 2.2em;
  font-weight: 600;
  color: white;
  width: max-content;
  margin: auto;
  clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
}


} 


</style>