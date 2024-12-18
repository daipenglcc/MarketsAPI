const wechatService = require('../services/wechatService')

async function fetchToken(ctx) {
	try {
		// Get the WeChat Access Token using the cloud function
		const token = await wechatService.getWeChatToken()

		// Return the token to the client
		ctx.body = { success: true, token }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

async function fetchOpenId(ctx) {
	const { code } = ctx.request.body
	const openId = await wechatService.getOpenId(code)
	ctx.body = { openId }
}

async function sendDailyReminder(ctx) {
	const { openId } = ctx.request.body
	const message = `【摸鱼办】提醒您：2024年12月18日，第51`

	try {
		const result = await wechatService.sendWeChatMessage(openId, message)
		ctx.body = { success: true, result }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

async function addDraft(ctx) {
	const { articles } = ctx.request.body

	try {
		const result = await wechatService.addDraft(articles)
		ctx.body = { success: true, result }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

function someControllerFunction(req, res) {
	// Call the WeChat Cloud function
	wechatService.callWeChatCloud()

	// Respond to the request
	res.send('WeChat Cloud function called')
}

module.exports = {
	fetchToken,
	fetchOpenId,
	sendDailyReminder,
	addDraft,
	someControllerFunction
}
