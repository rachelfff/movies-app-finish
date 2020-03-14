module.exports = function (router) {
  var usersCtrl = require('../controllers/users');
  var moviesCtrl = require('../controllers/movies');
  var categoriesCtrl = require('../controllers/categories');
  //login
 router.post('/api/user/checkValid', usersCtrl.checkUserValid);

 //movies
 router.get('/api/movies' ,moviesCtrl.getMoviesList);
 router.post('/api/movies' ,moviesCtrl.addMovieToList);
 router.delete('/api/movies/:name' ,moviesCtrl.deleteMovieFromList);

 //categories
 router.get('/api/categories' ,categoriesCtrl.getCategoriesList);
  }
