'use strict';

/**
 * Check if element is offscreen and return number indicating position
 *
 * @param {Node} elem - Element to check
 * @return {Number} -  If element is offscreen -1 for top, 1 for bottom, 0 otherwise
 */
export default function isOffscreen(elem) {
		let winHeight = window.innerHeight;
		let pageYOffset = window.pageYOffset;
		let top = elem.offsetTop;
		let elemHeight = elem.offsetHeight;
		let bottom;

		while (elem.offsetParent) {
			elem = elem.offsetParent;
			top += elem.offsetTop;
		}

		bottom = top + elemHeight;

		if (bottom < pageYOffset) {
			return -1;
		}
		else if (top > pageYOffset + winHeight) {
			return 1;
		}

		return 0;
	}