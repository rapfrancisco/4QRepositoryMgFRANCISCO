let rating = 0;
const stars = document.querySelectorAll(".star");

stars.forEach(function(star, ndx) {
  star.addEventListener("click", function() {
    rating = ndx + 1; //the ndxth number of star
    stars.forEach(function(s, i) {
      s.classList.toggle("active", i < rating);
    });
  });
});

function addmovie(){ 
    let genre = document.getElementById("genie").value;
    let title = document.getElementById("ttl").value;
    let year = document.getElementById("year").value;

    let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
    };

    let movies = JSON.parse(localStorage.getItem("movies"));

    if (!movies) {
        movies = [];
    }

    let oldmovie = movies.find(m => m.title.toLowerCase() === title.toLowerCase());

    if (oldmovie) {
        //determines whether the stars will be averaged
        oldmovie.year = year;
        oldmovie.genre = genre;
        oldmovie.rating = Math.floor((oldmovie.rating + rating) / 2);
    } else {
        movies.push(movie);
    }

    localStorage.setItem("movies", JSON.stringify(movies)) ;
    document.getElementById("ttl").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genie").selectedIndex = 0; //defaulted genre
    rating = 0;//resets rating
    stars.forEach(s => s.classList.remove("active")); //CLEARS COLOR

    displayMovies();//updated list of movies
}

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem("movies"));//add
    if (!movies) return;

    let lelist = document.getElementById("listofmovies");
    lelist.innerHTML = "";

    movies.forEach(function(m) { //foreach movie
    let stars = "";
    for (let i = 1; i <= m.rating; i++) {
        stars += "★"; //ungreyed stars
    }

let color = ""; //themes !!
switch (m.genre) {
    case "Horror": 
    color = "red"; 
    break;

    case "Comedy": 
    color = "green"; 
    break;

    case "Sci-fi": 
    color = "blue"; 
    break;

    case "Action": 
    color = "orange"; 
    break;

    case "Romance": 
    color = "pink"; 
    break;

    default: 
    color = "yellow"; //for regular star
}
lelist.innerHTML += `<p style="color: ${color}">${m.title} (${m.year}) - ${m.genre} <span class="stars">${stars}</span></p>`;
});

window.onload = displayMovies;
}
