const axios = require('axios')

async function getWeChatToken() {
	try {
		const response = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
			params: {
				grant_type: 'client_credential',
				appid: process.env.WX_APPID,
				secret: process.env.WX_SECRET
			}
		})

		return response.data.access_token
	} catch (error) {
		console.error('Error fetching OpenID:', error)
		throw new Error('Failed to fetch OpenID')
	}
}

async function getWeChatMediaList() {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/material/batchget_material?access_token=${token}`,
			{
				type: 'image',
				offset: 0,
				count: 20
			}
		)

		return response.data
	} catch (error) {
		console.error('Error fetching OpenID:', error)
		throw new Error('Failed to fetch OpenID')
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
	getWeChatMediaList,
	addDraft
}
