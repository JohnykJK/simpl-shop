const iconMenu = document.querySelector('.burger__icon');
const menuBody = document.querySelector('.left_nav');
const bodyLock = document.querySelector('body');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		iconMenu.classList.toggle('open');
		menuBody.classList.toggle('open');
		bodyLock.classList.toggle('lock')
	});
} 
