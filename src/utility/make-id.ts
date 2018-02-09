'use strict';

// Adapted from https://github.com/broofa/node-uuid/
// Under MIT License
// tslint:disable:no-bitwise

/**
 * Fallback function with Math.random
 */
function getRandomFromMathRandom() {
	const result = new Array(16);

	let r = 0;
	for (let i = 0; i < 16; i++) {
		if ((i & 0x03) === 0) {
			r = Math.random() * 0x100000000;
		}
		result[i] = r >>> ((i & 0x03) << 3) & 0xff;
	}

	return result as ArrayLike<number>;
}

/**
 * Execute crypto or fallback function
 */
function getRandomFunction() {
	// tslint:disable-next-line:no-string-literal
	const browserCrypto = window.crypto || (window["msCrypto"] as Crypto);
	if (browserCrypto && browserCrypto.getRandomValues) {
		// WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
		//
		// Moderately fast, high quality
		try {
			return function getRandomFromCryptoRandom() {
				const result = new Uint8Array(16);
				browserCrypto.getRandomValues(result);
				return result as ArrayLike<number>;
			};
		} catch (e) { /* fallback*/
		}
	}

	// Math.random()-based (RNG)
	//
	// If all else fails, use Math.random().  It's fast, but is of unspecified
	// quality.
	return getRandomFromMathRandom;
}

const getRandom = getRandomFunction();

/**
 * Mapping
 */
class ByteHexMappings {
	byteToHex: string[] = [];
	hexToByte: { [hex: string]: number; } = {};

	constructor() {
		for (let i = 0; i < 256; i++) {
			this.byteToHex[i] = (i + 0x100).toString(16).substr(1);
			this.hexToByte[this.byteToHex[i]] = i;
		}
	}
}

const byteHexMappings = new ByteHexMappings();

export function getUuidV4() {
	return getRandom();
}

/**
 * Return string of unique id
 */
export function uuidToString(buf: ArrayLike<number>, offset: number = 0): string {
	let i = offset;
	const bth = byteHexMappings.byteToHex;
	return bth[buf[i++]] + bth[buf[i++]] +
		bth[buf[i++]] + bth[buf[i++]] + "-" +
		bth[buf[i++]] + bth[buf[i++]] + "-" +
		bth[buf[i++]] + bth[buf[i++]] + "-" +
		bth[buf[i++]] + bth[buf[i++]] + "-" +
		bth[buf[i++]] + bth[buf[i++]] +
		bth[buf[i++]] + bth[buf[i++]] +
		bth[buf[i++]] + bth[buf[i++]];
}

export function getUuidV4String() {
	return uuidToString(getUuidV4());
}

/**
 * Generates numeric id.
 *
 * @return {String} - generated id
 */
export default function makeId(): string {
	return getUuidV4String();
};