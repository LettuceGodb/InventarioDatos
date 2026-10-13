import { Producto } from "./Producto.js";
import { Inventario } from "./Inventario.js";

const miInventario = new Inventario();
const divDetalles = document.getElementById("detalles");

document.getElementById("btnAgregar").addEventListener("click", () => {
    const codigo = Number(document.getElementById("codigo").value);
    const nombre = document.getElementById("nombre").value;
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);

    if (codigo && nombre && cantidad && precio) {
        const nuevoProducto = new Producto(codigo, nombre, cantidad, precio);
        miInventario.agregar(nuevoProducto);
        document.querySelector("form").reset();
        divDetalles.innerHTML = `<p>Se agregó el producto: ${nombre}</p>`;
    } else {
        divDetalles.innerHTML = `<p>Error: Faltan datos por llenar</p>`;
    }
});

document.getElementById("btnListar").addEventListener("click", () => {
    const lista = miInventario.listar();
    divDetalles.innerHTML = lista ? lista : "<p>El inventario está vacío.</p>";
});

document.getElementById("btnListarInverso").addEventListener("click", () => {
    const listaInversa = miInventario.listarInverso();
    divDetalles.innerHTML = listaInversa ? listaInversa : "<p>El inventario está vacío.</p>";
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    const codigo = Number(document.getElementById("codigo").value);
    const producto = miInventario.buscar(codigo);
    
    if (producto) {
        divDetalles.innerHTML = producto.infoHTML();
    } else {
        divDetalles.innerHTML = `<p>No se encontró ningún producto con el codigo: ${codigo}</p>`;
    }
});

document.getElementById("btnEliminar").addEventListener("click", () => {
    const codigo = Number(document.getElementById("codigo").value);
    const eliminado = miInventario.eliminar(codigo);
    
    if (eliminado) {
        divDetalles.innerHTML = `<p>Se eliminó el producto con código: ${codigo}</p>`;
    } else {
        divDetalles.innerHTML = `<p>No se pudo eliminar, el código ${codigo} no existe.</p>`;
    }
});

document.getElementById("btnAgregarInicio").addEventListener("click", () => {
    const codigo = Number(document.getElementById("codigo").value);
    const nombre = document.getElementById("nombre").value;
    const cantidad = Number(document.getElementById("cantidad").value);
    const precio = Number(document.getElementById("precio").value);

    if (codigo && nombre && cantidad && precio) {
        const nuevoProducto = new Producto(codigo, nombre, cantidad, precio);
        miInventario.agregarInicio(nuevoProducto);
        document.querySelector("form").reset();
        divDetalles.innerHTML = `<p>Se agregó el producto: ${nombre}</p>`;
    } else {
        divDetalles.innerHTML = `<p>Error: Faltan datos por llenar</p>`;
    }
});

document.getElementById("btnExtraerPrimero").addEventListener("click", () => {
   const extraido = miInventario.extraerPrimero();
    if (extraido === null) {
        divDetalles.innerHTML = `<p>La lista esta vacia.</p>`;
    } else {
        divDetalles.innerHTML = extraido.infoHTML();
    }
});

document.getElementById("btnExtraerUltimo").addEventListener("click", () => {
    const extraido = miInventario.extraerUltimo();
    if (extraido === null) {
        divDetalles.innerHTML = `<p>La lista esta vacia.</p>`;
    } else {
        divDetalles.innerHTML = extraido.infoHTML();
    }
});