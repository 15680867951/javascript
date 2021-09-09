var date = new Date()
var year = date.getFullYear()
var month = date.getMonth()+1
var dates = date.getDate()
var day = date.getDay()
var dayArr = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六']
console.log(year + '年' + month + '月' + dates + '日' + ' ' + dayArr[day]) 


