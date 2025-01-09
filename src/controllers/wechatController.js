const wechatService = require('../services/wechatService')
const Market = require('../models/market')
const Banner = require('../models/banner')
const utils = require('../utils/utils')
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

	const obj = await Market.getMarketByDate()

	let html = await ctx.render('index', {
		currentDate: currentDate,
		weekNumber: weekNumber + '周',
		dayOfWeek: daysInChinese[dayOfWeek],
		formatted: formatted,
		groupedRegion: obj.result
	})

	const result = await Banner.getBannersByName(daysInChinese[dayOfWeek])
	const thumb_media_id = result.data.dataValues.media_id

	try {
		const result = await wechatService.addDraft([
			{
				title: `济南大集，${daysInChinese[dayOfWeek]}提醒！`,
				author: '集集有你小助手',
				// digest: '希望是灵魂的心 Hope is the heartbeat of the soul',
				content: html,
				thumb_media_id
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

async function test(ctx) {
	try {
		// 获取当前日期或传入的日期
		let nowDate = ctx?.request.query.nowDate || dayjs().format('YYYY-MM-DD')
		console.log('nowDate', nowDate)
		// 校验日期格式（确保格式为 YYYY-MM-DD）
		if (!dayjs(nowDate, 'YYYY-MM-DD', true).isValid()) {
			throw new Error('Invalid date format. Expected YYYY-MM-DD.')
		}

		// 转换为标准日期对象并计算农历
		const dateObject = dayjs(nowDate).startOf('day').toDate() // 强制为当天零点时间
		const lunarData = chineseLunar.solarToLunar(dateObject)

		// 获取农历日期并转换为中文
		const lunar = utils.numberToChinese(lunarData.day)

		const merchants = await Market.findAll({
			attributes: ['id', 'region', 'name', 'address'],
			where: {
				dates: {
					[Op.like]: `%${lunar}%` // 动态使用 lunar 的值作为查询条件
				}
			}
		})

		// 获取所有区域的去重值
		const regions = [...new Set(merchants.map((item) => item.region))]

		// 定义区域分组逻辑
		const result = []

		regions.forEach((regionName) => {
			const groupedRegion = {
				name: regionName,
				children: merchants.filter((item) => item.region === regionName)
			}
			result.push(groupedRegion)
		})

		return result
		// console.log('result', result)
	} catch (error) {
		console.log(error)
	}
}

module.exports = {
	fetchToken,
	fetchMediaList,
	addDraft,
	fetchDraftList,
	fetchDraft
}
