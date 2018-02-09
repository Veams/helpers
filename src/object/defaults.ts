'use strict';

/**
 * Simple extend method, which extends an object.
 *
 * @return {Object} obj - extended object
 */
export default function defaultsHelper(...args): object {
	let obj = {};

	args.forEach((item) => {
		for (let key in item) {
			if (obj[key] === undefined) obj[key] = item[key];
		}
	});
	return obj;
};