/**
 * Joke.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'string',
      required: true,
      unique: true
    },
    name: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: false
    },
    content: {
      type: 'string',
      required: true
    }
  }

};

