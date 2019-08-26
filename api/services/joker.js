const jokes = require('./jokes.json');

module.exports.getRandomOne = function() {
  let allJokes = fetchAllJokes();
  var rand = Math.floor(Math.random() * allJokes.length);
  return allJokes[rand];
};

module.exports.getAll = function() {
  return fetchAllJokes();
}

let fetchAllJokes = () => {
  let allJokes = [];
  Object.entries(jokes).map((element) => {
    if(element[1]) {
      element[1].content.map((content) => {
        let obj = {};
        obj['name'] = element[1].name;
        obj['image'] = element[1].image;
        obj['content'] = content;
        allJokes.push(obj);
      });
    }
  });
  return allJokes;
}