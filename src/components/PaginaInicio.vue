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
            <router-link to="/menu" class="button-image">
                <va-button
                    color="warning"
                    class="button"
                    size="large"
                    gradient
                >
                    Ver menu
                </va-button>
            </router-link>
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
        position:relative;

    }
    .button-image {
        position:absolute;
        bottom:30%;
        right:50%;
        width:200px;
        height:40px;
        margin: 0px -100px -20px 0px;
    }
    .button {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        background: #EDAF11;
    }
    .button-container {
        width: 100%;

    }
</style>