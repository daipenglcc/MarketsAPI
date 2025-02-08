const Router = require('koa-router')
const wechatController = require('../controllers/wechatController')

const router = new Router({
	prefix: '/api/wechat' // 设置路由前缀
})

// 定义路由
router.get('/fetchToken', wechatController.fetchToken)
router.get('/fetchMediaList', wechatController.fetchMediaList)
router.post('/addDraft', wechatController.addDraft)
router.get('/fetchDraftList', wechatController.fetchDraftList)
router.get('/fetchDraft', wechatController.fetchDraft)
router.post('/submitArticle', wechatController.submitArticle)

module.exports = router
