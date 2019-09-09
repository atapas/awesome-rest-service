/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /api/login': 'AuthController.login',
    '/api/logout': 'AuthController.logout',
    
    'get /': '/api/jokes',
    
    'get /api/users': '/users',
    'post /api/users': 'UserController.create',


    'get /api/jokes': 'JokeController.getJokes',
    'get /api/jokes/random-joke': 'JokeController.getRandomJoke',

    'get /api/feedback': '/feedback',
    'post /api/feedback': 'FeedbackController.create',
    'put /api/feedback': 'FeedbackController.update'
};
