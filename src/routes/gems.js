const express = require('express')
const router = express.Router()
const GemsControler = require('../controlers/gemsController')
const multiparty = require('connect-multiparty')

router.use(multiparty({
    uploadDir: 'src/tmp'
}))

router.post('/api/gems', GemsControler.createGem)
router.get('/api/gems', GemsControler.getAllGems)
router.get('/api/gems/:_id', GemsControler.getGem)
router.post('/api/gems/getgemp', GemsControler.getGemPost)
router.patch('/api/gems', GemsControler.updateGem)
router.delete('/api/gems/:_id', GemsControler.deleteGem)
router.post('/api/gems/irgems', GemsControler.addReview)
router.post('/api/gems/iigems', GemsControler.addImage)

module.exports = router