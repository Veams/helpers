/**
 * String which will be hyphenated by replacing white space and lower case the characters.
 * @param {String} str - String
 */
export default function hyphenate(str) {
	return str.replace(/\s/g, '-').toLowerCase();
}