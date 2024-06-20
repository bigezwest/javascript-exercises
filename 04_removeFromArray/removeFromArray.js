const removeFromArray = function(arrIn, ...params) {

    const newArray = [];

    arrIn.forEach((item) => {
        if (!params.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
