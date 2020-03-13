var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

require('./routes/routes.js')(router);
app.router('/login' , )
app.use(router);
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
module.exports = app;
