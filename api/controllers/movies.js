const movieService = require('../service');
var fs = require("fs");
//getMoviesList
getMoviesList = function (req , res) {
  res.json(require('../data/movies'));
}

addMovieToList = function (req , res) {
  fs.readFile('data/movies.json', 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return
    }
    console.log('File data:', jsonString);
    const allMovies = JSON.parse(jsonString);
    const newMovies = [...allMovies, req.body.newMovie];
    console.log(allMovies);
    fs.writeFile('data/movies.json', JSON.stringify(newMovies), (err) => {
      if (err) console.log('Error writing file:', err);
      res.send({newMovies});
    });

  });
}

deleteMovieFromList = function (req , res) {
  fs.readFile('data/movies.json', 'utf8', (err, jsonString) => {
    if (err) {
      res.status(404).send();
      logger.error("Could not open file, reason: " + err, {req: req, res: res});
    } else {
      const allMovies = JSON.parse(jsonString);
      const newMovies = allMovies.filter(movie => movie.name != req.params.name);
      fs.writeFile("data/movies.json", JSON.stringify(newMovies), (err) => {
        if (err) console.log(err);
        res.send({newMovies});
      });
    }
  });

}
module.exports = {getMoviesList ,  addMovieToList, deleteMovieFromList};
