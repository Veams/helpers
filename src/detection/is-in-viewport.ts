'use strict';

/**
 * Check if element is in viewport
 *
 * @param {Object} elem - Object, which we want to check
 * @param {Boolean} [useBounds] - if true, whole element must be visible
 * @param {Number} [topOffsetDelta] - offset to be added to element top offset
 * @param {Number} [leftOffsetDelta] - offset to be added to element left offset
 *
 * @return {Boolean}
 */
export default function isInViewport(elem: any, useBounds = false, topOffsetDelta = 0, leftOffsetDelta = 0): boolean {
    let el = elem;
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;
    let cond = false;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    top += topOffsetDelta;
    left += leftOffsetDelta;

    if (useBounds) {
        cond = top >= window.pageYOffset && left >= window.pageXOffset && (top + height) <= (window.pageYOffset + window.innerHeight) && (left + width) <= (window.pageXOffset + window.innerWidth);
    } else {
        cond = top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset;
    }

    return cond;
};