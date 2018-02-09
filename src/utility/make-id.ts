'use strict';

import uniqid from 'uniqid';

/**
 * Generates numeric id.
 *
 * @return {String} - generated id
 */
export default function makeId(): string {
	return uniqid();
};