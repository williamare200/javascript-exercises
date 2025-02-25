const removeFromArray = function (array, ...removeArray) {
    return array.filter(value => {
        // check if value is in removeArray using a for loop
        for (let index = 0; index < array.length; index++) {
            if (value === removeArray[index]) {
                return false;// if value is in removeArray, 
                //exclude it
            }
        }
    return true //if value is not in removeArray, keep it
    });
    
};

removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;

// 