var config = require('../data/users.json');

var json = [];
exports.checkUserValid = (req, res, next) => {
  const { username, password } = req.body;
  if (username == config.userName && password == config.password) {
    res.send({ message: 'you allow to get in movie-app' });
  } else {
    res.status(400).send({status: 400 ,message: 'the userName or passport are not currect' })
  }
}

