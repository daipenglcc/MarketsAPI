const Router = require('koa-router')
const marketController = require('../controllers/marketController')

const router = new Router()

router.post('/createMerchants', marketController.createMerchants)

module.exports = router
