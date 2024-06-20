const sumAll = function(a, b) {
    let sum = 0;
    let i = 0;
    let j = 0;
    if (a < b) {
        i = a;
        j = b;
    } else {
        i = b;
        j = a;
    }

    for (i; i <= j; i++) {
        sum += i;

    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
