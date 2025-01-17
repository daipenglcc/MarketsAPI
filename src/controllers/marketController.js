const dayjs = require('dayjs')
const { Market } = require('../models/market')

// 批量创建大集
async function createMerchants(ctx) {
	const merchantsData = ctx.request.body.merchantsData
	try {
		const merchants = await Market.bulkCreate(merchantsData)

		// 日志输出
		console.log(`成功创建了 ${merchants.length} 个大集`)
		merchants.forEach((merchant) => {
			console.log('创建大集:', merchant.name)
		})

		ctx.body = {
			code: 200,
			message: `成功创建了 ${merchants.length} 个大集`
		}
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
				merchants: ['数据无价🐶'],
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
		// 获取当前日期或传入的日期
		let nowDate = ctx.request.query.nowDate || dayjs().format('YYYY-MM-DD')
		const obj = await Market.getMarketByDate(nowDate)

		ctx.body = {
			code: 200,
			message: `阳历时间为：'${nowDate}'，农历标识为'${obj.lunar}'，找到大集${obj.merchants.length}个`,
			data: obj.result
		}
	} catch (error) {
		console.log('error', error)
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

module.exports = {
	createMerchants,
	getMerchants,
	getMerchantByDate
}
