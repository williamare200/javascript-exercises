const reverseString = function(string) {
    // split string into array 
    let arrayString = string.split("")
    console.log(arrayString);
    let reverseString = '';
    // iteration array index 0 to end 
    for (let index = arrayString.length - 1 ; index >= 0; index--) {
        // pop reverse all indexes to new variable 
        reverseString += arrayString.pop();
    }
    return reverseString;
};

reverseString('hello there')
// Do not edit below this line
module.exports = reverseString;

// string to array 
// string to reverse
// countdown array.lenght -1 to index 0

// solutions 