const scrollBtn = document.querySelector('.scrollBtn');
const arrayOfSections = document.querySelectorAll('.section');
let currentPos = 0;
let heightSection = Math.ceil(document.documentElement.clientHeight);
let diffPos;
let scrollCord;
let posOfSections = [];

const scrollToNext = () => {
	console.clear();
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
};

const hideScrollBtn = () => {
	currentPos = window.pageYOffset;

	if (document.body.scrollHeight <= currentPos + heightSection) {
		scrollBtn.classList.add('scroll_btn--hide');
	} else {
		scrollBtn.classList.remove('scroll_btn--hide');
	}
};

window.addEventListener('scroll', hideScrollBtn);

scrollBtn.addEventListener('click', () => {
	scrollToNext();
});
