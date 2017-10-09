let express = require('express')
let router = express.Router()
let answer = require('../controllers/answer-controllers')

router.get('/',answer.getAnswer)
router.post('/',answer.addAnswer)
router.get('/:id',answer.findAnswer)
router.put('/:id',answer.editAnswer)
router.delete('/:id',answer.deleteAnswer)

module.exports = router
