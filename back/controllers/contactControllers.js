const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Messages = require('../models/messagesModele');
const Users = require('../models/userModele');
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
const getAllMessages = async (req, res, next) => {
    try {

        // Je dois être admin et connecté pour accéder au message
        if(!req.user || !req.user.id)   return next(createError(401, "Authentification requise !"));

        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "Vous devez être admin"));

        const result = await Messages.find();
        res.status(200).json(result)
    }
    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}
const getOneMessage = async (req, res, next) => {
    try {

        // Je dois être admin et connecté pour accéder au message
        if(!req.user || !req.user.id)   return next(createError(401, "Authentification requise !"));
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "Vous devez être admin"));

        // Je dois vérifier que le message existe
        const result = await Messages.findById(req.params.id)
        if(!result) next(createError(404, "Le message n'existe pas"))

        res.status(200).json(result)
    }

    catch(error) {
        next(createError(500, "Error, ", error.message))
    }
}
const deleteOneMessage = async (req, res, next) => {
    try {

        // Vérifions si le message existe
        const message = await Messages.findById(req.params.id)
        if(!message) return next(createError(404, "Ce message ne semble pas exister"));

        // Je vérifie si je suis connecté:
        if(!req.user || !req.user.id) return next(createError(401, "Authentification requise"));

        // Je vérifie si je suis admin
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "Vous devez être un admin pour interagir avec les messages"));

        const result = await Messages.findByIdAndDelete(req.params.id);
        res.status(200).json("Ce message a bien été supprimé")
    }

    catch(err){
        next(createError(500, err.message))
    }
}


module.exports = {
    postMessage,
    getAllMessages,
    getOneMessage,
    deleteOneMessage
}