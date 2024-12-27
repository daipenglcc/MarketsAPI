const wechatService = require('../services/wechatService')
const utils = require('../utils/utils')
const fs = require('fs')
const path = require('path')
const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
const chineseLunar = require('chinese-lunar')
dayjs.extend(weekOfYear)

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
	const contentPath = path.join(__dirname, 'content.html')
	let content = fs.readFileSync(contentPath, 'utf-8')
	const lunar = chineseLunar.solarToLunar(new Date())

	// 当前日期
	const currentDate = dayjs().format('YYYY年MM月DD日')
	// 当前周数
	const weekNumber = dayjs().week()
	// 当前是周几
	const dayOfWeek = dayjs().day() // 返回数字 0（周日）到 6（周六）
	const daysInChinese = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	// 获取生肖
	const zodiacSigns = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
	const zodiac = zodiacSigns[(lunar.year - 4) % 12]
	// 获取农历日期
	const formattedLunarDate = utils.formatLunar(lunar)
	// 格式组装
	const formatted = `农历${lunar.year}【${zodiac}】年${formattedLunarDate}`

	content = content.replace(/\?当前日期\?/g, currentDate)
	content = content.replace(/\?当前周\?/g, weekNumber + '周')
	content = content.replace(/\?当前周几\?/g, daysInChinese[dayOfWeek])
	content = content.replace(/\?当前农历\?/g, formatted)

	try {
		const result = await wechatService.addDraft([
			{
				title: '济南大集，周四提醒！',
				author: '集集有你小助手',
				// digest: '希望是灵魂的心 Hope is the heartbeat of the soul',
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
