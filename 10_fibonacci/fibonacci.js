const fibonacci = function(member) {
    let array = [];
    let returnValue;

    // Accept String -----------------------------
    if (typeof(member) == "string") {
        let intMember = Number.parseInt(member);
        getFib(intMember);
    }

    // Do not allow negative num -------------
    if (member < 0) {
        returnValue = "OOPS";
    } else {
        let intMember = member;
        getFib(intMember);
    }

    // Return Fibonacci number -------------------
    function getFib(intMember) {
        for (let i = 0; i <= intMember; i++) {
            if (i == 0) {
                array.push(i);
            } else if (i == 1) {
                array.push(1);
            } else if (i > 1) {
                array.push(
                    (array[i -1] + array[i - 2]));
            }
        }
        returnValue = array[intMember];
    }
    return returnValue;
};

// Do not edit below this line
module.exports = fibonacci;
