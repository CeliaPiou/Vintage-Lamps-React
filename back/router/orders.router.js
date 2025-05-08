const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const orderControllers = require('../controllers/orderControlers');

router.post('/add', verifieToken, orderControllers.postOrder)
router.get('/all', orderControllers.getAllOrders)
router.get('/:id', verifieToken, orderControllers.getOneOrder)
router.put('/:id/update', verifieToken, orderControllers.updateOrder)
router.delete('/:id/delete', verifieToken, orderControllers.deleteOrder)


module.exports = router;