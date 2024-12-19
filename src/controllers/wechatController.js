const wechatService = require('../services/wechatService')
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
	// const { articles } = ctx.request.body
	const contentPath = path.join(__dirname, 'content.html')
	let content = fs.readFileSync(contentPath, 'utf-8')

	// 使用 dayjs 获取当前日期和周数
	const now = dayjs()
	const currentDate = now.format('YYYY年MM月DD日') // 当前日期
	const weekNumber = now.week() // 当前周数

	console.log('Current Date:', now.year(), now.month() + 1, now.date()) // Debugging: Log the current date

	// 计算生肖和农历日期
	let chineseZodiac = '' // 初始化 chineseZodiac
	let lunarDate = null // 初始化 lunarDate
	try {
		lunarDate = chineseLunar.solarToLunar(now.year(), now.month() + 1, now.date()) // 农历日期
		console.log('Lunar Date:', lunarDate) // 调试：打印农历日期对象
		chineseZodiac = chineseLunar.getAnimal(lunarDate.lunarYear) // 根据需要调整属性名称
		console.log('Chinese Zodiac:', chineseZodiac)
	} catch (error) {
		console.error('Error converting solar to lunar:', error)
	}

	// 计算距离特定日期的天数
	const daysUntilWeekend = 6 - now.day() // 距离周末的天数
	const daysUntilMayDay = calculateDaysUntil(now, 5, 1) // 距离五一的天数
	const daysUntilNationalDay = calculateDaysUntil(now, 10, 1) // 距离国庆的天数
	const daysUntilNewYear = calculateDaysUntil(now, 12, 31) // 距离元旦的天数
	const daysUntilLittleNewYear = calculateLunarDaysUntil(now, 12, 23) // 距离小年的天数
	const daysUntilSpringFestival = calculateLunarDaysUntil(now, 12, 29) // 距离春节的天数
	const daysUntilDragonBoat = calculateLunarDaysUntil(now, 5, 5) // 距离端午的天数
	const daysUntilMidAutumn = calculateLunarDaysUntil(now, 8, 15) // 距离中秋的天数

	console.log('Days Until Little New Year:', daysUntilLittleNewYear)
	console.log('Days Until Spring Festival:', daysUntilSpringFestival)
	console.log('Days Until Dragon Boat:', daysUntilDragonBoat)
	console.log('Days Until Mid Autumn:', daysUntilMidAutumn)

	// 用动态值替换内容中的占位符
	content = content.replace('{{currentDate}}', currentDate) // 替换为当前日期
	content = content.replace('{{weekNumber}}', `第${weekNumber}周`) // 替换为当前周数
	content = content.replace('{{chineseZodiac}}', chineseZodiac) // 替换为生肖
	if (lunarDate) {
		content = content.replace(
			'{{lunarDate}}',
			`${lunarDate.year}年${lunarDate.month}月${lunarDate.day}日`
		) // 替换为农历日期
	}
	content = content.replace('?周末?', daysUntilWeekend) // 替换为距离周末的天数
	content = content.replace('?五一?', daysUntilMayDay) // 替换为距离五一的天数
	content = content.replace('?中秋?', daysUntilMidAutumn) // 替换为距离中秋的天数
	content = content.replace('?端午?', daysUntilDragonBoat) // 替换为距离端午的天数
	content = content.replace('?国庆?', daysUntilNationalDay) // 替换为距离国庆的天数
	content = content.replace('?元旦?', daysUntilNewYear) // 替换为距离元旦的天数
	content = content.replace('?小年?', daysUntilLittleNewYear) // 替换为距离小年的天数
	content = content.replace('?春节?', daysUntilSpringFestival) // 替换为距离春节的天数

	try {
		const result = await wechatService.addDraft([
			{
				title: '济南大集，周四提醒！',
				author: '集集有你小助手',
				digest: '希望是灵魂的心 Hope is the heartbeat of the soul',
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

// 计算距离特定日期的天数
function calculateDaysUntil(now, month, day) {
	const currentYear = now.year()
	let holidayDayjs = dayjs(`${currentYear}-${month}-${day}`)

	// 如果节日已经过去，计算到下一年的天数
	if (holidayDayjs.isBefore(now)) {
		return `已经过去${now.diff(holidayDayjs, 'day')}天`
	} else {
		return `还有${holidayDayjs.diff(now, 'day')}天`
	}
}

// 计算距离农历节日的天数
function calculateLunarDaysUntil(now, lunarMonth, lunarDay) {
	const currentYear = now.year()
	let holidayDate = chineseLunar.lunarToSolar(currentYear, lunarMonth, lunarDay)
	console.log(`Lunar to Solar for ${lunarMonth}/${lunarDay}:`, holidayDate) // Log conversion result

	// Ensure the holidayDate is parsed correctly
	let holidayDayjs = dayjs(holidayDate)

	// 如果节日已经过去，计算到下一年的天数
	if (holidayDayjs.isBefore(now)) {
		// holidayDate = chineseLunar.lunarToSolar(currentYear + 1, lunarMonth, lunarDay)
		// holidayDayjs = dayjs(holidayDate)
		return `已经过去${now.diff(holidayDayjs, 'day')}天`
	} else {
		return `还有${holidayDayjs.diff(now, 'day')}天`
	}

	// return `还有${holidayDayjs.diff(now, 'day')}天`
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
