const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Articles = require('../models/articleModele');
const Users = require('../models/userModele');
const Category = require('../models/categoryModele')


// Let's go
const createCategory = async (req, res, next) => {

    try {
        // Pour créer une catégorie, je dois être connecté
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"))

        // Je dois aussi être un admin
        const me = await Users.findById(req.user.id);
        const role = me.role;
        if (role !== "admin") return next(createError(403, "You must be an admin to create a Category"))

        const newCat = await Category.create({...req.body})
        res.status(201).json(newCat);
    }

    catch(error) {
        next(createError(500, "Error, ", error.message))
    }
}
const getAllCategories = async (req, res, next) => {
    try{
        // Pas besoin d'être enregistré ni connecté pour voir toutes les caté
        const allCat = await Category.find();
        res.status(200).json(allCat)
    }
    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}
const getOneCat = async (req, res, next) => {
    try{
        // Pas besoin d'être connecté ni admin pour les voir
        const result = await Category.findById(req.params.id).populate("articles")
        res.status(200).json(result)
    }
    catch(error){
        next(createError(500, "Error: ", error.message))
    }
}
const deleteCat = async(req, res, next) => {
    try{
        // Vérifier i je suis connecté pour supprimer
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Vérifier si je suis admin
        const me = await Users.findById(req.user.id);
        const role = me.role;
        if(role !== "admin") return next(createError(403, "You must be an admin to delete a category"))

        // Vérifier si la catégorie existe
        const cat = await Category.findById(req.params.id);
        if (!cat) return next(createError(404, "This category doesn't exist"))

        const deleted = await Category.findByIdAndDelete(req.params.id);

        res.status(200).json(deleted)
    }
    catch(error){
        next(createError(500, "Error: ", error.message))
    }
}
const updateCat = async (req, res, next) => {
    try{
        // Vérifier i je suis connecté pour supprimer
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Vérifier si je suis admin
        const me = await Users.findById(req.user.id);
        const role = me.role;
        if(role !== "admin") return next(createError(403, "You must be an admin to update a category"))

        // Vérifier si la catégorie existe
        const cat = await Category.findById(req.params.id)
        if(!cat) return next(createError(404, "This category doesn't exist"));

        // Mise à jour possible
        const result = await Category.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(result)

    }
    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getOneCat,
    deleteCat,
    updateCat
}