const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config();
const ENV = require('../config/env')
const transporter = nodemailer.createTransport({

    // Configuration du serveur SMTP de GMAIL
    host: 'smtp.gmail.com',

    // Port standard pour TLS
    port: 587,

    // Pour le TLS (port 587), true pour le SSL (port 465)
    secure: false,

    auth: {
        user: ENV.EMAIL_USER,
        pass: ENV.EMAIL_PASS
    },

});

const sendEmail = async (user, verifieToken) => {

    const verificationLink =
    `<a href='${ENV.FRONT_URL}/verification/${verifieToken}'>Lien de vérification</a>`

    await transporter.sendMail({

        from: ENV.EMAIL_USER,
        to: user.email,
        subject: "Vérifiez votre email",
        html: `
        <h1>Hello ${user.username},</h1>
        <br>
        <p>Merci de vous être inscrit  ! </p>
        <p>Cliquez sur ce lien pour vérifier votre email : ${verificationLink}.</p>
        <br>

        <p><em>A très vite! </em></p>
        `
    })

}

module.exports = { sendEmail };
