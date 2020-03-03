/** @format */

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

/**
 * @param {WorkUrl[]} urls
 * @param {string} size
 * @return {WorkUrl}
 */
export function filterUrlBySize(urls, size = SIZE.MEDIUM) {
  if (!urls || !Array.isArray(urls)) {
    throw new Error(
      'Error occurs in filterImageBySize(): Invalid parameter: urls',
    );
  }

  return urls.find(({ type }) => type === size);
}
