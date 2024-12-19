const wechatService = require('../services/wechatService')

async function fetchToken(ctx) {
	try {
		const data = await wechatService.getWeChatToken()
		ctx.body = { code: 200, data: data }
	} catch (error) {
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

async function fetchMediaList(ctx) {
	// const { access_token } = ctx.request.query
	try {
		const data = await wechatService.getWeChatMediaList()
		ctx.body = { code: 200, data: data }
	} catch (error) {
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

async function addDraft(ctx) {
	// const { articles } = ctx.request.body
	const content = `<p>测试</p>`
	try {
		const result = await wechatService.addDraft([
			{
				title: '济南大集，周四提醒！',
				author: '集集有你小助手',
				digest: '希望是灵魂的心跳 Hope is the heartbeat of the soul',
				content,
				thumb_media_id: 'xiWEbz3LGTAp4Uf9H93AyofOxjOB18SjwHX1WiPidoHG7dnTwQL4Y2P5lzmCvKVT'
			}
		])
		ctx.body = { success: true, result }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

async function fetchDraftList(ctx) {
	try {
		const result = await wechatService.fetchDraftList()
		ctx.body = { success: true, result }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

async function fetchDraft(ctx) {
	const { media_id } = ctx.request.query
	try {
		const result = await wechatService.fetchDraft({
			media_id: media_id
		})
		ctx.body = { success: true, result }
	} catch (error) {
		ctx.status = 500
		ctx.body = { success: false, message: error.message }
	}
}

module.exports = {
	fetchToken,
	fetchMediaList,
	addDraft,
	fetchDraftList,
	fetchDraft
}
