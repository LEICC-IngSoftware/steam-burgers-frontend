<template>
    <div class="carrito-icono">
        <router-link to="/carrito">
            <div v-show="items > 0" class="notificacion">{{ items }}</div>
            <i class="icono fa-solid fa-cart-shopping"></i>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
           
        };
    },
    computed: {
        ...mapState(['carrito']),
        items() {
            const { carrito } = this;
            if(!carrito || !Array.isArray(carrito) || carrito.length === 0) {
                return 0;
            }
            return carrito.length;
        },
    },
}
</script>
<style lang="scss">
.carrito-icono {
    padding: 15px;
    border-radius: 50%;
    transition: all 125ms;
    min-width: 50px;
    min-height: 50px;
    // margin: 20px;
    
    a {
        color: grey;
    }

    position: relative;
    right: 0;
    &:hover {
        cursor: pointer;
        background-color: grey;
        .icono {
            color:white;
        }
    }

    .icono {
        font-size: 30px;
        transition: all 125ms;
    }
    .notificacion {
        position: absolute;
        right: 5px;
        top: 3px;
        background-color: tomato;
        padding: 5px;
        border-radius: 50%;
        color: white;
        font-size: 12px;
        font-weight: 900;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>