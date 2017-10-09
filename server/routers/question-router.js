let express = require('express')
let router = express.Router()
let question = require('../controllers/question-controllers')

router.get('/',question.getQuestion)
router.post('/',question.addQuestion)
router.get('/:id',question.findQuestion)
router.put('/:id',question.editQuestion)
router.delete('/:id',question.deleteQuestion)

module.exports = router
