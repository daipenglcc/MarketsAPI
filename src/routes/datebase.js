const Router = require('koa-router')
const backupController = require('../controllers/datebaseController')

const router = new Router({
	prefix: '/api/datebase' // 设置路由前缀
})

// 数据库备份
router.post('/backup', backupController.backupDatabase)

module.exports = router
