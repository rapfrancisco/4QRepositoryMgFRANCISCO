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
        movies = [];//empty array
    }

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    displayMovies();//updated list of movies
}
