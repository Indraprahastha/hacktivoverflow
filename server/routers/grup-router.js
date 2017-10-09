let express = require('express')
let router = express.Router()
let grup = require('../controllers/grup-controllers')

router.get('/',grup.getGrup)
router.post('/',grup.addGrup)
router.get('/:id',grup.findGrup)
router.put('/:id',grup.editGrup)
router.delete('/:id',grup.deleteGrup)

module.exports = router
