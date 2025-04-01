const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(a) {
	return a.reduce((sum,current) => sum + current,0);
};

const multiply = function(a) {
    return a.reduce((sum, current) => sum * current,1);
};

const power = function(a, n) {
    return a ** n;
};

const factorial = function(n) {
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
