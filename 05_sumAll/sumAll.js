const sumAll = function(first, second) {
    let sum = Number();
    if (first < 0 || second < 0 || Number.isInteger(first) === false || Number.isInteger(second) === false) {
        return 'ERROR';
    } else if (second > first) {
        for (let i = first; i <= second; i++) {
            sum += i;
        }
        return sum;
    } else if (first > second) {
        for (let i = second; i <= first; i++) {
            sum += i;
        }
        return sum;
    }
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
