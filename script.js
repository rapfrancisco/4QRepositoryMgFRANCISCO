console.log("star", stars.length);

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
function addmovie(){ //adds movie a user adds
    let genre = document.getElementById("genie").value;
    let title = document.getElementById("ttl").value;
    let year = document.getElementById("year").value;

    let movie = {
        title: title,
        year: year,
        genre: genre,
        rating: rating
    };

    let movies = JSON.parse(localStorage.getItem("movies"))|| [];
    movies.push(movie); //unstringifies and turns into object

    localStorage.setItem("movies", JSON.stringify(movies)); //puts into local storage stringified

}