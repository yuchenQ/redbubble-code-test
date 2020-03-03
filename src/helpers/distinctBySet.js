/** @format */

/**
 * @param {Array} array
 * @return {Array}
 */
export function distinctBySet(array) {
  return Array.from(new Set(array));
}
