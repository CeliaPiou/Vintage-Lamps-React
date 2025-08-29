const createError = require('../middlewares/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require("crypto");

const dotenv = require('dotenv');
dotenv.config();
const ENV = require('../config/env.js');


// Importation du modèle
const Users = require('../models/userModele.js');
const {sendEmail} = require('../services/nodemailer.js')

// Helper
function sha256(str) {
    return crypto.createHash("sha256").update(str).digest("hex");
}

// Let's go
const postUser = async (req,res,next) => {

    try{
        const alreadyExisted = await Users.findOne({email : req.body.email});
        const { username, email, password } = req.body;

        // Erreurs possibles: Compte déjà existant, pas de champ rempli, longueur insuffisante
        if(alreadyExisted)          return next(createError(403, `L'utilisateur existe déjà.`));
        if (!email || !password)    return next(createError(400, `Le mot de passe et l'email doivent être renseignés.` ));
        if (password.length < 8)    return next(createError(400, `Le mot de passe doit être plus long (8 caracteres au moins)` ));

        // Sécurisation maximale du mdp :
        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        if (!strongPassword.test(password)) return next(createError(400, "Le mot de passe doit contenir au moins 8 caractères, avec majuscule, minuscule, chiffre et caractère spécial."
        ));

        // Cryptage du mot de passe:
        const passwordHashed = await bcrypt.hash(req.body.password, 12);

        // Génère un token de vérification :
        const token = crypto.randomBytes(32).toString("hex");
        const tokenHash = sha256(token);
        const expires = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

        // Enfin, création du user:
        const newUser = await Users.create({
            username,
            email,
            password: passwordHashed,
            isVerified: false,
            verificationTokenHash: tokenHash,
            verificationTokenExpires: expires
        });

        await sendEmail(newUser, token);

        res.status(201).json({message: "Utilisateur créé. Veuillez vérifier votre e-mail pour activer votre compte."});

    }
    catch(error){
        next(createError(500, 'Error: ', error.message))
    }
}

// Vérification email
const verifyEmail = async (req, res, next) => {

    try {
        const { token } = req.params;
        if (!token) return next(createError(400, "Token missing."));

        const tokenHash = sha256(token);

        const user = await Users.findOne({
            verificationTokenHash: tokenHash,
            verificationTokenExpires: { $gt: new Date() }
        });

        if (!user) return next(createError(400, "Invalid or expired link."));

        user.isVerified = true;
        user.verificationTokenHash = undefined;
        user.verificationTokenExpires = undefined;
        await user.save();

        return res.json({ message: "Email verified, you can now log in." });
        }

        catch (error) {
            next(createError(500, error.message));
        }
};

const getAllUsers = async (req, res, next) => {

    try{
        const result = await Users.find()
        res.status(200).json(result)
    }
    catch(error){
        next(createError(500, 'Error: ', error.message))
    }
}
const getOneUser = async (req, res, next) => {
    try {
        const result = await Users.findById(req.params.id).populate("orders").populate("avis");
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
        if(!findUser) return next(createError(404, `L'utilisateur n'existe pas`))

        // Vérifier le mot de passe, en le décryptant
        const hashedPassword = findUser.password;
        const enteredPassword = req.body.password;
        const comparePassword = await bcrypt.compare(enteredPassword, hashedPassword);
        if(!comparePassword) return next(createError(401, `Mauvais identifiants`));

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
        next(createError(500, "Error... :", error.message))
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
        if(!findUser) return next(createError(500, 'User not found'))

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
    verifyEmail,
    getAllUsers,
    getOneUser,
    signIn,
    logout,
    deleteUser,
    updateUser
}