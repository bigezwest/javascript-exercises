const palindromes = function (inputText) {

    // Convert input string - prep string for comparison and reverse function --
    let baseStr = prepareString(inputText);

    // Reverse baseStr ---------------------------
    let revStr = [...baseStr].reverse().join("").toString();

    // Compare and return result -----------------
    if (baseStr === revStr) {
        return true;
    } else {
        return false;
    }
};

/** Remove punctuation - return lowerCase --------------------------------------
 * This converts text to an array.  Each element is passed to isValidRegex and
 * if valid, it is added to baseStr.
*/
function prepareString([...inputText]) {
    let tempStr = "";
    for (let char of inputText) {
        if (isValidRegex(char)) {
            tempStr += char;
        };
    }
    return tempStr.toLowerCase();
}

// Regex check - a-zA-Z1-9 -----------------------------------------------------
function isValidRegex(char) {
    return char.match(/[a-zA-Z1-9]/) !== null;
}

// Do not edit below this line
module.exports = palindromes;
