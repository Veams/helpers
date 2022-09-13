// Array Helpers
import forEach from './array/for-each.js';
import indexOf from './array/index-of.js';

// Browser Helpers
import checkElementInContext from './browser/check-element-in-context.js';
import getParamFromUrl from './browser/get-param-from-url.js';
import querySelectorArray from './browser/query-selector-array.js';
import updateUrl from './browser/update-url.js';

// Detection Helpers
import animationEndEvent from './detection/animation-end-event.js';
import detectSwipe from './detection/detect-swipe.js';
import isInViewport from './detection/is-in-viewport.js';
import isOffscreen from './detection/is-offscreen.js';
import isTouch from './detection/is-touch.js';
import transitionEndEvent from './detection/transition-end-event.js';
import getComputedTranslate from './browser/get-computed-translate.js';

// Function Helpers
import methodExtend from './function/method-extend.js';
import mixin from './function/mixin.js';

// Object Helpers
import defaults from './object/defaults.js';
import extend from './object/extend.js';

// Operator Helpers
import throttle from './operator/throttle.js';

// String Helpers
import capitalizeFirstLetter from './string/capitalize-first-letter.js';
import hyphenate from './string/hyphenate.js';
import toCamelCase from './string/to-camel-case.js';

// Utility Helpers
import makeId from './utility/make-id.js';
import regExp from './utility/reg-exp.js';

export {
	// Array
	forEach,
	indexOf,

	// Browser
	checkElementInContext,
	getParamFromUrl,
	querySelectorArray,
	updateUrl,
    getComputedTranslate,

	// Detection
	animationEndEvent,
	detectSwipe,
	isInViewport,
	isOffscreen,
	isTouch,
	transitionEndEvent,

	// Function
	methodExtend,
	mixin,

	// Object
	defaults,
	extend,

	// Operator
	throttle,

	// String
	capitalizeFirstLetter,
	hyphenate,
	toCamelCase,

	// Utility
	makeId,
	regExp
}