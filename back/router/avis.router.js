const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const avisControllers = require('../controllers/avisControllers');

router.post('/add', verifieToken, avisControllers.postAvis)
router.get('/all', avisControllers.getAllAvis)


module.exports = router;