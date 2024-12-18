require('dotenv').config()
const wx = require('wx-server-sdk') // 确保你已经安装并初始化 wx-server-sdk

wx.init({
	env: process.env.WX_ENV
})

const axios = require('axios')

async function getWeChatToken() {
	try {
		const response = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
			params: {
				grant_type: 'client_credential',
				appid: 'wx5cc63b63f4486af0',
				secret: '37de2579db05998dcc58a42b88f33b4b'
			}
		})
		return response.data.access_token
	} catch (error) {
		console.error('Error fetching WeChat token:', error)
		throw new Error('Failed to fetch WeChat token')
	}
}

async function getOpenId(code) {
	try {
		const response = await axios.get('https://api.weixin.qq.com/sns/oauth2/access_token', {
			params: {
				appid: 'wx5cc63b63f4486af0',
				secret: '37de2579db05998dcc58a42b88f33b4b',
				code: code,
				grant_type: 'authorization_code'
			}
		})
		return response.data.openid
	} catch (error) {
		console.error('Error fetching OpenID:', error)
		throw new Error('Failed to fetch OpenID')
	}
}

async function sendWeChatMessage(openId, message) {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${token}`,
			{
				touser: openId,
				msgtype: 'text',
				text: {
					content: message
				}
			}
		)
		return response.data
	} catch (error) {
		console.error('Error sending WeChat message:', error)
		throw new Error('Failed to send WeChat message')
	}
}

async function addDraft(articles) {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/draft/add?access_token=${token}`,
			{
				articles: articles
			}
		)
		return response.data
	} catch (error) {
		console.error('Error adding draft:', error)
		throw new Error('Failed to add draft')
	}
}

function callWeChatCloud() {
	return wx.cloud
		.callContainer({
			config: {
				env: process.env.WX_ENV
			},
			path: '/api/getAccessToken',
			header: {
				'X-WX-SERVICE': process.env.WX_SERVICE
			},
			method: 'GET'
		})
		.then((response) => {
			console.log('Response:', response)
			return response.data.token
		})
		.catch((error) => {
			console.error('Error:', error)
			throw error
		})
}

module.exports = {
	getWeChatToken,
	getOpenId,
	sendWeChatMessage,
	addDraft,
	callWeChatCloud
}
