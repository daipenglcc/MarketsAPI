const wechatService = require('../services/wechatService')

async function fetchToken(ctx) {
	try {
		const token = await wechatService.getWeChatToken()

		ctx.body = { success: true, token }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

async function fetchOpenId(ctx) {
	const { code } = ctx.request.body
	const openId = await wechatService.getOpenId(code)
	ctx.body = { code: 200, aaa: openId }
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

module.exports = {
	fetchToken,
	fetchOpenId,
	addDraft
}
