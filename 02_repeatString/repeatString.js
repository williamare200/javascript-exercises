const repeatString = function(string, timesrepeat) {
    if(timesrepeat < 0) {
        return 'ERROR'
    } else {
        let stringRepetition = "";
        for (let index = 0; index < timesrepeat; index++) {
            stringRepetition += string;       
    }
        return stringRepetition;
    }

};
repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
