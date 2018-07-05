'use strict';

/**
 * Get computed translate value for given element and axis
 *
 * @param {Object} elem - Element to get translate value from
 * @param {String} axis - Axis ('x' || 'y' || 'z')
 *
 * @return {Number} - Computed translate value for given axis
 */
export default function getComputedTranslate(elem: any, axis: string): number | boolean {
    if (!window.getComputedStyle) {
        return false;
    }

    let idx = {x: 4, y: 5, z: 6};
    let idx3d = {x: 12, y: 13, z: 14};
    let style = getComputedStyle(elem);
    let transform = style.transform || style.webkitTransform;
    let mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
        return parseFloat(mat[1].split(', ')[idx3d[axis]]);
    }

    mat = transform.match(/^matrix\((.+)\)$/);

    return mat ? parseFloat(mat[1].split(', ')[idx[axis]]) : 0;
}
