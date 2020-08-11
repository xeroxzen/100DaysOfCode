// Array containing numbers
const numberArray = [0, 1, 2, 3, 4];

//An array of different data types
const mixedArray = [1, 'chicken', false];

// Indexing arrays
const myArray = [100, 200, 300];
console.log(myArray[1]);
console.log(myArray[2]);

// Property.length
// The.length propertyof JS array indicates the number of elements the array contains

const numbers = [1, 2, 3, 4];
numbers.length //4

// Method.push()
// The.push() method of javascript arrays can be usedto add one or more elements to the end of an array.push() mutates the originalarray retirns the new length of the array.
//Adding a single elemeent
const cart = ['bananas', 'juice', 'cake', 'burger'];
cart.push('coke');

console.log(cart);

//Method .pop()
//The .pop()method removes the last element from theana arrayand returns that element

const ingredients = ['eggs', 'chocolate', 'flour', 'honey'];
const poppedIngredient = ingredients.pop(); //honey