
const express = require('express');
const router = express.Router();

const contactControllers = require('../controllers/contactControllers')

router.post('/add', contactControllers.postMessage)

module.exports = router;