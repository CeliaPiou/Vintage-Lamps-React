
const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const contactControllers = require('../controllers/contactControllers')

router.post('/add', contactControllers.postMessage)
router.get('/all', verifieToken, contactControllers.getAllMessages)
router.get('/:id', verifieToken, contactControllers.getOneMessage)
router.delete('/:id/delete', verifieToken, contactControllers.deleteOneMessage)

module.exports = router;