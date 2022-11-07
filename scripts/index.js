const btnMobileOpen = document.querySelector('.btn-mobile');
const btnMobileClose = document.querySelector('.btn-mobile-close');
let menuMobile = document.querySelector('.menu-mobile');

btnMobileOpen.addEventListener('click', () => {
	menuMobile.classList.remove('invisible');
});

btnMobileClose.addEventListener('click', () => {
	menuMobile.classList.add('invisible');
});
