<template>
    <div class="topbar">
        <Slide>
            <router-link to="/">Inicio</router-link>
            <router-link to="/menu">Menú</router-link>
            <router-link to="/promociones">Promociones</router-link>
            <router-link to="/contacto">Contactanos</router-link>
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
            <carrito-icono v-if="$route.name != 'carrito'" />
            <router-link v-if="$route.name === 'carrito'" to="menu">Regresar a Menu</router-link>
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

    .cart-container {
        position:fixed;
        right: 30px;
        top: 30px;
        a {
            color: grey;
            font-weight: 900;
        }
    }
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