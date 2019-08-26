/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const joker = require('../services/joker');

module.exports = {
    getJokes: function(req, res) {
        return res.json({ jokes: joker.getAll() });
    },
    getRandomJoke: function(req, res) {
        return res.json({ joke: joker.getRandomOne() });
    }
};