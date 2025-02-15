const jwt = require('jsonwebtoken')
require('dotenv').config()

async function authenticate(ctx, next) {
	const authHeader = ctx.headers['authorization']
	if (!authHeader) {
		ctx.throw(401, '未提供 token')
	}

	const token = authHeader.split(' ')[1] // 获取 token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		ctx.state.user = decoded // 将用户信息存储在 ctx.state 中
		await next() // 继续处理请求
	} catch (error) {
		ctx.throw(401, '无效的 token')
	}
}

module.exports = {
	authenticate
}
