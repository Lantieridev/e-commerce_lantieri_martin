// Definición de la clase Producto (aunque no se usará para crear instancias en este caso)
class Producto {
  constructor(titulo, detalle, precio, stock, imagen) {
      this.titulo = titulo;
      this.detalle = detalle;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
  }

  getAddress() {
      return `Mi producto es ${this.titulo}`;
  }
}

// Array de objetos con los productos (sin convertir a instancias de la clase)
const data = [
  {
    id: 1,
    title: "FC Barcelona Jersey 2020",
    team: "FC Barcelona",
    year: 2020,
    stock: 50,
    type: "Home",
    price: "$89.99",
    description: "Official FC Barcelona jersey for the 2020/21 season with traditional blue and red colors.",
    image: ""
  },
  {
    id: 2,
    title: "Manchester United Jersey 2019",
    team: "Manchester United",
    year: 2019,
    stock: 35,
    type: "Away",
    price: "$84.99",
    description: "Away jersey for the 2019/20 season in black with gold accents.",
    image: ""
  },
  // (resto de los productos)
];

// Cambiar el título de la página
const titulo = document.querySelector("h1");
titulo.innerText = "Productos";

// Mapeo de los productos para generar el HTML
const prod = data.map((producto) => `
<div class="col-lg-4 col-md-6 mb-4"> 
  <div class="card">
    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
    <div class="card-body">
      <h5 class="card-title">${producto.title}</h5>
      <p>${producto.description}</p>
      <a href="./producto/producto.html" class="btn btn-dark">Ver Más</a>
    </div>
  </div> 
</div>`);

// Insertar el HTML generado en el DOM
document.querySelector('section').innerHTML = prod.join('');

// Obtener el id del producto desde la URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('prod'));  // Convertir a número entero

// Buscar el producto que coincida con el id
const producto = data.find((prod) => prod.id === id);

// Crear el HTML dinámico del producto detallado
if (producto) {
const card = `
  <div class="card mb-3" style="width: 18rem;">
      <img src="${producto.image}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.title}">
      <div class="card-body">
          <h5 class="card-title">${producto.title} ${producto.id}</h5>
          <p class="card-text">${producto.description}</p>
          <p class="card-text">$${producto.price}</p>
          <p class="card-text">${producto.stock} unidades disponibles</p>
      </div>
  </div>`;

document.querySelector("main").innerHTML = card;
}
