const jokes = require('./jokes.json');

module.exports.getRandomOne = function() {
  let count = jokes.length;
  var rand = Math.floor(Math.random() * count);
  return jokes[rand];
};

module.exports.getAll = function() {
  return jokes;
}
