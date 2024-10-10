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
    {
      id: 3,
      title: "River Plate Jersey 2021",
      team: "River Plate",
      year: 2021,
      stock: 45,
      type: "Home",
      price: "$79.99",
      description: "Home jersey of River Plate 2021, featuring the classic red diagonal stripe across the chest.",
      image: ""
    },
    {
      id: 4,
      title: "Juventus Jersey 2022",
      team: "Juventus",
      year: 2022,
      stock: 60,
      type: "Home",
      price: "$94.99",
      description: "Juventus home jersey for the 2022/23 season, with the iconic black and white stripes.",
      image: ""
    },
    {
      id: 5,
      title: "Boca Juniors Jersey 2021",
      team: "Boca Juniors",
      year: 2021,
      stock: 25,
      type: "Home",
      price: "$82.99",
      description: "Home jersey of Boca Juniors 2021 with the traditional blue and gold colors.",
      image: ""
    },
    {
      id: 6,
      title: "Real Madrid Jersey 2020",
      team: "Real Madrid",
      year: 2020,
      stock: 40,
      type: "Away",
      price: "$90.00",
      description: "Away jersey for the 2020/21 season in pink with white accents.",
      image: ""
    },
    {
      id: 7,
      title: "Bayern Munich Jersey 2019",
      team: "Bayern Munich",
      year: 2019,
      stock: 50,
      type: "Home",
      price: "$85.00",
      description: "Home jersey of Bayern Munich 2019/20 with the traditional red color.",
      image: ""
    },
    {
      id: 8,
      title: "PSG Jersey 2021",
      team: "Paris Saint-Germain",
      year: 2021,
      stock: 55,
      type: "Home",
      price: "$99.99",
      description: "PSG official jersey for the 2021/22 season, in navy blue with red details.",
      image: ""
    },
    {
      id: 9,
      title: "AC Milan Jersey 2020",
      team: "AC Milan",
      year: 2020,
      stock: 30,
      type: "Home",
      price: "$87.50",
      description: "AC Milan home jersey with the iconic red and black stripes.",
      image: ""
    },
    {
      id: 10,
      title: "Inter Milan Jersey 2021",
      team: "Inter Milan",
      year: 2021,
      stock: 48,
      type: "Away",
      price: "$89.50",
      description: "Inter Milan away jersey with a modern design in white and black.",
      image: ""
    },
    {
      id: 11,
      title: "Chelsea Jersey 2020",
      team: "Chelsea",
      year: 2020,
      stock: 40,
      type: "Home",
      price: "$92.00",
      description: "Chelsea home jersey with the classic royal blue color.",
      image: ""
    },
    {
      id: 12,
      title: "Atlético Madrid Jersey 2022",
      team: "Atlético Madrid",
      year: 2022,
      stock: 65,
      type: "Home",
      price: "$93.00",
      description: "Atlético Madrid home jersey for the 2022/23 season with red and white stripes.",
      image: "./img/casaca river.webp"
    }
  ];
  
  const titulo = document.querySelector("h1");
  titulo.innerText = "Productos";
  
 const prod = data.map((producto) => `
  <div class="col-lg-4 col-md-6 mb-4"> 
    <div class="card">
      <img src="https://placehold.co/600x400?text=${producto.title}" class="card-img-top" alt="${producto.title}">
      <div class="card-body">
        <h5 class="card-title">${producto.title}</h5>
        <p>${producto.description}</p>
        <a href="producto.html?prod=${producto.id}" class="btn btn-dark">Ver Más</a>
      </div>
    </div> 
  </div>`);

  
  document.querySelector('section').innerHTML = prod.join('');
  