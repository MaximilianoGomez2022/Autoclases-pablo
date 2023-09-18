<template>
<section class="banner-portada">
        <div id="texto-banner" class="container">
            <h2>AUTOCLASES PABLO</h2>
            <p>Clases de manejo a domicilio</p>
            <p>Alquilamos el auto para llevarte a rendir</p>
        </div>
        <figure>                  
            <picture >
                <source media="(max-width: 576px)" srcset="../assets/imgs/portada-cel-355.jpg">
                <source media="(max-width: 768px)" srcset="../assets/imgs/banner-tablet-04.jpg">
                <img src="../assets/imgs/banner-desktop-03.jpg" alt="imgs/banner de portada iagen de un tablero de un auto">
            </picture>
        </figure>
        <div class="contenedor div-portada" id="servicios">
        <div class="item" data-aos="fade-up">
            <img src="../assets/imgs/pastilla-1.png" alt="" srcset="">
            <h2>DOBLE COMANDO</h2>
            <p>jwoeghskdj dshjisdghiohdsg hiosdhgoihdsg ihodsdihgoh</p>
        </div>
        <div class="item" data-aos="fade-up">
            <img src="../assets/imgs/pastilla-2.png" alt="" srcset="">
            <h2>FORMAS DE PAGO</h2>
            <p>jwoeghskdj dshjisdghiohdsg hiosdhgoihdsg ihodsdihgoh</p>
        </div>
        <div class="item" data-aos="fade-up">
            <img src="../assets/imgs/pastilla-3.png" alt="" srcset="">
            <h2>UBICACIÓN</h2>
            <p>jwoeghskdj dshjisdghiohdsg hiosdhgoihdsg ihodsdihgoh</p>
        </div>
        <div class="item" data-aos="fade-up">
            <img src="../assets/imgs/pastilla-4.png" alt="" srcset="">
            <h2>HORARIOS</h2>
            <p>jwoeghskdj dshjisdghiohdsg hiosdhgoihdsg ihodsdihgoh</p>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style scoped>

    .item {
        text-align: center !important;
        margin-bottom: 2.6em;
    }

    .banner-portada {
        margin-top: 125px;
        margin-bottom: 55px;
    }

    #texto-banner {
        text-align: center;
        position: absolute;
        top: 200px;
        left: 0px;
        text-align: center;
        padding: 0px 10px;
        color: white;
        width: 100%;
    }

    #texto-banner h2 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }

        #texto-banner p {
        margin-bottom: 20px;
    }

    .item img {
        max-width: 200px;
    }

    @media only screen and (min-width: 1200px) {
    .banner-portada {
        margin-top: 25px;
    }

        #texto-banner h2 {
        font-size: 4em;
        margin-bottom: 30px;
    }

        #texto-banner p {
        margin-bottom: 30px;
        font-size: 1.6em;
    }

    .item p {
        width: 90%;
        margin: auto;
        font-size: 1.4em;
    }

    }

</style>

