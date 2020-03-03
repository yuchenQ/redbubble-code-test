/** @format */

export const ALL = 'ALL';

/**
 * @param {string} model
 * @param {string} make
 * @return {function}
 */
function getFilter(model, make) {
  return {
    [[true, false]]: data => data.make === make,
    [[false, true]]: data => data.model === model,
    [[false, false]]: data => data.model === model && data.make === make,
    [[true, true]]: () => true,
  }[[model === ALL, make === ALL]];
}

/**
 * @param {object} state
 * @param {Work[]} works
 * @return {Work[]}
 */
export function filterWorks({ model, make }, works) {
  if (!works || !Array.isArray(works)) {
    throw new Error('Error occurs in filterWorks(): Invalid parameter: works');
  }

  const filter = getFilter(model, make);

  return works.filter(({ exif }) => {
    const temp = exif || { model: '', make: '' };

    return filter(temp);
  });
}
