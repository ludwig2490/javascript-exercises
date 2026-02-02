const repeatString = function(string, num) {
    if (num === 0) {
        string = '';
    } else if (num < 0) {
        string = 'ERROR';
    } else {
        let str = string;
        for (i = 1; i < num; i++) {
            string = string + str;
        }
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
