const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接

// 定义 Drafts 模型
const Drafts = sequelize.define(
	'Drafts',
	{
		media_id: {
			type: DataTypes.STRING,
			allowNull: false // 如果字段是必填的
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false // 如果字段是必填的
		}
	},
	{
		tableName: 'drafts', // 表名
		timestamps: false, // 是否自动创建 createdAt 和 updatedAt 字段
		comment: '公众号草稿' // 表级注释
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
