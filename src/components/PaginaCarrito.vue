<template>
    <div >
        <SlideMenu />
        <div class="grid grid-cols-1 items-start">
            <ComboCarrito
                v-for="elemento in carrito"
                :key="elemento.id"
                :id="elemento.id"
                :nombre="elemento.nombre"
                :descripcion="elemento.descripcion"
                :precio="elemento.precio"
                :imagen="elemento.imagen"
                :eliminarCarrito="eliminarCarrito"
            ></ComboCarrito>
        </div>
    </div>
</template>

<script>
    import SlideMenu from './SlideMenu.vue';
    import ComboCarrito from './ComboCarrito.vue';

    export default {
        components: {
            SlideMenu,
            ComboCarrito
        },
        data() {
            return {
                carrito: []
            }
        },
        mounted() {
            const carritoLocal = localStorage.getItem('carrito');
            this.carrito = carritoLocal ? JSON.parse(carritoLocal) : [];
        },
        methods: {
            eliminarCarrito(id) {
                const elementos = this.carrito.filter((elemento) => elemento.id !== id);
                this.carrito = elementos;
                localStorage.setItem('carrito',JSON.stringify(this.carrito));
            }
        }
    }
</script>

<style>
    
    .topbar {
        height: 100px;
    }
    .sobre {
        position: absolute;
        top: 150px;
        width: 100%;
        text-align: center;
    }
    .titulo {
        
       
        left: 80px;
        font-family: 'Pacifico';
        font-style: normal;
        font-weight: 400;
        font-size: 48px;
        line-height: 50px;
        /* or 109% */
        align-items: center;
        text-align: center;

        color: #FFFFFF;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .va-image.portada {
        height: 550px;
    }
    .button-primary {
        position: absolute;
        top: 500px;
        left: 35%;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background: #EDAF11;
        width: 131px;
        height: 38px;
    }
    .button-container {
        width: 100%;

    }
    .contenedor-filtros {
        margin-bottom: 25px;
        display: flex;
        gap: 25px;
        justify-content: center;
    }
    .item-lista {
        padding: 15px 0;
    }
</style>