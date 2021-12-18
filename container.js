'user strict';

{
	const allPhotos = {
		'1':'medakaShiiku/1.jpeg',
		'2':'medakaShiiku/2.jpeg',
		'3':'medakaShiiku/3.jpeg',
		'4':'medakaShiiku/4.jpeg',
		'5':'medakaShiiku/5.jpeg',
		'6':'medakaShiiku/6.jpeg',
		'7':'medakaShiiku/7.jpeg',
		'8':'medakaShiiku/8.jpeg',
		'9':'medakaShiiku/9.jpeg',
		'10':'medakaShiiku/10.jpeg',
		'11':'medakaShiiku/11.jpeg',
		'12':'medakaShiiku/12.jpeg',
		'13':'medakaShiiku/13.jpeg',
		'14':'medakaShiiku/14.jpeg',
		'15':'medakaShiiku/15.jpeg',
		'16':'medakaShiiku/16.jpeg',
	}

	//create bigimg
	Object.keys(allPhotos).forEach((text) => {
		const createdLI = document.createElement('li');
		const createdImg = document.createElement('img');
		const createdP = document.createElement('p');

		createdImg.className = "bigimg-children";
		createdImg.src = allPhotos[text];
		createdP.textContent = text;

		createdLI.appendChild(createdImg);
		createdLI.appendChild(createdP);

		document.getElementById('bigimg').appendChild(createdLI);
	});

	//create minilist
	Object.keys(allPhotos).forEach((text) => {
		const createdLI = document.createElement('li');
		const createdImg = document.createElement('img');

		createdImg.className = "list-children";
		createdImg.src = allPhotos[text];

		createdLI.appendChild(createdImg);

		document.getElementById('miniimgList').appendChild(createdLI);
	});

	//create carousel
	const next = document.getElementById('photoNext');
	const prev = document.getElementById('photoPrev');
	const ul = document.getElementById('bigimg');
	const slides = ul.children;
	const miniimg = Array.from(document.querySelectorAll('.list-children'));
	let currentIndex = 0;
	const slidewidth = slides[0].getBoundingClientRect().width;

	hiddenButton();

	next.addEventListener('click', () => {
		currentIndex++;
		hiddenButton();
		sliding();
	})

	prev.addEventListener('click', () => {
		currentIndex--;
		hiddenButton();
		sliding();
	})

	miniimg.forEach(img => {
		img.addEventListener('click', e => {
			const index = miniimg.findIndex(num => num === e.target);
			currentIndex = index;
			hiddenButton();
			sliding();
		})
	})

	function hiddenButton() {
		prev.classList.remove('hidden');
		next.classList.remove('hidden');

		if (currentIndex == 0) {
			prev.classList.add('hidden');
		} else if (currentIndex == slides.length - 1) {
			next.classList.add('hidden');
		}
	}

	function sliding() {
		ul.style.transform = `translateX(${-1 * slidewidth * currentIndex}px)`;
	}


}
