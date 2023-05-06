<template>
    <div class="row justify-center combo">
        <div class="flex flex-col xs7 lg3 contenedor-izquierda">
            <h3>{{ nombre }}</h3>
            <p class="descripcion">{{ descripcion }}</p>
            <!-- <va-counter
                v-model="cantidad"
                messages="Cantidad"
                
            /> -->
            <va-button
                large
                color="warning"
                icon-color="#812E9E"
                class="mr-3 mb-2 price"
                @click="eliminarProductoCarrito"
            >
                Eliminar
            </va-button>
        </div>
        <div class="flex flex-col xs5 lg2">
            <img class="imagen-producto" :src="imagen" />
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default{
        name: "ComboPrecio",
        props: {
            nombre: String,
            descripcion: String,
            precio: Number,
            imagen: String,
            item: Object,
        },
        data(){
            return {
                cantidad: 1,
            };
        },
        watch:{
            'item.cantidad': {

            },
        },
        methods: {
            ...mapMutations(['quitarProducto',]),
            eliminarProductoCarrito() {
                const { item, quitarProducto } = this;
                quitarProducto(item);
            },
            cambioCantidad(item) {
                console.log(item);
                // eslint-disable-next-line no-debugger
                debugger;
            },
        },
    }
</script>

<style scoped>
    .contenedor-izquierda {
        padding: 5px 25px;
        text-align: left;
    }
    h3 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 1.2;
        margin-bottom: 8px;
        /* line-height: 50px; */
        /* identical to box height, or 250% */
        /* margin-bottom: 5px; */
        color: #000000;
    }
    p.descripcion {
        margin-bottom: 25px;
        /* padding: 0 25px; */
    }
    button {
        background: #EDAF11;
        padding: 2px 20px;
    }
    .imagen-producto {
        height: 143px;
        width: 143px;
        object-fit: contain;
        background-color: white;
        padding: 15px;
        border-radius: 5px;
    }
    .combo {
        background-color: #EAEAEA;
        border-bottom: 1px solid #DCDCDC;
    }
    @media only screen and (min-width: 375px) {
        .price {
            min-width: 180px;
        }
    }
</style>