<template>
    <div>
        <SlideMenu />
        <div class="grid grid-cols-1 items-start">
            <ComboPrecio nombre="Combo 1" descripcion="Combo de hamburguesa" precio="45.00" imagen="combo1.png"></ComboPrecio>
            <ComboPrecio nombre="Combo 2" descripcion="Combo de hamburguesa" precio="45.00" imagen="combo1.png"></ComboPrecio>
        </div>
    </div>
</template>

<script>
    import SlideMenu from './SlideMenu.vue';
    import ComboPrecio from './ComboPrecio.vue';
    export default {
        components: {
            SlideMenu,
            ComboPrecio
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
</style>