module.exports = {
	apps: [
		{
			name: 'MarketsAPI',
			script: 'npm',
			args: 'run dev',
			watch: true,
			env: {
				NODE_ENV: 'development'
			}
		}
	]
}
