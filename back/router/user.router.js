const express = require('express');
const router = express.Router();
// const verifieToken = require('../middlewares/auth');

const userControllers = require('../controllers/userControllers');

// Mes routes
router.post('/add', userControllers.postUser);
router.get('/all', userControllers.getAllUsers);
router.post('/sign-in', userControllers.signIn);
router.get('/logout', userControllers.logout)
router.delete("/delete/:id", userControllers.deleteUser)

module.exports = router;