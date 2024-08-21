const findTheOldest = function(people) {
    let peopleCopy = people.slice();
    for (const person of peopleCopy) {
        if (person.yearOfDeath === undefined) {
            let thisYear = new Date().getFullYear();
            person.age = thisYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    }
    peopleCopy.sort((a, b) => {
        return b.age - a.age;
    });
    let oldestPerson = peopleCopy[0];
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
