export class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
    }
    
    info() {
        return `Código: ${this.codigo}, Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Costo: $${this.costo}`;
    }

    infoHTML() {
        return `
        <div style="border-bottom: 1px solid #ccc; margin-bottom: 10px;">
            <p><strong>Código:</strong> ${this.codigo}</p>
            <p><strong>Nombre:</strong> ${this.nombre}</p>
            <p><strong>Cantidad:</strong> ${this.cantidad}</p>
            <p><strong>Costo:</strong> $${this.costo}</p>
        </div>`;
    }
}