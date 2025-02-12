const Router = require('koa-router')
const marketController = require('../controllers/marketController')

const router = new Router({
	prefix: '/api/market' // 设置路由前缀
})

// 定义路由
router.post('/createMerchants', marketController.createMerchants)
router.get('/getMerchants', marketController.getMerchants)
router.get('/getMerchantByDate', marketController.getMerchantByDate)
router.post('/addArea', marketController.addArea)
router.get('/getArea', marketController.getArea)
router.get('/getAreaInfo', marketController.getAreaInfo)
router.post('/updataArea', marketController.updataArea)

module.exports = router
