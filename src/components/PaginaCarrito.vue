<template>
    <div >
        <SlideMenu />
        
        <div class="grid grid-cols-1 items-start">
            <pre>
                {{ this.carrito }}
            </pre>
            <ComboPrecio 
                class="item-lista"
                v-for="item in carrito" 
                :key="`item-${item.id}`" 
                :nombre="item.nombre" 
                :descripcion="item.descripcion" 
                :precio="item.precio" 
                :imagen="item.imagen"
            ></ComboPrecio>
        </div>
    </div>
</template>

<script>
    import SlideMenu from './SlideMenu.vue';
    import ComboPrecio from './ComboPrecio.vue';
    import { mapState } from 'vuex';

    export default {
        components: {
            SlideMenu,
            ComboPrecio
        },
        data() {
            
        },
        computed: {
            ...mapState(['carrito'])
        },
        methods: {
            filtrarMenu() {
                this.itemsFiltrados = this?.itemsMenu?.filter((item) => item.tipo === this.filtro);
            },
            setFiltro(filtro) {
                this.filtro = filtro;
            }
        },
        watch: {
            filtro() {
                this.filtrarMenu();
            },
        },
        mounted() {
            // this.filtrarMenu();
        },
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