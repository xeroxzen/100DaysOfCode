// Here we go
console.log("Hello there"); //Prints Hi there


// Strings
// Strings are a primitive data type. They are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by single quotes ' or double quotes ".
let single = "Where's my bandit hat";
let double = "Where's my bandit hat";

// Numbers
// Numbers are a primitive data type. They include the set of all integers and floating point numbers.
let amount = ;
let price = 5.89;

// Boolean
// Booleans are a primitive data type. They can be either true or false.
let lateToWork = false;

// Null 
// Null is a primitive data type. It represents the intentional absence of value. In code, it is represented as null.
let x = null;

//Arithmetic Operators
// Addition
5 + 6
    //Subtraction
9 - 3
    //Multiplication
5 * 6
    // Modulars
8 % 6
    // Division
19 / 5

// String .length

let msg = "Hello World";
console.log(msg.length); // Prints 11

console.log("Howdy".length); // Prints 5

// Methods
// Methods return information about an object, and are called by appending an instance with a period., the method name, and parentheses.

Math.random() // Returns a number between 0 and 1

console.log(Math.floor(5.95));

//ariables

let name = "Andile";
const found = true;
var age = 22;
console.log(name, found, age);

//const keyword
//A constant variable can be declared using the keyword const. It must have an assignment. Any attempt of re-assigning a const variable will result in JavaScript runtime error.

const numberOfColumns = 4;
numberOfColumns = 8;

// TypeError: Assignment to constant variable

// let keyword

// let creates a local variable in JavaScript & can be re-assigned. Initialization during the declaration of a let variable is optional. A let variable will contain undefined if nothing is assigned to it.

let count;
console.log(count); // Prints: undefined

count = 10;
console.log(counts); // Prints: 10

// Undefined
// undefined is a primitive JavaScript value that represents lack of defined value.Variables that are declared but not initialized to a value will have the value undefined.

var a;

console.log(a); // Prints:undefined

// Assignment Operators
// An assignment operator assigns a value to its left operand based on the value of its right operand.Here are some of them:

//     += addition assignment -= subtraction assignment *= multiplication assignment /= division assignment

let number = 100;

// Coth statements will add 10;

number = number + 10;
number += 10;
console.log(number); // Prints: 120

// String Concatenation
// In JavaScript, multiple strings can be concatenated together using the + operator. In the example, multiple strings and variables containing string values have been concatenated. After execution of the code block, the displayText variable will contain the concatenated string.

let service = 'credit card';
let month = '30 September';
let displayText = "Your " + service + " bill is due on " + month + '.';

console.log(displayText); // Prints: Your credit card bill is due on 30 September;

// String Interpolation

// String interpolation is the process of evaluating string literals containing one or more placeholders(expressions, variables, etc).

// It can be performed using template literals: text $ { expression } text.

let age = 22;

// String Concatenation
'Andile is ' + age + ' years old.';

// String interpolation
`Andile is ${age} years old.`;

// Template Literals
//Template literals are strings that allow embedded expressions, ${expression}. While regular strings use single ' or double " quotes, template literals use backticks instead.
let name = "Nexuslabs";

console.log(`Hello, ${name}`); // Prints: Hello, Nexuslabs

console.log(`Andile is ${15 + 7} years old`); // Prints: Andile is 22 years old.