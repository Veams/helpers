'use strict';

/**
 * Return new RegExp
 *
 * @param {string} regEx - Regular Expression
 *
 * @return {RegExp}
 */
export default function regExp(regEx: string): any {
	return new RegExp("(^|\\s+)" + regEx + "(\\s+|$)");
};