<template>
    <div class="topbar">
        <Slide>
            <a id="home" href="#">
                <router-link to="/"><span>Inicio</span></router-link>
            </a>
            <a id="home" href="#">
                <router-link to="/menu">Menú</router-link>
            </a>
            <a id="home" href="#">
                <span>Promoción</span>
            </a>
            <a id="home" href="#">
                <span>Contacto</span>
            </a>
            <div class="row iconos gap-4">
                <div class="flex flex-col">
                    <img class="icono" src="/Facebook.png" />
                </div>
                <div class="flex flex-col">
                    <img class="icono" src="/Twitter.png" />
                </div>
                <div class="flex flex-col">
                    <img class="icono" src="/TikTok.png" />
                </div>
            </div>
        </Slide>
        <div class="cart-container">
            <carrito-icono />
        </div>
    </div>
</template>

<script>
  import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
  import CarritoIcono from '@/components/CarritoIcono.vue'  // import the CSS transitions you wish to use, in this case we are using `Slide`

    export default {
        components: {
            CarritoIcono,
            Slide // Register your component
        }
    }
</script>

<style lang="scss">
    .bm-menu {
        background-color: #FFFFFF;
        color: #000000;
    }
    .bm-item-list>*>span {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 50px;
        /* or 250% */

        display: flex;
        align-items: center;

        color: #000000;

    }
    .iconos {
        height: 50px;
    }
</style>