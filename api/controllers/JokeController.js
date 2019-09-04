/**
 * JokeController
 *
 * @description :: Server-side logic for managing jokes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const joker = require('../services/joker');

module.exports = {
    getJokes: async function(req, res) {
        let jokes = await joker.getAll();
        return res.json({ jokes: jokes });
    },
    getRandomJoke: async function(req, res) {
        let randomJoke = await joker.getRandomOne();
        return res.json({ jokes: randomJoke });
    }
};