const Router = require('koa-router')
const marketController = require('../controllers/marketController')

const router = new Router()

router.post('/createMerchants', marketController.createMerchants)
router.get('/getMerchants', marketController.getMerchants)

module.exports = router
