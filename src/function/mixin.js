'use strict';

import defaults from '../object/defaults';
import methodExtendHelper from '../object/extend';

/**
 * Merge method functions.
 *
 * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
 * @param {Array} methods - Array of method names which will be extended.
 */
export default function mixin(from, methods = ['initialize', 'render']) {
	if (from === undefined) {
		console.error(`VeamsHelpers : Mixin :: Mixin not found!`);

		return;
	}

	let to = this.prototype;

	/** Add those methods which exists on `from` but not on `to` to the latter */
	defaults(to, from);

	/** we do the same for events */
	if (to.events) {
		defaults(to.events, from.events);
	}

	// Extend to's methods
	methods.forEach((method) => {
		methodExtendHelper(to, from, method);
	});
};