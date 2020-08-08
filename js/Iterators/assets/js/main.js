const isEven = (n) => {
    return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is a even number: ${isNumEven}.`)
}

//Pass in isEven as the callback
printMsg(isEven, 4);
// Prints: The number 4 is an even number: True

// Array Method .forEach()

const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
    console.log(number);
});

// Array Method .map()
// The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.

// The original array does not get altered, and the returned array may contain different elements than the original array

const chosenParticipants = ['Andile', 'Mzie', 'Nokuzola', 'Taylor', 'Don'];

const announcements = chosenParticipants.map(member => {
    return member + " joined the contest.";
})

console.log(announcements);

// Array Method .filter()
// The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

const randomNums = [4, 11, 42, 14, 39];
const filteredArray = randomNums.filter(n => {
    return n > 5;
});

console.log(filteredArray)

// Array Method .reduce()
// The .reduce() method iterates through an array and returns a single value.

// It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element.

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); //10