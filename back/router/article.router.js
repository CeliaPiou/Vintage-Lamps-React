const express = require('express');
const router = express.Router();
const verifieToken = require('../middlewares/auth');

const articleControllers = require('../controllers/articleControllers');

router.post('/add', verifieToken, articleControllers.postArticle)
router.get('/all', articleControllers.getAllArticles)
router.get('/new', articleControllers.getNewArticles)
router.get('/:id', articleControllers.getOneArticle)
router.put('/:id/update', verifieToken, articleControllers.updateArticle)
router.delete('/:id/delete', verifieToken, articleControllers.deleteArticle)


module.exports = router;