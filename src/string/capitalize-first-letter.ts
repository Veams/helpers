/**
 * String.
 * @param {String} str - String where first char is upper cased
 */
export default function capitalizeFirstLetter(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}