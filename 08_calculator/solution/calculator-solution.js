const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function (array) {
  return array.reduce((product, current) => product * current)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  let product = 1;// Initialize a variable to store the result
  for (let i = n; i > 0; i--) {// Start at n, count down to 1
    product *= i;// Multiply product by i
  }
  return product; // Return the final result
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
