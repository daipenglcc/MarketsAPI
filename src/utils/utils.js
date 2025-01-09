// 农历日期格式化函数
function formatLunar(lunar) {
	// 农历月份名称
	const lunarMonths = [
		'',
		'正月',
		'二月',
		'三月',
		'四月',
		'五月',
		'六月',
		'七月',
		'八月',
		'九月',
		'十月',
		'十一月',
		'腊月'
	]

	// 农历日期名称
	const lunarDays = [
		'',
		'初一',
		'初二',
		'初三',
		'初四',
		'初五',
		'初六',
		'初七',
		'初八',
		'初九',
		'初十',
		'十一',
		'十二',
		'十三',
		'十四',
		'十五',
		'十六',
		'十七',
		'十八',
		'十九',
		'二十',
		'廿一',
		'廿二',
		'廿三',
		'廿四',
		'廿五',
		'廿六',
		'廿七',
		'廿八',
		'廿九',
		'三十'
	]

	const month = lunarMonths[lunar.month]
	const day = lunarDays[lunar.day - 1]
	return `${month}${day}`
}

function numberToChinese(num) {
	console.log('num', num)
	let nums = '' + num
	if (nums.length == 2) {
		nums = nums[nums.length - 1]
	}
	if (nums == '0') {
		nums = 10
	}
	const chineseNumbers = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

	console.log('nums', nums)

	// 如果 num 介于 1 到 10 之间，直接返回
	if (nums >= 1 && nums <= 10) {
		return chineseNumbers[nums]
	} else {
		return '数字超出范围'
	}
}

module.exports = {
	formatLunar,
	numberToChinese
}
