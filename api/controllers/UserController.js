/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuidv1 = require('uuid/v1');
const APIUtil = require('../utils/APIUtil');

module.exports = {
    create: async function(req, res) {
        let payload = {};
        payload['id'] = uuidv1();
        payload['username'] = req.body.username;
        payload['password'] = req.body.password;
        payload['email'] = req.body.email;

        sails.log.debug(JSON.stringify(payload));
        await Users.create(payload);
        
        return res.json({ user: APIUtil.omit('password', payload) });
    },

};

