const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Messages = require('../models/messagesModele');
const {sendContact} = require('../services/nodemailer')


// Les controllers
const postMessage = async(req, res, next) => {

    try {

        // On récupère le nom, l'email, le message
        const { name, email, message } = req.body

        // Pas besoin d'être inscrit pour envoyer un message
        // Mais, besoin de compléter tous les champs.
        if (!name || !email || !message) {
            return next(createError(400, `Tous les champs doivent être complétés.`))
        }

        // Créer un nouveau message dans la DB
        const newMess = await Messages.create({ name, email, message })

        // Envoi du mail
        await sendContact({name, email, message})

        // Tout est ok !
        res.status(201).json(`Message envoyé !`);
    }

    catch(error) {
        next(createError(500, "Error, ", error.message))
    }
}


module.exports = {
    postMessage
}