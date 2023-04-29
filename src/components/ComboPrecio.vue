<template>
    <div class="row justify-center">
        <div class="flex flex-col xs6 lg2 ">
            <h3>{{ nombre }}</h3>
            <p>{{ descripcion }}</p>
            <button>Q.{{ precio }}</button>
        </div>
        <div class="flex flex-col xs6 lg2">
            <img :src="imagen" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComboPrecio",
        props: {
            nombre: String,
            descripcion: String,
            precio: Number,
            imagen: String
        }
    }
</script>

<style>
    h3 {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 50px;
        /* identical to box height, or 250% */

        color: #000000;
    }
    p {
        margin-bottom: 5px;
    }
    button {
        background: #EDAF11;
        padding: 2px 20px;
    }
</style>