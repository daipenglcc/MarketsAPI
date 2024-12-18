require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const wechatRouter = require('./routes/wechat')

const app = new Koa()
const router = new Router()

// 使用中间件
app.use(bodyParser())

// 路由
router.use('/api/wechat', wechatRouter.routes())

app.use(router.routes())
app.use(router.allowedMethods())

const PORT = process.env.PORT || 7676
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
