async function responseFormatter(ctx, next) {
	try {
		await next()

		// 如果 ctx.body 存在，则格式化响应
		if (ctx.body) {
			ctx.body = {
				code: 200,
				message: ctx.body.message || '操作成功',
				data: ctx.body.data || ''
			}
		}
	} catch (error) {
		// 处理错误并格式化错误响应
		ctx.status = error.status || 500
		ctx.body = {
			code: error.status || 500,
			message: error.message || 'Internal Server Error',
			data: null
		}
	}
}

module.exports = responseFormatter
