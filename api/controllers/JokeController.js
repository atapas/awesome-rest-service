/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const joker = require('../services/joker');

module.exports = {
    getRandomJoke: function(req, res) {
        return res.json({ quote: joker.getRandomOne() });
    }
};