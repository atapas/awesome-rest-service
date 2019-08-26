/**
 * QuoteController
 *
 * @description :: Server-side logic for managing quotes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const quoter = require('../services/quoter');

module.exports = {
    getQuote: function(req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    }
};