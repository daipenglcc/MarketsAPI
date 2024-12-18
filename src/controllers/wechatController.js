const wechatService = require('../services/wechatService')

async function fetchToken(ctx) {
	try {
		const token = await wechatService.getWeChatToken()
		ctx.body = { code: 200, access_token: token }
	} catch (error) {
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

async function addDraft(ctx) {
	const { articles } = ctx.request.body

	console.log('articles2', articles)
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
	addDraft
}
