const dataEl = document.querySelector('.data');
const data = {};
let heightSec = document.querySelector('.section');
function update() {
	Object.assign(data, {
		htmlClientHeight: document.documentElement.clientHeight,
		bodyClientHeight: document.body.clientHeight,
		bodyPageHeight: document.body.pageHeight,
		screenHeight: window.screen.height,
		screenAvailHeight: window.screen.availHeight,
		windowInnerHeight: window.innerHeight,
		windowOuterHeight: window.outerHeight,
		windowDevicePixelRatio: window.devicePixelRatio,
		clientHeightSec: heightSec.clientHeight,
		scrollHeightSec: heightSec.scrollHeight,
	});
	dataEl.innerHTML = `<div>${JSON.stringify(data, null, 2)}</div>`;
}

update();
