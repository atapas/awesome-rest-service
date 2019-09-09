/**
 * Feedback.js
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
    user_id: {
      type: 'string',
      required: true
    },
    joke_id: {
      type: 'string',
      required: true
    },
    like: {
      type: 'boolean',
      required: true
    },
    comment: {
      type: 'string',
      required: false
    }
  }
};

