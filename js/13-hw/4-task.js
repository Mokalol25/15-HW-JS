const filmTitle = document.getElementById("title");
const movie = {
    title: "Uncharted",
    director: "Ruben Flaysher",
    year: 2022,
    rating: 6,
    goodRating() {
        if (movieRating > 8) {
            console.log("true")
            filmTitle.style.color = "green"
            filmTitle.textContent = movieTitle
        } else {
            console.log("false")
            filmTitle.style.color = "red"
            filmTitle.textContent = movieTitle
        }
    }
}
const {title: movieTitle, director: movieDirector, year: movieYear, rating: movieRating} = movie
movie.goodRating()