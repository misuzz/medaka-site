'user strict';

/////////////////////////modalwindow////////////////////////////////////

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');
const closeIcon = document.querySelector('.material-icons');

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

closeIcon.addEventListener('click', () => {
	closeModal.click();
})