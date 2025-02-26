const leapYears = function(year) {
// divisible by 4 
if (year % 4 === 0 ) {
    // divisible by 100 and 400
    if(year % 100 === 0 && year % 400 === 0) {
        return true
        // divisible by 100 but not 400
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false
    } else {
        return true
    }
    
} else {
    return false;
}

};

// Do not edit below this line
module.exports = leapYears;

// The year is exactly divisible by four (with no remainder);
// If the year is divisible by 100 (years ending in two zeros), it is not a leap, except if
// It is also divisible by 400 (in this case it will be a leap year).
