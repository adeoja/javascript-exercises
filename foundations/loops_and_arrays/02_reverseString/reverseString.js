const reverseString = function(input) {
    let arr = input.split('');
    arr.reverse();
    const reversedString = arr.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
