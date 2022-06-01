const multiSliderContainer = document.querySelector('.multiSliderWrapper');
let cursorDrag = document.querySelector('.cursorDrag');
let btnDrag = document.querySelector('.btnDrag');
multiSliderContainer.addEventListener('mousemove', (e) => {
	if (e.target.closest('.multi_swiper')) {
		let target = e.target.closest('.multi_swiper');
		let targetCoords = target.getBoundingClientRect();
		let xCoord = e.clientX - targetCoords.left;
		let yCoord = e.clientY - targetCoords.top;
		cursorDrag.style.left = `${xCoord - 35}px`;
		cursorDrag.style.top = `${yCoord - 18}px`;
		cursorDrag.classList.add('swiper-button-drag--opas_mod_1');
		btnDrag.classList.add('swiper-button-drag--disable');
	}
});

multiSliderContainer.addEventListener('mouseout', (e) => {
	cursorDrag.classList.remove('swiper-button-drag--opas_mod_1');
	btnDrag.classList.remove('swiper-button-drag--disable');
});
