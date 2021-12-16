'user strict';

{
	const next = document.getElementById('photoNext');
	const ul = document.getElementById('bigimg');
	console.log(`${ul}だよ`);
	next.addEventListener('click', ()=>{
		ul.style.transform = 'translateX(-500px)';
	})
}