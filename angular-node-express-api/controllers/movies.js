exports.getMoviesList = function (req , res) {
  res.json(require('../data/movies'));
}
