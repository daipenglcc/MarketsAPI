const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接

// 定义 Banners 模型
const Banners = sequelize.define(
	'Banners',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true, // 自增ID
			comment: '唯一标识符ID' // 添加注释
		},
		media_id: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '媒体ID' // 添加注释
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '名称' // 添加注释
		},
		url: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '链接' // 添加注释
		}
	},
	{
		tableName: 'banners', // 表名
		timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
		underscored: true // 使用下划线命名，如 id 会变为 market_id
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
