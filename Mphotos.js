'user strict';

{
	const allPhotos = {
		'生まれたて': "medakaphoto/M20210726.jpeg",
		'成長中': "medakaphoto/M20210804.jpeg",
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
