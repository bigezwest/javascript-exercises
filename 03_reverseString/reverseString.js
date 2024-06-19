const reverseString = function(string) {
    const originalString = string;
    const originalString_len = string.length;
    let reversedString = "";

    for (let i = originalString_len - 1; i >= 0; i--) {
        reversedString += originalString[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
