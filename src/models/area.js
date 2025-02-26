/*
 * @Descripttion:
 * @version: 1.0.1
 * @Author: daipeng
 * @Date: 2025-02-09 00:50:18
 * @LastEditors: daipeng
 * @LastEditTime: 2025-02-26 16:17:32
 */
const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接

// 定义 Areas 模型
const Areas = sequelize.define(
	'Areas',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true, // 自增ID
			comment: '唯一标识符ID' // 添加注释
		},
		locked: {
			type: DataTypes.INTEGER,
			allowNull: false,
			comment: '数据锁定'
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '地区名称' // 添加注释
		}
	},
	{
		tableName: 'areas', // 表名
		timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
		underscored: true // 使用下划线命名，如 id 会变为 market_id
	}
)

// 插入一条区域数据
async function addAreas(data) {
	try {
		// 检查是否已存在相同的 title
		const existingArea = await Areas.findOne({ where: { title: data.title } })
		if (existingArea) {
			throw new Error('区域标题已存在') // 抛出错误
		}

		const result = await Areas.create(data)
		return result
	} catch (error) {
		console.log('Error:', error)
		throw error
	}
}

module.exports = {
	Areas,
	addAreas
}
