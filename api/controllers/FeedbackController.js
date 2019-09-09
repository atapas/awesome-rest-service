/**
 * FeedbackController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const uuidv1 = require('uuid/v1');

module.exports = {
    create: async function(req, res) {
        let payload = {};
        payload['id'] = uuidv1();
        payload['user_id'] = req.body['user_id'];
        payload['joke_id'] = req.body['joke_id'];
        payload['like'] = req.body.like;
        payload['comment'] = req.body.comment;

        sails.log.debug(JSON.stringify(payload));
        await Feedback.create(payload);
        
        return res.json({ feedback: payload });
    },
    update: async function(req, res) {
        
    },

};

