let tituloProducto = document.querySelector("title");
let detalleProducto = document.querySelector("detalle")
let precioProducto = document.querySelector("precio")
let stockProducto = document.querySelector("stock")
let imagenProducto = document.querySelector("imagenProducto")
class Producto {
    constructor(titulo,detalle,precio,stock,imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio; 
        this.stock = stock;
        this.imagen = imagen
    }
}

const casacaRiver = new Producto("Camiseta River 2024", "River local", "$114.999", 4, src="./img/casaca river.webp" )

console.log(casacaRiver)

tituloProducto.innerHTML = ${casacaRiver.titulo};
detalleProducto.innerHTML = ${casacaRiver.detalle};
