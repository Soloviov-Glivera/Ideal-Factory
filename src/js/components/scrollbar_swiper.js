import Swiper, { Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

Swiper.use([Scrollbar]);

let scrollbarSlider = new Swiper('.scrollbar_swiper', {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	scrollContainer: true,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
		dragSize: 'auto',
	},
	breakpoints: {
		1024: {
			scrollbar: {
				dragSize: 350,
			},
		},
	},
});
