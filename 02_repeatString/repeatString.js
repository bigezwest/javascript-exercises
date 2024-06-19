const repeatString = function(str, num) {
    let returnString = "";
    if (num < 0) {
        returnString = "ERROR";
    } else {
        while (num > 0) {
            returnString += str;
            num--;
        }
    }
    return returnString;
};

// repeatString("hey", 3);
// Do not edit below this line
module.exports = repeatString;
