const repeatString = function(str, num) {
    let returnString = "";
    while (num > 0) {
        returnString += str;
        num--;
    }
    return returnString;
};

// repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
