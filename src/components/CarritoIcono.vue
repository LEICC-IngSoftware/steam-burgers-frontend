<template>
    <div class="carrito-icono">
        <router-link to="/carrito">
            <div class="notificacion">{{ items }}</div>
            <i class="icono fa-solid fa-cart-shopping"></i>
        </router-link>
    </div>
</template>
<script>

export default {
    data() {
        return {
           items: 0
        };
    },
    computed: {
    },
    mounted() {
        this.items = JSON.parse(localStorage.getItem('carrito')).length;
        this.emitter.on('cantidadCarrito', value => this.items = value)
    },
    beforeUnmount() {
        this.emitter.all.clear()
    }
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