const scrollBtn = document.querySelector('.scrollBtn');
const arrayOfSections = document.querySelectorAll('.section');
let currentPos = 0;
let heightSection = Math.ceil(document.documentElement.clientHeight);
let diffPos;
let scrollCord;
let posOfSections = [];

export const scrollToNext = () => {
	if (scrollBtn && arrayOfSections) {
		currentPos = Math.ceil(window.pageYOffset);
		diffPos = Math.abs(currentPos - heightSection);
		if (currentPos === 0) {
			scrollCord = diffPos;
		} else {
			scrollCord = Math.abs((currentPos + heightSection) - (currentPos % heightSection));
		}
		window.scrollTo({
			top: scrollCord,
			behavior: 'smooth',
		});
	}
};

export const hideScrollBtn = () => {
	if (scrollBtn && arrayOfSections) {
		currentPos = window.pageYOffset;
		if (document.body.scrollHeight <= currentPos + heightSection) {
			scrollBtn.classList.add('scroll_btn--hide');
		} else {
			scrollBtn.classList.remove('scroll_btn--hide');
		}
	}
};

// window.addEventListener('scroll', hideScrollBtn);

scrollBtn.addEventListener('click', () => {
	scrollToNext();
});
