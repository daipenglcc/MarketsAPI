const Router = require('koa-router')
const { register, login, getUserInfo } = require('../controllers/userController')
const { authenticate } = require('../middleware/authenticate')

const router = new Router({
	prefix: '/api/user' // 设置路由前缀
})

router.post('/register', register) // 用户注册
router.post('/login', login) // 用户登录
router.get('/getUserInfo', authenticate, getUserInfo) // 路由保护

module.exports = router
