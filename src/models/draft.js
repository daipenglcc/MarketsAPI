const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接

// 定义 Drafts 模型
const Drafts = sequelize.define(
	'Drafts',
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
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '标题' // 添加注释
		}
	},
	{
		tableName: 'drafts', // 表名
		timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
		underscored: true // 使用下划线命名，如 id 会变为 market_id
	}
)

// 插入一条草稿
async function sendDraft(data) {
	try {
		const result = await Drafts.create(data)
		return result
	} catch (error) {
		console.log('Error:', error)
		throw error
	}
}

// 获取最后一条草稿
async function getLastDraft() {
	try {
		const data = await Drafts.findOne({
			attributes: ['id', 'media_id', 'title'],
			order: [['id', 'DESC']],
			limit: 1
		})

		return { data }
	} catch (error) {
		console.log('Error:', error)
	}
}

module.exports = {
	Drafts,
	getLastDraft,
	sendDraft
}
