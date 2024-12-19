const Router = require('koa-router')
const wechatController = require('../controllers/wechatController')

const router = new Router()

router.get('/fetchToken', wechatController.fetchToken)
router.get('/fetchMediaList', wechatController.fetchMediaList)
router.post('/addDraft', wechatController.addDraft)

module.exports = router
