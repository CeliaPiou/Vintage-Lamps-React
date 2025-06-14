const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Articles = require('../models/articleModele');
const Users = require('../models/userModele');
const Category = require('../models/categoryModele');


// Let's go
const postArticle = async (req,res,next) => {
    try{
        // Je vérifie si je suis connecté:
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Je vérifie si je suis admin
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "You must be an admin to do that"));

        // A partir de là, je peux créer:
        const newArticle = await Articles.create({
            ...req.body,
        })

        // Ajout de l'article dans la catégorie
        const addArtToCategory = await Category.findByIdAndUpdate(
            req.body._id,
            {$push: { articles: newArticle._id }},
            { new: true }
        );

        res.status(201).json(newArticle);

    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}

const getAllArticles = async (req, res, next) => {
    try{
        const result = await Articles.find();
        const tri = await result.filter(item => item.availability === true)
        res.status(200).json(tri)
    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}

const getNewArticles = async (req, res, next) => {
    try{
        const result = await Articles.find().sort({ createdAt: -1 })
        res.status(200).json(result)
    }
    catch(error) {
        next(createError(404, 'Error : ', error.message ))
    }
}

const getOneArticle = async (req, res, next) => {
    try{
        const result = await Articles.findById(req.params.id).populate("category")
        res.status(200).json(result)
    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}

const updateArticle = async(req, res, next) => {
    try{
        // Cet article existe-t-il ?
        const article = await Articles.findById(req.params.id)
        if(!article) return next(createError(404, "This post doesn't exist"));

        // Je vérifie si je suis connecté:
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Je vérifie si je suis admin
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "You must be an admin to do that"));

        // Tout ok, alors :
        const result = await Articles.findByIdAndUpdate(req.params.id, req.body, {new:true});

        // Concernant la modification des catégories...:
        const newCategoryIds = req.body.category;

        // Si il y'a déjà des catégories liées, on les retire:
        if (article.category && article.category.length > 0) {
            await Category.updateMany(
                { _id: { $in: article.category } },
                { $pull: { articles: article._id } }
            );
        }

        // Je rajoute l'article dans la/les catégories
        if (newCategoryIds && newCategoryIds.length > 0) {
            await Category.updateMany(
                { _id: { $in: newCategoryIds } },
                { $addToSet: { articles: article._id } }
            );
        }

        res.status(201).json(result);
    }
    catch(error){
        next(createError(500, 'Error: ', error.message))
    }
}

const deleteArticle = async(req, res, next) => {
    try{
        // Vérifions si l'article existe
        const article = await Articles.findById(req.params.id)
        if(!article) return next(createError(404, "This post doesn't exist"));

        // Je vérifie si je suis connecté:
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Je vérifie si je suis admin
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "You must be an admin to do that"));


        const result = await Articles.findByIdAndDelete(req.params.id);
        res.status(200).json("this article has been deleted")
    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}

module.exports = {
    postArticle,
    getAllArticles,
    getOneArticle,
    updateArticle,
    deleteArticle,
    getNewArticles
}