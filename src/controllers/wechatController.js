const wechatService = require('../services/wechatService')
const { getMarketByDate } = require('../models/market')
const Banner = require('../models/banner')
const Draft = require('../models/draft')
const utils = require('../utils/utils')
const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
const chineseLunar = require('chinese-lunar')
dayjs.extend(weekOfYear)

// 获取微信 access_token
async function fetchToken(ctx) {
	const data = await wechatService.getWeChatToken()
	ctx.body = { data: data }
}

// 获取素材列表
async function fetchMediaList(ctx) {
	const data = await wechatService.getWeChatMediaList()
	ctx.body = { data: data }
}

// 新增草稿
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

	const obj = await getMarketByDate()

	let html = await ctx.render('index', {
		currentDate: currentDate,
		weekNumber: weekNumber + '周',
		dayOfWeek: daysInChinese[dayOfWeek],
		formatted: formatted,
		groupedRegion: obj.result
	})

	const nowWeek = daysInChinese[dayOfWeek]
	const bannerInfo = await Banner.getBannersByName(nowWeek)
	const thumb_media_id = bannerInfo.data.dataValues.media_id

	let title = `济南大集，${daysInChinese[dayOfWeek]}提醒！`
	const result = await wechatService.addDraft([
		{
			title,
			author: '集集有你小助手',
			// digest: '希望是灵魂的心 Hope is the heartbeat of the soul',
			content: html,
			thumb_media_id
		}
	])
	// 数据库插入数据
	await Draft.sendDraft({
		media_id: result.media_id,
		title
	})

	ctx.body = { data: result }
	return result
}

// 获取草稿列表
async function fetchDraftList(ctx) {
	const result = await wechatService.fetchDraftList()
	ctx.body = { data: result }
}

// 获取草稿详情
async function fetchDraft(ctx) {
	const { media_id } = ctx.request.query
	const result = await wechatService.fetchDraft({
		media_id: media_id
	})
	ctx.body = { data: result }
}

// 文章发布
async function submitArticle(ctx) {
	// 查询最后一条草稿
	// const ret = await Draft.getLastDraft()

	// 先调用 addDraft 方法
	const ret = await addDraft(ctx)
	console.log('XXXret', ret)

	// 发布文章
	const result = await wechatService.sendArticle({
		media_id: ret.media_id
	})
	ctx.body = { data: result }
}

module.exports = {
	fetchToken,
	fetchMediaList,
	addDraft,
	fetchDraftList,
	fetchDraft,
	submitArticle
}
