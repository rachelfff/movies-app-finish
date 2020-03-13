module.exports = function (router) {
  var usersCtrl = require('../controllers/users');
  var moviesCtrl = require('../controllers/movies');
  var categoriesCtrl = require('../controllers/categories');


 router.get('/api/users' ,usersCtrl.getUsersList);

 //movies
 router.get('/api/movies' ,moviesCtrl.getMoviesList);

 //categories
 router.get('/api/categories' ,categoriesCtrl.getCategoriesList);


  }
