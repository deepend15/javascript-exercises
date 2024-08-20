const fibonacci = function(num) {
    if (Number(num) === 0) {
        return 0;
    } else if (Number(num) < 0) {
        return 'OOPS';
    } else {
        function createFibonacciArray(num) {
            let arr = [];
            for (let i = 0; i < num; i++) {
                if (i === 0 || i === 1) {
                    arr[i] = 1;
                } else {
                arr[i] = arr[i - 2] + arr[i - 1];
                }
            };
            return arr;
        }
        let fibArr = createFibonacciArray(Number(num));
        return fibArr[Number(num) - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
