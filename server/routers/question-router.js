let express = require('express')
let router = express.Router()
let question = require('../controllers/question-controllers')
let helper = require('../helpers/helper.js')

router.get('/all',question.getQuestion)
router.post('/',question.addQuestion)
router.get('/:id',question.findQuestion)
router.put('/:id',question.editQuestion)
router.delete('/:id',question.deleteQuestion)
router.get('/',helper.auth,question.getPersonalQuestion)

module.exports = router
