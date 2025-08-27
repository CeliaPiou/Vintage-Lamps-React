const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const userControllers = require('../controllers/userControllers');

// Mes routes
router.post('/add', userControllers.postUser);
router.get('/all', userControllers.getAllUsers);
router.get('/logout', userControllers.logout)
router.get('/:id', userControllers.getOneUser)
router.post('/sign-in', userControllers.signIn);
router.delete("/delete/:id", userControllers.deleteUser);
router.put("/update/:id", verifieToken, userControllers.updateUser)

// Vérification des mails:
router.get('/verify-email', userControllers.verifyEmail);

module.exports = router;