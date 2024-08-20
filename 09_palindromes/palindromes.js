const palindromes = function (string) {
    let arr = string.toLowerCase().split("");
    let arrLetters = arr.filter((letter) => letter !== ' ' && letter !== ',' && letter !== '.' && letter !== '!');
    let arrLettersReversed = arrLetters.slice().reverse();
    let strLetters = arrLetters.join('');
    let strLettersReversed = arrLettersReversed.join('');
    if (strLetters === strLettersReversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
