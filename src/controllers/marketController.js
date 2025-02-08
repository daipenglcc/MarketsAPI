const dayjs = require('dayjs')
const { Market, getMarketByDate } = require('../models/market')
const { Areas, addAreas } = require('../models/area')
// const Areas = require('../models/area')

// 批量创建大集
async function createMerchants(ctx) {
	const merchantsData = ctx.request.body.merchantsData
	const merchants = await Market.bulkCreate(merchantsData)

	// 日志输出
	console.log(`成功创建了 ${merchants.length} 个大集`)
	merchants.forEach((merchant) => {
		console.log('创建大集:', merchant.name)
	})

	ctx.body = {
		data: `成功创建了 ${merchants.length} 个大集`
	}
}

// 查询所有大集信息
async function getMerchants(ctx) {
	const merchants = await Market.findAll()
	ctx.body = { data: { merchants: merchants, count: merchants.length } }
}

async function getMerchantByDate(ctx) {
	// 获取当前日期或传入的日期
	let nowDate = ctx.request.query.nowDate || dayjs().format('YYYY-MM-DD')
	const obj = await getMarketByDate(nowDate)

	ctx.body = {
		message: `阳历时间为：'${nowDate}'，农历标识为'${obj.lunar}'，找到大集${obj.merchants.length}个`,
		data: obj.result
	}
}

// 新增区域
async function addArea(ctx) {
	let ret = await addAreas({
		area_id: ctx.request.body.area_id,
		title: ctx.request.body.title
	})
	ctx.body = { data: ret }
}

// 查询全部区域
async function getArea(ctx) {
	const areas = await Areas.findAll()
	ctx.body = { data: { areas: areas, count: areas.length } }
}

module.exports = {
	createMerchants,
	getMerchants,
	getMerchantByDate,
	addArea,
	getArea
}
