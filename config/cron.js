const email = require('../api/services/email');

module.exports.cron = {
    myFirstJob: {
        schedule: '30 08 15 10 sep *',
        //schedule: '* * * * * *',
    // in May 17 15:47:30 GMT-0300 (BRT)
    onTick: function() {
        email.sendEmail();
    },
    }
  };