const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Orders = require('../models/ordersModele');
const Avis = require('../models/avisModele')


// Les controllers
const postAvis = async(req, res, next) => {
    try {
        // Vérifier si on est connecté
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"))

        // Vérifier si le numéro de la commande existe
        const orderConcerned = await Orders.findById(req.body.order)
        if(!orderConcerned) return next(createError(404, "This order doesn't seem to exist"))

        // Vérifier si on est bien le receveur de cette commande
        const deliveredUser = orderConcerned.user;
        console.log('Delivered User : ', deliveredUser)

        // POSTER !
        const newAvis = await Avis.create({...req.body})
        res.status(201).json(newAvis);
    }

    catch(error) {
        next(createError(404, "Error, ", error.message))
    }
}

const getAllAvis = async(req, res, next) => {
    try{
        const allAvis = await Avis.find().populate('username');
        res.status(200).json(allAvis)
    }
    catch(error){
        next(createError(404, "Error, ", error.message))
    }
}


module.exports = {
    postAvis,
    getAllAvis
}