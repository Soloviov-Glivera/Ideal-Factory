// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import {
	documentReady,
	pageLoad,
	onWindowResize,
	onWindowScroll,
	calcViewportHeight,
} from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
import multiSlider from './components/multi_swiper';
import scrollbarSlider from './components/scrollbar_swiper';
import singleSlider from './components/single_swiper';
import {

	hideScrollBtn,
} from './components/scrollToNext';
import cursor from './components/cursor';
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	onWindowScroll(hideScrollBtn);
	onWindowResize(calcViewportHeight);
	console.log('ready');
};

const loadFunc = () => {
	console.log('page load');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
