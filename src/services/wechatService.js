const axios = require('axios')

async function getWeChatToken() {
	try {
		console.log('WX_APPID', process.env.WX_APPID)
		const response = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
			params: {
				grant_type: 'client_credential',
				appid: process.env.WX_APPID,
				secret: process.env.WX_SECRET
			}
		})

		return response.data.access_token
	} catch (error) {
		console.log('Error Token:', error)
		throw new Error('Token获取失败')
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
		console.error('Error:', error)
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

async function fetchDraftList() {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/draft/batchget?access_token=${token}`,
			{
				offset: 0,
				count: 20,
				no_content: 1
			}
		)
		return response.data
	} catch (error) {
		console.error('Error adding draft:', error)
		throw new Error('Failed to add draft')
	}
}

async function fetchDraft(data) {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/draft/get?access_token=${token}`,
			{
				media_id: data.media_id
			}
		)
		return response.data
	} catch (error) {
		console.error('Error adding draft:', error)
		throw new Error('Failed to add draft')
	}
}

async function sendArticle(data) {
	try {
		const token = await getWeChatToken()
		const response = await axios.post(
			`https://api.weixin.qq.com/cgi-bin/freepublish/submit?access_token=${token}`,
			{
				media_id: data.media_id
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
	addDraft,
	fetchDraftList,
	fetchDraft,
	sendArticle
}
