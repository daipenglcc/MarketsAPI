function convertToStyledText(markdown) {
	// 初始化包装容器
	let styled = `<div style="width: 750px; margin: auto">`

	// 将 markdown 文本按行分割，以便处理
	let content = markdown

	// 主标题样式
	content = content.replace(
		/^# (.*$)/gm,
		`
		<h1 style="
			text-align: center;
			line-height: 1.75;
			font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light,
				'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
			font-size: 16.8px;
			display: table;
			padding: 0 1em;
			border-bottom: 2px solid #0f4c81;
			margin: 2em auto 1em;
			color: hsl(var(--foreground));
			font-weight: bold;
			margin-top: 0;
		">$1</h1>`
	)

	// 二级标题样式
	content = content.replace(
		/^## (.*$)/gm,
		`
		<h2 style="
			text-align: center;
			line-height: 1.75;
			font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light,
				'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
			font-size: 16.8px;
			display: table;
			padding: 0 0.2em;
			margin: 4em auto 2em;
			color: #fff;
			background: #0f4c81;
			font-weight: bold;
		">$1</h2>`
	)

	// 三级标题样式
	content = content.replace(
		/^### (.*$)/gm,
		`
		<h3 style="
			text-align: left;
			line-height: 1.2;
			font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light,
				'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
			font-size: 15.400000000000002px;
			padding-left: 8px;
			border-left: 3px solid #0f4c81;
			margin: 2em 8px 0.75em 0;
			color: hsl(var(--foreground));
			font-weight: bold;
		">$1</h3>`
	)

	// 段落样式
	content = content.replace(
		/^(?!<h[1-6]|<ul|<ol|<li|<blockquote|<pre)(.*$)/gm,
		`
		<p style="
			text-align: justify;
			line-height: 1.75;
			font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light,
				'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
			font-size: 14px;
			margin: 1.5em 8px;
			letter-spacing: 0.1em;
			color: hsl(var(--foreground));
		">$1</p>`
	)

	// 行内代码样式
	content = content.replace(
		/`([^`]+)`/g,
		`
		<code style="
			font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
			background-color: rgba(27,31,35,.05);
			padding: 3px 5px;
			border-radius: 4px;
			font-size: 12.6px;
			color: rgb(221, 17, 68);
		">$1</code>`
	)

	// 代码块样式
	content = content.replace(
		/```(\w*)\n([\s\S]*?)```/gm,
		`
		<pre style="
			background-color: #f6f8fa;
			border-radius: 3px;
			padding: 16px;
			font-size: 14px;
			line-height: 1.45;
			font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
			overflow: auto;
		"><code>$2</code></pre>`
	)

	// 列表样式
	content = content.replace(
		/^\s*[-*+]\s+(.*$)/gm,
		`
		<ul style="
			margin: 1.5em 8px;
			padding-left: 20px;
			list-style-type: disc;
		"><li style="
			margin-bottom: 0.5em;
			color: hsl(var(--foreground));
			font-size: 14px;
			line-height: 1.75;
		">$1</li></ul>`
	)

	// 引用样式
	content = content.replace(
		/^\s*>\s*(.*$)/gm,
		`
		<blockquote style="
			margin: 1.5em 8px;
			padding: 1em;
			border-left: 4px solid #0f4c81;
			background-color: rgba(15, 76, 129, 0.1);
			color: hsl(var(--foreground));
			font-size: 14px;
		">$1</blockquote>`
	)

	// 组合最终的 HTML
	styled += content
	styled += '</div>'

	return styled
}

module.exports = { convertToStyledText }
