'use strict';

/**
 * Touch Detection
 */
export default function isTouch(): boolean {
	return 'ontouchstart' in window;
};