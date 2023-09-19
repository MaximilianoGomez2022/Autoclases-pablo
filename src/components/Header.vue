<template>
    <header>
        <div class="logo">
            <a href="index.html" id="logo">Autoclases Pablo</a>
        </div>
        <nav id="menu">
            <ul id="hamburguesa">
                <li><a href="#menu">abrir</a></li>
                <li><a href="#">cerrar</a></li>
            </ul>
            <ul id="barra">
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#cursos">Cursos</a></li>
                <li><a href="#redes">Redes</a></li>
            </ul>
        </nav>      
    </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #2a7654;
}

header {
    max-width: 1920px;
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    background: #FFF;
    z-index: 5;
    box-shadow: -1px 6px 5px 0px rgba(191,191,191,0.75);
    -webkit-box-shadow: -1px 6px 5px 0px rgba(191,191,191,0.75);
    -moz-box-shadow: -1px 6px 5px 0px rgba(191,191,191,0.75);
    height: 76px;
}

#logo {
    background: url(../assets/imgs/logo.svg);
    width: 206px;
    height: 102px;
    background-repeat: no-repeat;
    font-size: 0px;
    position: absolute;
    z-index: 1000;
    left: calc(50% - 88px);
    top: -13px
}

#hamburguesa li:last-child {
    display: none;
}

#barra {
    background: #161616;
    position: absolute;
    top: 5em;
    width: calc(100vw - 17px);
    height: calc(100vh - 4em);
    left: -100vw;
    transition: all 500ms;
    z-index: 10000;
    position: fixed;
    padding-top: 26px;
}

#barra li {
    width: 80%;
    margin: auto;
    margin: 1em;
    list-style: none;
}

#barra li a {
    background: #C60C1E;
    padding: 1em;
    display: block;
    color: white;
    text-decoration: none;
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
}

#barra li a:hover {
    background-color: #d81024;
}

#menu:target #hamburguesa li:first-child {
    display: none;
}

#menu:target #hamburguesa li:last-child {
    display: block;
}

#menu:target #barra {
    left: 0;
}

#hamburguesa li {
    top: 20px;
    position: absolute;
    right: -10px;
    z-index: 10000px;
    list-style: none;
    position: fixed;
}

#hamburguesa li:first-child a {
    width: 20px;
    height: 20px;
    display: block;
    text-indent: -700px;
    overflow: hidden;
    background: url(../assets/imgs/abrir-menu.svg) center center;
    background-size: cover;
    margin-top: 11px;
    margin-right: 10px;
}

#hamburguesa li:last-child a {
    width: 20px;
    height: 20px;
    display: block;
    text-indent: -700px;
    overflow: hidden;
    background: url(../assets/imgs/cerrar-menu.svg) center center;
    background-size: cover;
    margin-top: 11px;
    margin-right: 10px;
}

@media only screen and (min-width: 1200px) {

   header {
        height: 82px;
        display: flex;
        justify-content: flex-end;
        z-index: 3;
        left: 0;
        padding-right: 5em;
    }

    header nav {
    position: relative;
    background: #a34242;
    left: 0vw;
    width: 70%;
    transition: 0.7s;
    z-index: 5;
    height: 100%;
    flex: 1;
}

  .logo {
      padding: 1em 10px;
      font-size: 0;
      display: inline-block;
      height: 69px;
      left: 2%;
      flex: 1;
      margin-left: 5em;
  }

    #logo {
        background: url(../assets/imgs/logo.svg);
        background-repeat: no-repeat;
        width: 208px;
        height: 107px;
        font-size: 0;
        position: absolute;
        z-index: 1000;
        top: 2px;
        left: 40px;
    }


    #hamburguesa {
        display: none;
    }

    #barra {
        display: block;
        height: 69px;
        padding: 0;
        left: 0;
        top: 0;
        position: relative;
        width: 100%;
        background: none;
        text-align: right;
    }

    #barra li {
        display: inline-block;
        margin: 0;
        width: max-content;
    }


    #barra li a {
        font-size: 1.1em;
        margin: 0px;
        color: #161616;
        background-color: #ffffff;
        transition: all 1000ms;
        float: right;
        margin-left: 40px;
        margin-top: 11px;
        padding: 1em 10px;
    }

    #barra li a:hover {
        background: #ffffff;
        color: #C60C1E;
        transition: all 500ms;
    }

    header nav{
        background: transparent;
        background: none;
        z-index: 30000;
        transition: none;

    }

  .logo {
    flex: 1;
  }

  #menu {
    flex: 1;
  }
}
</style>