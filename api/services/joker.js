
module.exports.getRandomOne = async function() {
  const allJokes = await this.getAll();
  const count = allJokes.length;
  const rand = Math.floor(Math.random() * count);
  return allJokes[rand];
};

module.exports.getAll = async function() {
  const jokes = await Joke.find();
  sails.log.debug("jokes :", jokes);
  return jokes;
}
