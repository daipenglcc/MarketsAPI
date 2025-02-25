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

// 更新或插入大集
async function upsertMerchant(ctx) {
	const merchantData = ctx.request.body
	if (merchantData.id) {
		console.log('merchantData', merchantData)
		// 如果存在 id，则更新现有大集
		const existing = await Market.findByPk(merchantData.id)
		if (!existing) {
			throw new Error('未找到该大集信息')
		}
		// 更新大集信息，添加 where 条件
		await Market.update(merchantData, { where: { id: merchantData.id } })
		ctx.body = {
			data: `成功更新了大集为: ${merchantData.name}`
		}
	} else {
		// 检查是否已存在相同的 name
		const existing = await Market.findOne({ where: { name: merchantData.name } })
		if (existing) {
			throw new Error('大集信息已存在')
		}
		const merchant = await Market.create(merchantData)

		ctx.body = {
			data: `成功创建了大集: ${merchant.name}`
		}
	}
}

// 查询大集详情
async function getMerchantDetail(ctx) {
	const id = ctx.request.query.id // 从请求中获取大集ID
	if (!id) {
		throw new Error('大集ID必填')
	}

	const merchantInfo = await Market.findByPk(id) // 根据ID查找大集
	if (!merchantInfo) {
		throw new Error('未找到该大集信息')
	}

	ctx.body = {
		data: merchantInfo // 返回大集信息
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
		offset: (pageIndex - 1) * pageSize,
		order: [['created_at', 'DESC']]
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
		throw new Error('区域ID必填')
	}
	const area = await Areas.findByPk(id)
	ctx.body = { data: area }
}

// 更新区域
async function updataArea(ctx) {
	const updatedData = ctx.request.body
	const id = updatedData.id
	if (!id) {
		throw new Error('区域ID必填')
	}

	const area = await Areas.findByPk(id)
	if (!area) {
		throw new Error('未找到该区域')
	}

	if (!updatedData.title) {
		throw new Error('区域标题必填')
	}

	await area.update(updatedData)

	ctx.body = { data: area }
}

// 删除大集
async function deleteMerchant(ctx) {
	const id = ctx.request.body.id // 从请求体中获取大集ID
	if (!id) {
		throw new Error('大集ID必填') // 抛出错误
	}

	const existing = await Market.findByPk(id) // 根据ID查找大集
	if (!existing) {
		throw new Error('未找到该大集信息') // 抛出错误
	}

	await Market.destroy({ where: { id } }) // 删除大集
	ctx.body = {
		data: `成功删除了大集: ${existing.name}`
	}
}

module.exports = {
	upsertMerchant,
	getMerchantDetail,
	createMerchants,
	getMerchants,
	getMerchantByDate,
	addArea,
	getArea,
	getAreaInfo,
	updataArea,
	deleteMerchant
}
