const reverseString = function(string) {
    let stringArray = string.split("");
    let sALength = stringArray.length;
    let sAReversed = [];
    for (let i = sALength - 1; i >= 0; i--) {
        sAReversed.push(stringArray[i]);
    }
    return sAReversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
