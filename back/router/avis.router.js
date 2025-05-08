const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const avisControllers = require('../controllers/avisControllers');

router.post('/add', verifieToken, avisControllers.postAvis)
router.get('/all', avisControllers.getAllAvis)
// router.get('/new', articleControllers.getNewArticles)
// router.get('/:id', articleControllers.getOneArticle)
// router.put('/:id/update', articleControllers.updateArticle)
// router.delete('/:id/delete', articleControllers.deleteArticle)


module.exports = router;