const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Orders = require('../models/ordersModele');
const Avis = require('../models/avisModele');
const Users = require('../models/userModele.js')


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

        // POSTER !

        const postAvis = await Avis.create({
            user: req.body.user,
            order: req.body.order,
            rating: req.body.rating,
            content: req.body.content,
            image: req.body.image || null
        });


        // Ajout de l'avis dans le compte user
        const addAvisinUser = await Users.findByIdAndUpdate(
            req.user.id,
            {$push: { avis: postAvis._id }},
            { new: true }
        );


        res.status(201).json(postAvis);
    }

    catch(error) {
        next(createError(500, "Error, ", error.message))
    }
}

const getAllAvis = async(req, res, next) => {
    try{
        const allAvis = await Avis.find().populate('user');
        res.status(200).json(allAvis)
    }
    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}

const deleteAvis = async(req, res, next) => {
    try{
        // Vérifions si l'avis existe
        const avis = await Avis.findById(req.params.id)
        if(!avis) return next(createError(404, "This avis doesn't exist"));

        // Je vérifie si je suis connecté:
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Je vérifie si je suis admin
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "You must be an admin to do that"));


        const result = await Avis.findByIdAndDelete(req.params.id);
        res.status(200).json("this avis has been deleted")
    }

    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}


module.exports = {
    postAvis,
    getAllAvis,
    deleteAvis
}