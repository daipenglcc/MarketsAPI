const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// 定义 User 模型
const User = sequelize.define(
	'User',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true, // 自增ID
			comment: '唯一标识符ID' // 添加注释
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true, // 用户名唯一
			comment: '用户名' // 添加注释
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '用户密码' // 添加注释
		}
	},
	{
		tableName: 'users', // 表名
		timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
		underscored: true // 使用下划线命名
	}
)

// 注册用户
async function registerUser(username, password) {
	// 检查是否已存在相同的 title
	const existing = await User.findOne({ where: { username: username } })
	if (existing) {
		throw new Error('用户已存在') // 抛出错误
	}

	const hashedPassword = await bcrypt.hash(password, 10) // 哈希密码
	const user = await User.create({ username, password: hashedPassword })
	return user
}

// 用户登录
async function loginUser(username, password) {
	const user = await User.findOne({ where: { username } })
	if (!user) {
		throw new Error('用户不存在')
	}

	const isPasswordValid = await bcrypt.compare(password, user.password)
	if (!isPasswordValid) {
		throw new Error('密码错误')
	}

	// 生成 JWT
	const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
		expiresIn: '24h'
	})
	return { user, token }
}

module.exports = {
	User,
	registerUser,
	loginUser
}
