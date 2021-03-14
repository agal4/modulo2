var lista_hoteles = {
    Mencey: {
        name: "Mencey",
        location: "Tenerife",
        imgUrl: "//hotels1.cdn.iberostar.com/uploads/image/51613/crops/750:466/540/image.jpeg",
    },
    Larios: {
        name: "Larios",
        location: "Málaga",
        imgUrl: "https://room-matehotels.com/images/img/larios/galeria/hotel_01large.jpg",
    }
}

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var selection, rating, anon = undefined;

selection = prompt("Indique hotel sobre el que quiere hacer la reseña: Mencey o Larios ");

document.getElementById("hotel-name").innerHTML = "Hotel " + lista_hoteles[selection].name;

document.getElementById("hotel-location").innerHTML = "Ubicado en " + lista_hoteles[selection].location;

document.getElementById("hotel-img").src= lista_hoteles[selection].imgUrl;

rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("rating").innerHTML = stars[rating];

anon = prompt("¿Quiere que la reseña sea anónima?");

document.getElementById("anon-review").checked = anon;