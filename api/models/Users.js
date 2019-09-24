/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt');

module.exports = {
attributes: {
  id: {
    type: 'string',
    required: true,
    unique: true
  },
  email: {
    type: 'string',
    required: true,
    unique: true
  },
  username: {
    type: 'string',
    required: true,
    unique: true
  },
  password: {
    type: 'string',
    required: true
  }
  ,
  fullname: {
    type: 'string',
    required: false
  },
  phone: {
    type: 'number',
    required: false
  },
  dailydigest: {
    type: 'boolean',
    required: false
  }
},
customToJSON: function() {
  const { ['password']: omitted, ...rest } = this;
  return rest;
},
beforeCreate: function(user, cb){
    bcrypt.hash(user.password, 10, function(err, hash){
      if(err) {
        return cb(err);
      }
      user.password = hash;
      return cb();
    });
  }
};
