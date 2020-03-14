exports.getCategoriesList = function (req , res) {
  res.json(require('../data/categories'));
}
