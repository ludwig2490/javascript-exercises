const reverseString = function(string) {
    let strArray = string.split('');
    let strLength = string.length;
    let strReversed = [];
    for (i = strLength - 1; i >= 0; i--) {
        strReversed.push(strArray[i]);
    }
    return strReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
