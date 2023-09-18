<template>
<section class="redes" id="redes">
    <h2>NUESTRAS REDES</h2>
    <div class="contenedor-redes div-portada">
    <div class="item" data-aos="fade-up">
        <a href=""><i class="fa-brands fa-instagram"></i></a>
        <p>@AUTOCLASESPABLO</p>
    </div>
    <div class="item" data-aos="fade-up">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <p>@AUTOCLASESPABLO</p>
    </div>
    <div class="item" data-aos="fade-up">
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        <p>11-55-6666-77</p>
    </div>
    </div>
</section>
</template>

<script>
  export default{
      name: "Footer"
  }
</script>

<style scoped>

.redes {
    background: #131313;
    margin-top: 2em;
}

h2 {
  font-size: 2em;
  margin-bottom: 80px;
  text-align: center;
  color: #b3b3b3;
}

.redes p {
    color: white;
    margin-top: 20px;
    font-size: 1.3em;
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
    background-color: #C60C1E;
    width: 90%;
    margin: auto;
    text-align: center;
    padding: 12px;
    margin-bottom: 40px;
}

.fa-instagram, .fa-facebook-f, .fa-whatsapp {
    font-size: 50px;
    color: #b3b3b3;
    margin-bottom: 40px;
    margin: auto;
}

.contenedor-redes {
    width: 100%;
    margin: auto;
    text-align: center;
}

.redes {
    padding: 6em 0;
}

.redes i {
    margin-bottom: 20px;
}

@media only screen and (min-width: 1200px) {

.contenedor-redes {
    display: flex;
    width: 70%;
    margin: auto;
}

h2 {
  font-size: 3em;
  margin-bottom: 60px;
  text-align: center;
  color: #b3b3b3;
}

.redes {
    padding: 12em 0;
    margin-top: 0;
}

.fa-instagram, .fa-facebook-f, .fa-whatsapp {
    font-size: 100px;
    color: #b3b3b3;
    margin-bottom: 40px;
}

.redes p {
    color: white;
    margin-top: 20px;
    font-size: 1.3em;
    clip-path: polygon(10% 0, 100% 0%, 90% 100%, 0% 100%);
    background-color: #C60C1E;
    width: 90%;
    margin: auto;
    text-align: center;
    padding: 15px;
}

}


</style>