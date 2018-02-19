'use strict';

/**
 * Get dom elements in an array
 *
 * @param {String} elem - Required: selector
 * @param {Object} [context] - Optional: context
 *
 * @return {Array}
 */
export default function querySelectorArray(elem, context = document) {
	if (!elem) throw new Error('In order to work with querySelectorArray you need to define an element as string!');
	let el = elem;

	return Array.prototype.slice.call((context).querySelectorAll(el));
};