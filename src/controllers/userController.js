const { registerUser, loginUser } = require('../models/user')

// 用户注册
async function register(ctx) {
	const { username, password } = ctx.request.body
	await registerUser(username, password)
	ctx.body = { message: '注册成功' }
}

// 用户登录
async function login(ctx) {
	const { username, password } = ctx.request.query
	const { user, token } = await loginUser(username, password)
	ctx.body = {
		message: '登录成功',
		data: {
			username: user.username,
			token
		}
	}
}

// 获取用户信息
async function getUserInfo(ctx) {
	ctx.body = { data: ctx.state.user }
}

module.exports = {
	register,
	login,
	getUserInfo
}
