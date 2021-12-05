'user strict';

window.onload = () => setInterval("timeCount", 1000);
// window.onload = () => showProcess(now);

// var now = new Date();
// var nowYear = now.getFullYear();
// var nowMonth = now.getMonth() + 1;
// var nowDay = now.getDate();
// var array = new Array("日", "月", "火", "水", "木", "金", "土");
// var nowYoubi = array[now.getDay()];
// var nowHour = now.getHours();
// var nowMinute = now.getMinutes();
// var nowSecond = now.getSeconds();
// var showDate = new Date(nowYear, nowMonth, 1); //毎月１日で取得

function timeCount() {
	let now = new Date();
	let nowYear = now.getFullYear();
	let nowMonth = now.getMonth() + 1;
	let nowDay = now.getDate();
	let array = new Array("日", "月", "火", "水", "木", "金", "土");
	let nowYoubi = array[now.getDay()];
	let nowHour = now.getHours();
	let nowMinute = now.getMinutes();
	let nowSecond = now.getSeconds();
	nowMonth = ('0' + nowMonth).slice(-2);
	nowDay = ('0' + nowDay).slice(-2);
	nowHour = ('0' + nowHour).slice(-2);
	nowMinute = ('0' + nowMinute).slice(-2);
	nowSecond = ('0' + nowSecond).slice(-2);

	let msg = "<p>" + nowYear + "年" + nowMonth + "月" + nowDay + "日" + "(" + nowYoubi + ")" + nowHour + "時" + nowMinute + "分" + nowSecond + "秒 現在、</p>";
	document.getElementById("count").innerHTML = msg;
}


//////////////////////////////////////////////////////////////////////
// function prev() {
// 	showDate.setMonth(nowMonth - 1);
// 	showProcess(showDate);
// }

// function next() {
// 	showDate.setMonth(nowMonth + 1);
// 	showProcess(showDate);
// }

// //カレンダータイトルの取得
// function showProcess(date) {
// 	var year = date.getFullYear();
// 	var month = date.getMonth();
// 	document.getElementById("calenderTitle").innerHTML = year + "年" + (month+1) + "月";
// 	var calenderContent = createProcess(year, month);
// 	document.getElementById("calenderContent").innerHTML = calenderContent
// }

// //カレンダーの中身の作成
// function createProcess(aYear, aMonth) {
// 	//tableタグの作成
// 	var createTableTag = "<table><tr class = 'dayOfWeek'>";
// 	var p = 0
// 	while(p < array.length){
// 		createTableTag += "<th>" + array[p] + "</th>";
// 		p++;
// 	}
// 	createTableTag += "</tr>";

// 	var count = 0;
// 	var startDayOfWeek = new Date(aYear, aMonth, 1).getDay(); //表示する月の1日の曜日
// 	var endDate = new Date(aYear, aMonth + 1, 0).getDate(); //表示する月の末日
// 	var lastMonthEndDate = new Date(aYear, aMonth, 0).getDate();
// 	var row = Math.ceil((startDayOfWeek + endDate) / array.length); //週の数

// 	for (var i = 0; i < row; i++) {
// 		createTableTag += "<tr>";
// 		for (var j = 0; j < array.length; j++) {
// 			if (i == 0 && j < startDayOfWeek) {
// 				createTableTag += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
// 			}else if (count >= endDate){
// 				count++;
// 				createTableTag += "<td class='disabled'>" + (count - endDate) + "</td>";
// 			}else{
// 				count++;
// 				if(aYear == nowYear && aMonth == nowMonth && count == nowDay){
// 					createTableTag += "<td class='today'>" + count + "</td>";
// 				}else{
// 					createTableTag += "<td>" + count + "</td>";
// 				}
// 			}
// 		}
// 		createTableTag += "</tr>";
// 	}
// 	return createTableTag;
// }
