const { DataTypes } = require('sequelize')
const sequelize = require('../../config/dbConfig') // 引入数据库连接
const { Op } = require('sequelize')
const utils = require('../utils/utils')
const dayjs = require('dayjs')
const weekOfYear = require('dayjs/plugin/weekOfYear')
const chineseLunar = require('chinese-lunar')
dayjs.extend(weekOfYear)

// 定义 Market 模型
const Market = sequelize.define(
	'Market',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true, // 自增ID
			comment: '唯一标识符ID' // 添加注释
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '大集名称，不能为空'
		},
		region: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '大集所在的区域'
		},
		dates: {
			type: DataTypes.JSON, // 使用 JSON 类型存储日期数组
			allowNull: false,
			comment: '大集开放的日期'
		},
		address: {
			type: DataTypes.STRING,
			allowNull: false,
			comment: '大集地址'
		},
		bus_routes: {
			type: DataTypes.JSON, // 使用 JSON 类型存储公交路线数组
			allowNull: false,
			comment: '公交路线'
		},
		location: {
			type: DataTypes.JSON, // 使用 JSON 类型存储地理位置信息（经度、纬度）
			allowNull: false,
			comment: '大集的地理位置（包含经纬度）'
		}
	},
	{
		tableName: 'markets', // 表名
		timestamps: true, // 自动创建 createdAt 和 updatedAt 字段
		underscored: true, // 使用下划线命名，如 id 会变为 market_id
		comment: '大集表，存储各个大集的信息' // 表级注释
	}
)

// // 同步数据库模型
// async function syncModel() {
// 	try {
// 		await Market.sync({ force: true }) // 如果表存在则删除重建
// 		console.log('Market 表已同步！')
// 	} catch (error) {
// 		console.error('同步 Market 表时发生错误：', error)
// 	}
// }

// syncModel()

// 获取某一天的大集信息
async function getMarketByDate(date) {
	try {
		// 获取当前日期或传入的日期
		let nowDate = date || dayjs().format('YYYY-MM-DD')
		// 校验日期格式（确保格式为 YYYY-MM-DD）
		if (!dayjs(nowDate, 'YYYY-MM-DD', true).isValid()) {
			throw new Error('Invalid date format. Expected YYYY-MM-DD.')
		}

		// 转换为标准日期对象并计算农历
		const dateObject = dayjs(nowDate).startOf('day').toDate() // 强制为当天零点时间
		const lunarData = chineseLunar.solarToLunar(dateObject)

		// 获取农历日期并转换为中文
		const lunar = utils.numberToChinese(lunarData.day)

		const merchants = await Market.findAll({
			attributes: ['id', 'region', 'name', 'address'],
			where: {
				dates: {
					[Op.like]: `%${lunar}%` // 动态使用 lunar 的值作为查询条件
				}
			}
		})

		// 获取所有区域的去重值
		const regions = [...new Set(merchants.map((item) => item.region))]

		// 定义区域分组逻辑
		const result = []

		regions.forEach((regionName) => {
			const groupedRegion = {
				name: regionName,
				children: merchants.filter((item) => item.region === regionName)
			}
			result.push(groupedRegion)
		})

		return { merchants, result, lunar }
	} catch (error) {
		console.log('error', error)
	}
}

module.exports = {
	Market,
	getMarketByDate
}
