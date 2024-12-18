require('dotenv').config()
const wx = require('wx-server-sdk') // 确保你已经安装并初始化 wx-server-sdk

wx.init({
	env: process.env.WX_ENV
})

function callCloudFunction(path, method = 'GET', data = {}) {
	return wx.cloud
		.callContainer({
			config: {
				env: process.env.WX_ENV
			},
			path: path,
			header: {
				'X-WX-SERVICE': process.env.WX_SERVICE
			},
			method: method,
			data: {
				...data,
				appid: process.env.WX_APPID,
				secret: process.env.WX_SECRET
			}
		})
		.then((response) => {
			console.log('Response:', response)
			return response.data
		})
		.catch((error) => {
			console.error('Error:', error)
			throw error
		})
}

module.exports = {
	callCloudFunction
}
