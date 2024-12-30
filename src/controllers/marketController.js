const Merchant = require('../models/market')

async function createMerchant() {
	const merchant = await Merchant.create({
		name: '大集1',
		contact: '123456789',
		address: '北京'
	})
	console.log('创建大集:', merchant.name)
}

// 批量创建商户
async function createMerchants(ctx) {
	// const { access_token } = ctx.request.query
	console.log('XXXXX1', ctx.request.body)
	// try {
	// 	// 使用 bulkCreate 批量插入商户数据
	// 	const merchants = await Merchant.bulkCreate(merchantsData)

	// 	// 输出成功创建的商户数量
	// 	console.log(`成功创建了 ${merchants.length} 个商户`)

	// 	// 如果你想显示每个商户的名称，可以遍历并打印
	// 	merchants.forEach((merchant) => {
	// 		console.log('创建大集:', merchant.name)
	// 	})
	// } catch (error) {
	// 	console.error('批量创建商户失败:', error)
	// }
}

// 查询所有大集信息
async function getMerchants() {
	const merchants = await Merchant.findAll()
	console.log('所有大集:', merchants)
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
