let categorias = [
    {titulo : "Camisetas", link : "#"}, 
    {titulo : "Pantalones", link : "#"},
    {titulo : "Medias", link : "#"},
];

let menu = [];  

for (let item of categorias) {
    menu.push(`<a class="nav-link" href="${item.link}">${item.titulo}</a>`);
}

document.querySelector("header").innerHTML = menu.join("");  