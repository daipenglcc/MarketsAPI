require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const path = require('path')
const wechatRouter = require('./routes/wechat')
const marketRouter = require('./routes/market')
const responseFormatter = require('./middleware/responseFormatter')

const app = new Koa()
const router = new Router()

// 获取环境并加载对应的 env 文件
const environment = process.env.NODE_ENV || 'development'
require('dotenv').config({
	path: path.resolve(__dirname, `../.env.${environment}`)
})

// 配置模板引擎
app.use(
	views(path.join(__dirname, 'views'), {
		extension: 'ejs' // 使用 EJS 作为模板引擎
	})
)

// 使用中间件
app.use(bodyParser())
app.use(responseFormatter) // 使用统一响应格式中间件

// 声明路由
router.get('/', (ctx) => {
	ctx.body = { message: '欢迎使用 Koa2 + MySQL 项目！' }
})

// 注册路由
app.use(router.routes()).use(router.allowedMethods())
app.use(wechatRouter.routes()).use(wechatRouter.allowedMethods())
app.use(marketRouter.routes()).use(marketRouter.allowedMethods())

const PORT = process.env.PORT || 7676
app.listen(PORT, () => {
	console.log('运行信息:', {
		NODE_ENV: process.env.NODE_ENV,
		配置文件: `.env.${environment}`,
		运行信息: `Server is running on port ${PORT}`
	})
})
