const removeFromArray = function(array, ...itemsToRemove) {
    const filtered = array.filter((element) => !(itemsToRemove.includes(element)));
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
