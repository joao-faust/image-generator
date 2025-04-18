/**
 * Validates if a value is numeric
 * @param {string} value The value
 * @returns {boolean} True if the value is numeric, otherwise, false
 */
module.exports.isNumeric = (value) => {
  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(value);
};
