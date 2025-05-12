const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const orderControllers = require('../controllers/orderControlers');

router.post('/add', verifieToken, orderControllers.postOrder)
router.get('/all', orderControllers.getAllOrders)
router.put('/update/:id', verifieToken, orderControllers.updateOrder)
router.delete('/:id/delete', verifieToken, orderControllers.deleteOrder)
router.get('/:id', verifieToken, orderControllers.getOneOrder)



module.exports = router;