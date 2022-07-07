import Swiper, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation]);

let multiSlider = new Swiper('.multi_swiper', {
	slidesPerView: 1.27,
	slidesPerGroup: 1,
	allowTouchMove: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		768: {
			slidesPerView: 2.27,
		},
		1200: {
			slidesPerView: 3.27,
		},
	},
});

const dragBtn = document.querySelector('.swiper-button-drag');
const multiSliderWrapper = document.querySelector('.multiSliderWrapper');

// dragBtn.addEventListener('click', () => {
// 	if (dragBtn.classList.contains('dragBtn')) {
// 		dragBtn.classList.remove('dragBtn');
// 		multiSliderWrapper.classList.remove('section_dragble');
// 		multiSlider.allowTouchMove = false;
// 	} else {
// 		dragBtn.classList.add('dragBtn');
// 		multiSliderWrapper.classList.add('section_dragble');
// 		multiSlider.allowTouchMove = true;
// 	}
// });
