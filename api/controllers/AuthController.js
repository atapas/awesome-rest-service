/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function(req, res) {
        passport.authenticate('local', function(err, user, info){
            if((err) || (!user)) {
                return res.send({
                    message: 'Login Failed! Check username or password.',
                    code: 401
                });
            }
            req.logIn(user, function(err) {
                if(err) res.send(err);
                const token = jwt.sign(user, 'secretkey');
                return res.json({token});
            });
        })(req, res);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};


