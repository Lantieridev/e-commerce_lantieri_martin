let categorias = [
    {titulo : "Camisetas", link : "/camisetas"}, 
    {titulo : "Pantalones", link : "/pantalones"},
    {titulo : "Medias", link : "/medias"},
];

let menu = [];  

for (let item of categorias) {
    menu.push(`<a class="nav-link" href="${item.link}">${item.titulo}</a>`);
}

document.querySelector("header").innerHTML = menu.join("");  
