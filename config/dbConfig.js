const { Sequelize } = require('sequelize')
const path = require('path')

// 获取环境并加载对应的 env 文件
const environment = process.env.NODE_ENV || 'development'
require('dotenv').config({
	path: path.resolve(__dirname, `../.env.${environment}`)
})

// 从环境变量中获取数据库配置
const sequelize = new Sequelize(
	process.env.DB_NAME, // 数据库名称
	process.env.DB_USER, // 用户名
	process.env.DB_PASSWORD, // 密码
	{
		host: process.env.DB_HOST,
		dialect: 'mysql', // 使用 MySQL 数据库
		port: process.env.DB_PORT,
		logging: false // 是否开启 SQL 查询日志
	}
)

// 测试数据库连接
// async function testConnection() {
// 	try {
// 		await sequelize.authenticate()
// 		console.log('数据库连接成功！')
// 	} catch (error) {
// 		console.error('无法连接到数据库：', error)
// 	}
// }

// testConnection()

module.exports = sequelize
