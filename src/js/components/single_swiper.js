import Swiper, { Navigation, EffectFade } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

let singleSlider = new Swiper('.single_swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
	effect: 'fade',
	speed: 1000,
	fadeEffect: {
		crossFade: true,
	},
	modules: [Navigation, EffectFade],
	allowTouchMove: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
