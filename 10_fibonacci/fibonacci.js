const fibonacci = function(member) {
    let returnValue = [];

    for (let i = 0; i < member; i++) {
        if (i <= 1) {
            returnValue.push(1);
        } else {
            returnValue.push(i + returnValue[i - 1]);
        }
    }
    return (returnValue.length - 1);
};

// Do not edit below this line
module.exports = fibonacci;
