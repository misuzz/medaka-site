'user strict';

window.onload = () => setInterval(timeCount, 1000);

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

	const msg = `${nowYear}年${nowMonth}月${nowDay}日(${nowYoubi})${nowHour}  時${nowMinute}分${nowSecond}秒 現在100匹以上飼育中`;
	document.getElementById("count").innerHTML = msg;
}
////////////////////carousel/////////////////////////////////

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const ul = document.getElementById("medakaBabyUl");
const slides = ul.children; //ulタグの子要素の情報を取る
const slidewidth = slides[0].getBoundingClientRect().width;
const dots = [];
//getBoundingClientRect()でslides[0]の情報を取れる
let currentSlide = 0;

//画像の数より多い・少ないとボタンを消す
function btnHidden() {
	if (currentSlide == 0) {
		prev.classList.add('btnHidden')
	} else if (currentSlide == slides.length - 1) {
		next.classList.add('btnHidden');
	} else {
		prev.classList.remove('btnHidden');
		next.classList.remove('btnHidden');
	}
}

//ドットの色を移動させる
function moveCurrentDots() {
	dots.forEach(aDot => {
		aDot.classList.remove('current');
	});
	dots[currentSlide].classList.add('current');
}

//btnHiddenを実行、ボタンを移動、画像をスライドさせる
function slideImg() {
	btnHidden();
	moveCurrentDots();
	ul.style.transform = `translateX(${-1 * slidewidth * currentSlide}px)`;
}

//画像の数だけ丸ボタンを作成する
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('button');
		dot.addEventListener('click', () => {
			currentSlide = i;
			moveCurrentDots();
			slideImg();
		})
		dots.push(dot);
		document.querySelector('nav').appendChild(dot);
	}

	dots[0].classList.add('current');

}


btnHidden();
createDots();

next.addEventListener('click', () => {
	currentSlide++;
	slideImg();
});

prev.addEventListener('click', () => {
	currentSlide--;
	slideImg();
});


/////////////////////////modalwindow////////////////////////////////////

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

//openModal
openModal.addEventListener('click', () => {
	modal.classList.remove('hiddenModal');
	mask.classList.remove('hiddenModal');
})


//closeModal
closeModal.addEventListener('click', () => {
	modal.classList.add('hiddenModal');
	mask.classList.add('hiddenModal');
})

mask.addEventListener('click', () => {
	closeModal.click();
})
