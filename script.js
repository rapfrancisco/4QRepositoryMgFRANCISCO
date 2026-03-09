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

    let movies = JSON.parse(localStorage.getItem("movies"))|| [];
    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

}