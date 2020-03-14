var config = require('./data/movies.json');

var json = [];

addMovies = (movie) => {

}

deleteMovie = (movieName, allMovies) => {
  const newMoviesList = allMovies.filter(e => e.name !== movieName);
  return newMoviesList;
  fs.readFile('../api/data/movies.json', 'utf8', function (err, jsonString) {
    if (err) {
      res.status(404).send();
      logger.error("Could not open file, reason: " + err, {req: req, res: res});
    } else {
      const movieData = jsonString.filer(movie => movie.name !== movieName);
      fs.writeFile("../api/data/movies.json", movieData, (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
      });
    }
  });
}

module.exports = {addMovies , deleteMovie }
