function mobileNav() {
	// Mobile nav button
	const mediaQuery = window.matchMedia('(max-width: 768px)');

	const headerMobile = document.querySelector('.js-header-mobile');

	if(mediaQuery.matches) {
		headerMobile.classList.remove('header--dark');
	}

	const navBtn = document.querySelector('.js-mobile-nav-burger');
	const headerOuter = document.querySelector('.js-header-outer');
	const nav = document.querySelector('.js-menu');

	// const menuIcon = document.querySelector('.nav-icon');

	navBtn.onclick = function () {
		nav.classList.toggle('is-open');
		navBtn.classList.toggle('is-active');
		headerOuter.classList.toggle('is-active');
		// document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;