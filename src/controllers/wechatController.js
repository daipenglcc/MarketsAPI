const wechatService = require('../services/wechatService')

async function fetchToken(ctx) {
	try {
		// Call the WeChat Cloud function to get the Access Token
		const token = await wechatService.callWeChatCloud()

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
	const message = `【摸鱼办】提醒您：2024年12月18日，第51周，农历甲辰[龙]年十一月十八，周三，大家上午好，工作虽然辛苦，但也不要忘了休息，起来去茶水间、厕所或者走廊活动活动身体，祝愿所有打工人愉快地度过每一天...

距离【周末】还有3天

距离【元旦】还有14天

距离【小年】还有35天

距离【春节】还有42天

距离【周一】过去3天(43%)

距离【月初】过去17天(56%)

距离【年初】过去352天(97%)

距离【发工资】(1号)还有14天

距离【发工资】(5号)还有18天

距离【发工资】(7号)还有20天

距离【发工资】(10号)还有23天

距离【发工资】(12号)还有25天

距离【发工资】(15号)还有28天

距离【发工资】(20号)还有2天

距离【发工资】(25号)还有7天

距离【发工资】(30号)还有12天

距离【退休】还有10241天(95年58岁退休)

距离【退休】还有12066天(95年63岁退休)

【���日英语】

Hardships often prepare ordinary people for extraordinary destiny.

艰难常常为普通人准备非凡的命运。`

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
