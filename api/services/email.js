let nodemailer = require('nodemailer');
let joker = require('./joker');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emailbotgreenrooots@gmail.com',
      pass: '********'
    }
});


async function getSubscribedUsers() {
    let usersSubscribedDigest = await Users.find({
        dailydigest: true
    });
    return usersSubscribedDigest;
}

module.exports.sendEmail = async function() {
    const subscribedUsers = await getSubscribedUsers();
    let subsEmails = [];
    subscribedUsers.map(function(elem) {
        subsEmails.push(elem.email);
    })
    console.log('Subscribed Emails to send @ ' + new Date(), subsEmails);

    const randomeJoke = await joker.getRandomOne();
    const jokeContent = randomeJoke[0].content;
    console.log('Random Joke to send', randomeJoke, jokeContent);


    let mailOptions = {
        from: 'emailbotgreenrooots@gmail.com',
        to: subsEmails.join(),
        subject: 'Jokking: Joke of the Day!',
        text: jokeContent
    };
    

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}