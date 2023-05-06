import { createStore } from 'vuex'

export default createStore({
  state: {
    carrito: [
      // {
      //   id: 1,
      //   nombre: "Combo 1",
      //   descripcion: "Hamburguesa con papas y bebida",
      //   tipo: "combo",
      //   precio: 45.00,
      //   imagen: "combo1.png",
      //   cantidad: 1,
      // },
    ]
  },
  getters: {
  },
  mutations: {
    agregarProducto(state, producto) {
      // Buscamos si el producto ya existe o no
      // Si existe, aumentar cantidad
      const productoEnCarrito = state.carrito.find(productoCarrito => productoCarrito.id === producto.id);
      if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
      } else {
        producto.cantidad = 1;
        state.carrito.push(producto)
      }
    },
    quitarProducto(state, producto) {
      const nuevoCarrito = state.carrito.filter(productoCarrito => productoCarrito.id !== producto.id);
      state.carrito = nuevoCarrito;
    },
    modificarExistencias(state, producto) {
      const nuevoCarrito = state.carrito.filter(productoCarrito => productoCarrito.id !== producto.id);
      state.carrito = nuevoCarrito;
    },
  },
  actions: {
  },
  modules: {
  }
})
