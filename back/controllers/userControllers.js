const createError = require('../middlewares/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const ENV = require('../config/env.js')
dotenv.config();

// Importation du modèle
const Users = require('../models/userModele.js');


// Let's go
const postUser = async (req,res,next) => {

    try{
        const alreadyExisted = await Users.findOne({email : req.body.email});
        if(alreadyExisted) return next(createError(403, 'User already exists'))

        const passwordHashed = await bcrypt.hash(req.body.password, 10);
        const newUser = await Users.create({
            ...req.body,
            password: passwordHashed
        });


        res.status(201).json(newUser);

    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}
const getAllUsers = async (req, res, next) => {

    try{
        const result = await Users.find()
        res.status(200).json(result)
    }
    catch(error){
        next(createError(404, 'Error: ', error.message))
    }
}
const getOneUser = async (req, res, next) => {
    try {
        const result = await Users.findById(req.params.id).populate("orders");
        res.status(200).json(result)

    }
    catch(error){
        next(createError(404, "Error: ", error.message))
    }
}
const signIn = async (req, res, next) => {

    try{
        // Vérifier si l'email est déjà enregistré
        const findUser = await Users.findOne({email: req.body.email});
        if(!findUser) return next(createError(404, 'User not found'))

        // Vérifier le mot de passe, en le décryptant
        const hashedPassword = findUser.password;
        const enteredPassword = req.body.password;
        const comparePassword = await bcrypt.compare(enteredPassword, hashedPassword);
        if(!comparePassword) return next(createError(401, 'wrong credentials'));

        // Token
        const token = jwt.sign({id: findUser._id}, ENV.TOKEN, { expiresIn: "24h" })

        const { password, ...others } = findUser._doc

        res
        .cookie('access_token', token, {
            httpOnly: true,  // Il ne peut pas être accédé via le javascript !
            maxAge: 24 * 60 * 60 * 1000, // 24h en millisecondes
            secure: false, // Célia A mettre à true pour https (site en ligne)
            sameSite: 'strict' // Protège contre les attaques CSRF
        })
        .status(200).json({
            others
        });
    }
    catch(error){
        next(createError(404, "oopsy... :", error.message))
    }

}
const logout = async(req, res, next) => {
    try{
        res
        .clearCookie('access_token', {
            httpOnly: true,
            sameSite: 'strict',
            secure: false
        })
        .status(200).json({ message: "Déconnecté"})
    }
    catch(error){
        next(createError(404, "Erreur... :", error.message))

    }
}
const deleteUser = async(req, res, next) => {
    try{
        // Vérifier si l'email est déjà enregistré
        const findUser = await Users.findById(req.params.id)
        if(!findUser) return next(createError(404, 'User not found'))

        const userToDelete = await Users.findByIdAndDelete(req.params.id);
        res.status(200).json('Vous avez bien supprimé cet utilisateur')
    }
    catch(error){
        next(createError(404, "oopsy... :", error.message))

    }
}
const updateUser = async(req, res, next) => {
    try{
        // A faire : Vérifier si t'es connecté ?
        if(!req.user || !req.user.id) return next(createError(401, "Authentification required"));

        // Vérifie si t'es un admin ensuite ?
        const me = await Users.findById(req.user.id);
        if(me.role !== "admin") return next(createError(403, "You must be an admin to interact with the orders"));

        // Est-ce que l'user existe ?
        const user = await Users.findById(req.params.id)
        if(!user) return next(createError(404, "This user doesn't exist"))

        // Si tout est Ok, alors tu peux mettre à jour:
        const userToUpdate = await Users.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json(userToUpdate)
    }

    catch(error){
        next(createError(404, "Damn, it's not working: ", error.message))
    }
}

module.exports = {
    postUser,
    getAllUsers,
    getOneUser,
    signIn,
    logout,
    deleteUser,
    updateUser
}