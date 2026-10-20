const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else if (num == 0) {
        return '';
    }

    let strArray = [];

    for(let i = 0; i < num; i++) {
        strArray[i] = string;
    }

    const repeatString = strArray.join('');
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
