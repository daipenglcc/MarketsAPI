const dayjs = require('dayjs')
const Market = require('../models/market')
const utils = require('../utils/utils')
const chineseLunar = require('chinese-lunar')
const { Op } = require('sequelize')

// async function createMerchant() {
// 	const merchant = await Market.create({
// 		name: '大集1',
// 		contact: '123456789',
// 		address: '北京'
// 	})
// 	console.log('创建大集:', merchant.name)
// }

// 批量创建大集
async function createMerchants(ctx) {
	const merchantsData = ctx.request.body.merchantsData
	try {
		// 使用 bulkCreate 批量插入大集数据
		const merchants = await Market.bulkCreate(merchantsData)

		// 输出成功创建的大集数量
		console.log(`成功创建了 ${merchants.length} 个大集`)

		// 如果你想显示每个大集的名称，可以遍历并打印
		merchants.forEach((merchant) => {
			console.log('创建大集:', merchant.name)
		})
	} catch (error) {
		console.error('批量创建大集失败:', error)
	}
}

// 查询所有大集信息
async function getMerchants(ctx) {
	try {
		// const merchants = await Market.findAll()
		// ctx.body = {
		// 	code: 200,
		// 	data: {
		// 		merchants: merchants,
		// 		count: merchants.length
		// 	}
		// }

		ctx.body = {
			code: 200,
			data: {
				merchants: [],
				count: 0
			}
		}
	} catch (error) {
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

async function getMerchantByDate(ctx) {
	try {
		let nowDate = ctx.request.query.nowDate
		if (!nowDate) {
			nowDate = dayjs().format('YYYY-MM-DD')
		}
		console.log('当前时间', nowDate)
		const lunarData = chineseLunar.solarToLunar(new Date(nowDate))
		const lunar = utils.numberToChinese(lunarData.day - 1) // 获取农历日期
		console.log('农历日期', lunar)

		const merchants = await Market.findAll({
			where: {
				dates: {
					[Op.like]: `%${lunar}%` // 动态使用 lunar 的值作为查询条件
				}
			}
		})

		if (merchants) {
			ctx.body = {
				code: 200,
				message: `阳历时间为：'${nowDate}'，农历标识为'${lunar}'，找到大集${merchants.length}个`,
				data: merchants
			}
		} else {
			ctx.body = {
				code: 200,
				message: `阳历时间为：'${nowDate}'，农历标识为'${lunar}'，找到大集${merchants.length}个`,
				data: merchants
			}
		}
	} catch (error) {
		console.log('error', error)
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

module.exports = {
	// createMerchant,
	createMerchants,
	getMerchants,
	getMerchantByDate
}
