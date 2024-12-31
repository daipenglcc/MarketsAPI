const Merchant = require('../models/market')

async function createMerchant() {
	const merchant = await Merchant.create({
		name: '大集1',
		contact: '123456789',
		address: '北京'
	})
	console.log('创建大集:', merchant.name)
}

// 批量创建大集
async function createMerchants(ctx) {
	const merchantsData = ctx.request.body.merchantsData
	try {
		// 使用 bulkCreate 批量插入大集数据
		const merchants = await Merchant.bulkCreate(merchantsData)

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
		const merchants = await Merchant.findAll()
		console.log('所有大集:', merchants)
		ctx.body = { code: 200, data: merchants }
	} catch (error) {
		ctx.code = -200
		ctx.body = { code: -200, message: error.message }
	}
}

async function getMerchantByName(name) {
	const merchant = await Merchant.findOne({ where: { name } })
	if (merchant) {
		console.log('找到大集:', merchant)
	} else {
		console.log('未找到大集')
	}
}

module.exports = {
	createMerchant,
	createMerchants,
	getMerchants,
	getMerchantByName
}
