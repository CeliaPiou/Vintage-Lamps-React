const createError = require('../middlewares/error');
const dotenv = require('dotenv')

dotenv.config();

// Importation du modèle
const Orders = require('../models/ordersModele');
const Users = require('../models/userModele');
const Articles = require('../models/articleModele')


// Les controllers
const postOrder = async(req, res, next) => {
    try {
        // Need to be authentified to create new order
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"))

        // Create a new order
        const newOrder = await Orders.create({
            ...req.body,
            user: req.user.id
        });

        // Ajout de la commande dans le compte user
        const addOrderinUser = await Users.findByIdAndUpdate(
            req.user.id,
            {$push: { orders: newOrder._id }},
            { new: true }
        );

        // Modifier l'availability de l'article
        const articleIds = req.body.articles;

        await Articles.updateMany(
            { _id: { $in: articleIds } },
            { $set: { availability: false } }
        );


        // Return this new Order
        res.status(201).json(newOrder);
    }

    catch(error) {
        next(createError(500, "Error, ", error.message))
    }
}

const getAllOrders = async (req, res, next) => {
    try{
        const response = await Orders.find().populate("articles");
        res.status(200).json(response)
    }
    catch(error) {
        next(createError(404, "Error, ", error.message))
    }
}

const getOneOrder = async(req, res, next) => {
    try{

        // Need to be authentified to see orders
        if(!req.user || !req.user.id) return next(createError(401, "Authentification requise"));
        const response = await Orders.findById(req.params.id).populate({
            path: "articles",
            select: "name price picture"
        }).populate({
            path: "user",
            select: "user email"
        });

        // Need to be admin or to have created the order to see it
        const userCreator = response.user;
        const me = await Users.findById(req.user.id);
        const role = me.role;

        if(role !== "admin" && userCreator !== me) return next(createError(401, "Vous devez être l'admin ou le créateur de la commande."))
        res.status(200).json(response)

    }
    catch(error){
        next(createError(404, "Error, ", error.message))
    }
}

const updateOrder = async(req, res, next) => {
    try {
        // First, are you connected ?
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Then, are you an admin ?
        const me = await Users.findById(req.user.id)
        if(me.role !== "admin") return next(createError(403, "You must be an admin to interact with the orders"));

        // Finally, does this order even exists?
        const order = await Orders.findById(req.params.id)
        if(!order) return next(createError(404, "This order doesn't exist"));

        // Then, if all is OK, you can update it
        const result = await Orders.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(result)
    }
    catch(error){
        next(createError(500, "Error, ", error.message))
    }
}

const deleteOrder = async(req, res, next) => {
    try{
        // First, are you connected ?
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Then, are you an admin ?
        const me = await Users.findById(req.user.id)
        if(me.role !== "admin") return next(createError(403, "You must be an admin to interact with the orders"));

        // Finally, does this order even exists?
        const order = await Orders.findById(req.params.id)
        if(!order) return next(createError(404, "This order doesn't exist"));

         // Then, if all is OK, you can delete it
        const result = await Orders.findByIdAndDelete(req.params.id);
        res.status(200).json("this article has been deleted")

    }
    catch(error){
        next(createError(404, "Error, ", error.message))
    }
}


module.exports = {
    postOrder,
    getAllOrders,
    getOneOrder,
    updateOrder,
    deleteOrder
}