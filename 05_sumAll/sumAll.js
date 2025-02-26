let sumStartFinish;
const sumAll = function(a, b) {
    sumStartFinish = 0;
    let i = a > b && a > 0 ? b : a;
    let finish = b > a && b > 0 ? b : a;
    if (a < 0 || b < 0 || Number.isInteger(a) == false || Number.isInteger(b) == false
|| typeof a !== "number" || typeof b !== "number") {
        return 'ERROR'
    }
    
    for(i; i <= finish; i++) {
        sumStartFinish += i;
    }
    return sumStartFinish;
};
// Do not edit below this line
module.exports = sumAll;

