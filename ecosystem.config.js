module.exports = {
	apps: [
		{
			name: 'MarketsAPI',
			script: 'npm',
			args: 'run start', // 使用 npm script 启动
			watch: true,
			env: {
				// 默认环境配置
				NODE_ENV: 'development',
				PORT: 7676
			},
			env_development: {
				NODE_ENV: 'development',
				PORT: 7676,
				watch: true
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 7676,
				watch: false
			}
		}
	]
}
