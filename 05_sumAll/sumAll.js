const sumAll = function(a, b) {
    let result = null;
    let i = 0;
    let j = 0;
    if (a < 0 || b < 0){
        result = "ERROR";
    } else {
        if (a < b) {
            i = a;
            j = b;
        } else {
            i = b;
            j = a;
        }
        for (i; i <= j; i++) {
            result += i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
