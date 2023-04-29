<template>
    <div>
        <SlideMenu />
        <div class="grid grid-cols-1 items-start">
            <va-image 
                fit="cover"
                class="w-full portada"
                height="100%"
                src="/portada.jpg" />
            <div class="sobre">
                <div class="titulo">Steam Burgers</div>
            </div>
            <div class="button-container">
                <router-link to="/menu">
                    <button class="button-primary">Ver menu</button>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    import SlideMenu from './SlideMenu.vue';
    export default {
        components: {
            SlideMenu // Register your component
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