const removeFromArray = function(arr, paramsToRemove) {

    const arrayFiltered = arr.filter(function (item) {

            return item !== paramsToRemove;
    });

    return arrayFiltered;

};

// Do not edit below this line
module.exports = removeFromArray;
