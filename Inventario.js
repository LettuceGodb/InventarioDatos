export class Inventario {
    constructor() {
        this.inventario = [];
    }

    agregar(nuevoProducto) {
        this.inventario.push(nuevoProducto);
    }

    buscar(codigo) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].codigo === codigo) {
                return this.inventario[i];
            }
        }
        return null;
    }

    eliminar(codigo) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].codigo === codigo) {
                for (let j = i; j < this.inventario.length - 1; j++) {
                    this.inventario[j] = this.inventario[j + 1];
                }
                this.inventario.pop();
                return true;
            }
        } 
        return null;
    }

    insertar(nuevo, posicion) {
        for (let i = this.inventario.length; i > posicion; i--) {
            this.inventario[i] = this.inventario[i - 1];
        }
        this.inventario[posicion] = nuevo;
    }

    listar() {
        let resultado = "";
        for (let i = 0; i < this.inventario.length; i++) {
            resultado += this.inventario[i].infoHTML();
        }
        return resultado;
    }

    listarInverso() {
        let resultado = "";
        for (let i = this.inventario.length - 1; i >= 0; i--) {
            resultado += this.inventario[i].infoHTML();
        }
        return resultado;
    }

    extraerPrimero() {
        if (this.inventario.length === 0) return null;
        const primerProducto = this.inventario[0];
        this.eliminar(primerProducto.codigo);
        return primerProducto;
    }

    agregarInicio(nuevo) {
        for (let i = this.inventario.length; i > 0; i--) {
            this.inventario[i] = this.inventario[i - 1];
        }
        this.inventario[0] = nuevo;
    }
}