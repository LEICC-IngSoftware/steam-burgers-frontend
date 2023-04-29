<template>
    <div class="row justify-center">
        <div class="flex flex-col xs7 lg2 contenedor-izquierda">
            <h3>{{ nombre }}</h3>
            <p class="descripcion">{{ descripcion }}</p>
            <button>Q.{{ precio }}</button>
        </div>
        <div class="flex flex-col xs5 lg2">
            <img class="imagen-producto" :src="imagen" />
        </div>
    </div>
</template>

<script>
    export default{
        name: "ComboPrecio",
        props: {
            nombre: String,
            descripcion: String,
            precio: Number,
            imagen: String
        }
    }
</script>

<style scoped>
    .contenedor-izquierda {
        padding: 25px;
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
</style>