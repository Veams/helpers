'use strict';

/**
 * Simple extend method to extend the properties of an object.
 *
 * @return {Object} obj - extended object
 */
export default function extend(...args): object {
	let obj = {};

	args.forEach((item) => {
		for (let key in item) obj[key] = item[key];
	});
	return obj;
};