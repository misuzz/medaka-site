'user strict';

{
	const allPhotos = {
		'病院でもらった10匹': "medakaphoto/U20210701.jpeg",
		'よく見る色のメダカと赤っぽいメダカ': "medakaphoto/U20210701_2.jpeg",
		'よく見る色のメダカと赤っぽいメダカ２': "medakaphoto/U20210702.jpeg",
		'黒メダカ？白メダカ？': "medakaphoto/U20210709.jpeg",
		'赤っぽいメダカ': "medakaphoto/U20210726.jpeg",
		'赤っぽいメダカ２': "medakaphoto/U20210726_2.jpeg",
		'幹之？': "medakaphoto/U20210726_3.jpeg",
		'赤めのメダカ': "medakaphoto/U20210814.jpeg",
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
