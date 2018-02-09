// Array Helpers
import forEach from './array/for-each';
import indexOf from './array/index-of';

// Browser Helpers
import checkElementInContext from './browser/check-element-in-context';
import getParamFromUrl from './browser/get-param-from-url';
import querySelectorArray from './browser/query-selector-array';
import updateUrl from './browser/update-url';

// Detection Helpers
import animationEndEvent from './detection/animation-end-event';
import detectSwipe from './detection/detect-swipe';
import isInViewport from './detection/is-in-viewport';
import isOffscreen from './detection/is-offscreen';
import isTouch from './detection/is-touch';
import transitionEndEvent from './detection/transition-end-event';

// Function Helpers
import methodExtend from './function/method-extend';
import mixin from './function/mixin';

// Object Helpers
import defaults from './object/defaults';
import extend from './object/extend';

// Operator Helpers
import throttle from './operator/throttle';

// String Helpers
import capitalizeFirstLetter from './string/capitalize-first-letter';
import hyphenate from './string/hyphenate';
import toCamelCase from './string/to-camel-case';

// Utility Helpers
import makeId from './utility/make-id';
import regExp from './utility/reg-exp';

export {
	// Array
	forEach,
	indexOf,

	// Browser
	checkElementInContext,
	getParamFromUrl,
	querySelectorArray,
	updateUrl,

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