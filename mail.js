
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD 
    }
});


// const auth = {
//     auth: {
//         // TODO: Replace with your mailgun API KEY
//          // TODO: Replace with your mailgun DOMAIN
//     }
// };




const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'mramgopal89@gmail.com', // TODO replace this with your own email
        to: email, // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
