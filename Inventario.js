export class Inventario {
    constructor() {
        this.inventario = [];
    }

agregar(nuevoProducto) {
    const codigo = nuevoProducto.codigo;

    if (this.inventario.length === 0) {
        this.inventario.push(nuevoProducto);
        return; 
    }

    if (this.buscar(codigo) !== null) {
        return null;
    }

    if (codigo > this.inventario[this.inventario.length - 1].codigo) {
        this.inventario.push(nuevoProducto);
    } else if (codigo < this.inventario[0].codigo) {
        this.agregarInicio(nuevoProducto);
    } else {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].codigo > codigo) {
                this.insertar(nuevoProducto, i);
                break;
            }
        }
    }
}

buscar(codigo) {
    let inicio = 0;
    let fin = this.inventario.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        let productoActual = this.inventario[medio];

        if (productoActual.codigo === codigo) {
            return productoActual;
        }
        if (productoActual.codigo < codigo) {
            inicio = medio + 1;
        }
        else {
            fin = medio - 1;
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

    extraerUltimo() {
        if (this.inventario.length === 0) return null;
        const ultimoProducto = this.inventario[this.inventario.length-1];
        this.eliminar(ultimoProducto.codigo);
        return ultimoProducto;
    }

    agregarInicio(nuevo) {
        for (let i = this.inventario.length; i > 0; i--) {
            this.inventario[i] = this.inventario[i - 1];
        }
        this.inventario[0] = nuevo;
    }
}