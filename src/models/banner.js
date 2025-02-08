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
		return { data }
	} catch (error) {
		console.log('Error:', error)
	}
}

module.exports = {
	Banners,
	getBannersByName
}
