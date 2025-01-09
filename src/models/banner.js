const sequelize = require('../../config/dbConfig') // 引入数据库连接

// 定义 Banners 模型
const Banners = sequelize.define(
	'Banners',
	{},
	{
		tableName: 'banners', // 表名
		timestamps: false, // 是否自动创建 createdAt 和 updatedAt 字段
		comment: '周一到周天的 banner 图' // 表级注释
	}
)

// 获取某一天的banner信息
async function getBannersByName(date) {
	try {
		const data = await Banners.findOne({
			attributes: ['id', 'media_id', 'name', 'url'],
			where: {
				name: date
			}
		})

		// // 获取所有区域的去重值
		// const regions = [...new Set(data.map((item) => item.region))]

		// // 定义区域分组逻辑
		// const result = []

		// regions.forEach((regionName) => {
		// 	const groupedRegion = {
		// 		name: regionName,
		// 		children: data.filter((item) => item.region === regionName)
		// 	}
		// 	result.push(groupedRegion)
		// })

		return { data }
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = {
	Banners,
	getBannersByName
}
