const multiSliderContainer = document.querySelectorAll('.multiSliderWrapper');
let cursorDrag = document.querySelectorAll('.cursorDrag');
if (multiSliderContainer[0] && cursorDrag[0]) {
	let halfHeightCursor = cursorDrag[0].clientHeight / 2;
	let halfWidthCursor = cursorDrag[0].clientWidth / 2;
	for (let i = 0; i < multiSliderContainer.length; i += 1) {
		multiSliderContainer[i].addEventListener('mousemove', (e) => {
			if (e.target.closest('.multi_swiper')) {
				const target = e.target.closest('.multi_swiper');
				const targetCoords = target.getBoundingClientRect();
				const xCoord = e.clientX - targetCoords.left;
				const yCoord = e.clientY - targetCoords.top;
				cursorDrag[i].style.left = `${xCoord - halfWidthCursor}px`;
				cursorDrag[i].style.top = `${yCoord - halfHeightCursor}px`;
				cursorDrag[i].style.opacity = 1;
			}
		});
		multiSliderContainer[i].addEventListener('mouseout', (e) => {
			cursorDrag[i].style.opacity = 0;
		});
	}
}
