const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const categoryControllers = require("../controllers/categoryControllers")

router.post('/add', verifieToken, categoryControllers.createCategory)
router.get('/all', categoryControllers.getAllCategories)
router.delete('/delete/:id', verifieToken, categoryControllers.deleteCat)
router.put('/update/:id', verifieToken, categoryControllers.updateCat)
router.get('/:id', categoryControllers.getOneCat)



module.exports = router;