const Router = require('koa-router')
const wechatController = require('../controllers/wechatController')

const router = new Router()

router.get('/fetchToken', wechatController.fetchToken)
router.post('/openid', wechatController.fetchOpenId)
router.post('/send-reminder', wechatController.sendDailyReminder)
router.post('/add-draft', wechatController.addDraft)

module.exports = router
