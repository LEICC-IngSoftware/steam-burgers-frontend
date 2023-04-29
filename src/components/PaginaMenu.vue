<template>
    <div>
        <SlideMenu />
        <div class="contenedor-filtros mb-10">
            <va-button
                :color="filtro === 'combo' ? 'danger' : 'warning'"
                class="mr-6 mb-2"
                @click="setFiltro('combo')"
            >
                Combo
            </va-button>
            <va-button
                :color="filtro === 'individual' ? 'danger' : 'warning'"
                class="mr-6 mb-2"
                @click="setFiltro('individual')"
            >
                Individual
            </va-button>
            <va-button
                :color="filtro === 'bebida' ? 'danger' : 'warning'"
                class="mb-2"
                @click="setFiltro('bebida')"
            >
                Bebidas
            </va-button>
        </div>
        <div class="grid grid-cols-1 items-start">
            <ComboPrecio 
                class="item-lista"
                v-for="item in itemsFiltrados" 
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
    export default {
        components: {
            SlideMenu,
            ComboPrecio
        },
        data() {
            return {
                filtro: 'combo',
                itemsFiltrados: [],
                itemsMenu: [
                    {
                        id: 1,
                        nombre: "Combo 1",
                        descripcion: "Hamburguesa con papas y bebida",
                        tipo: "combo",
                        precio: 45.00,
                        imagen: "combo1.png"
                    },
                    {
                        id: 2,
                        nombre: "Combo 2",
                        descripcion: "Hamburguesa con papas, bebida y postre",
                        tipo: "combo",
                        precio: 55.00,
                        imagen: "combo1.png"
                    },
                    {
                        id: 3,
                        nombre: "Combo 3",
                        descripcion: "Pizza personal bebida y postre",
                        tipo: "combo",
                        precio: 55.00,
                        imagen: "pizza.jpg"
                    },
                    {
                        id: 4,
                        nombre: "Pizza individual personal",
                        descripcion: "Pizza individual personal del sabor de su elección",
                        tipo: "individual",
                        precio: 25.00,
                        imagen: "pizza.jpg"
                    },
                    {
                        id: 5,
                        nombre: "Hamburguesa simple",
                        descripcion: "Deliciosa hamburguesa hecha con ingredientes frescos",
                        tipo: "individual",
                        precio: 25.00,
                        imagen: "combo1.png"
                    },
                    {
                        id: 6,
                        nombre: "Bebida en lata",
                        descripcion: "Coca cola, sprite, fanta o pepsi",
                        tipo: "bebida",
                        precio: 5.00,
                        imagen: "latas.jpg"
                    },
                    {
                        id: 7,
                        nombre: "Bebida en botella",
                        descripcion: "Coca cola, sprite, fanta o pepsi",
                        tipo: "bebida",
                        precio: 10.00,
                        imagen: "sodabotella.jpg"
                    },
                    {
                        id: 8,
                        nombre: "Bebida natural",
                        descripcion: "Rosa de Jamaica, naranjada o limonada",
                        tipo: "bebida",
                        precio: 10.00,
                        imagen: "bebidasnaturales.jpg"
                    },
                ], 
            };
        },
        methods: {
            filtrarMenu() {
                this.itemsFiltrados = this.itemsMenu.filter((item) => item.tipo === this.filtro);
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
            this.filtrarMenu();
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