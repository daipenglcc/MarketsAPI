const dayjs = require('dayjs')
const { Market, getMarketByDate } = require('../models/market')
const { Areas, addAreas } = require('../models/area')
const { Op } = require('sequelize')
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
	const pageIndex = parseInt(ctx.request.query.pageIndex) || 1 // 默认值为1
	const pageSize = parseInt(ctx.request.query.pageSize) || 10 // 默认值为10
	const name = ctx.request.query.name || '' // 获取模糊搜索的名称
	const areaId = ctx.request.query.areaId // 获取区域ID

	const whereClause = {
		// 添加模糊搜索条件
		name: {
			[Op.like]: `%${name}%`
		}
	}

	// 如果提供了 areaId，则添加到查询条件中
	if (areaId) {
		whereClause.area_id = areaId
	}

	const merchants = await Market.findAll({
		where: whereClause,
		limit: pageSize,
		offset: (pageIndex - 1) * pageSize
	})
	const totalCount = await Market.count({ where: whereClause }) // 获取总记录数
	ctx.body = { data: { merchants: merchants, count: totalCount, pageIndex, pageSize } }
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
		title: ctx.request.body.title
	})
	ctx.body = { data: ret }
}

// 查询全部区域
async function getArea(ctx) {
	const pageIndex = parseInt(ctx.request.query.pageIndex) || 1 // 默认值为1
	const pageSize = parseInt(ctx.request.query.pageSize) || 10 // 默认值为10

	const areas = await Areas.findAll({
		limit: pageSize,
		offset: (pageIndex - 1) * pageSize
	})
	const totalCount = await Areas.count() // 获取总记录数

	ctx.body = { data: { areas: areas, count: totalCount, pageIndex, pageSize } }
}

// 根据区域ID获取详情
async function getAreaInfo(ctx) {
	const id = ctx.request.query.id
	if (!id) {
		ctx.throw('区域ID必填')
	}
	const area = await Areas.findByPk(id)
	ctx.body = { data: area }
}

// 更新区域
async function updataArea(ctx) {
	const updatedData = ctx.request.body
	const id = updatedData.id
	if (!id) {
		ctx.throw('区域ID必填')
	}

	const area = await Areas.findByPk(id)
	if (!area) {
		ctx.throw('未找到该区域')
	}

	// 添加判断逻辑，确保更新的数据包含必要字段
	if (!updatedData.title) {
		ctx.throw('区域标题必填')
	}

	await area.update(updatedData)

	ctx.body = { data: area }
}

module.exports = {
	createMerchants,
	getMerchants,
	getMerchantByDate,
	addArea,
	getArea,
	getAreaInfo,
	updataArea
}
