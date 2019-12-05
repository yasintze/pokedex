// @flow
// Generate unique IDs for use as pseudo-private/protected names.
// source: https://gist.github.com/gordonbrander/2230317

const uniqueId = () => {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;
};

export default uniqueId;
