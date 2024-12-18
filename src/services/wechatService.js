const axios = require('axios')

async function getWeChatToken() {
	try {
		const response = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
			params: {
				appid: 'wx5cc63b63f4486af0',
				secret: '37de2579db05998dcc58a42b88f33b4b',
				grant_type: 'client_credential'
			}
		})

		return response.data.access_token
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

module.exports = {
	getWeChatToken,
	sendWeChatMessage,
	addDraft
}
