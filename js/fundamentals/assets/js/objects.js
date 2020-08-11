//Let's se JS Objects 
// NB: In Javascrip,functions are objects, functions can be passed asarguments

// An object is abuilt-in data type for storing key-value pairs. Data inside objects are unordered, and can be of any type.author

const classOf2020 = {
    students: 50,
    year: 2020
};

const persona = {
    firstName: 'Andile',
    lastName: 'Mbele',
    age: 22,
    race: 'African',
    universityDeg: false,
    married: false,
    collegeEducated: true
};

//How do we then access Objects?
//Propoersties of a JSobjectcan be accessed using the dot notation.

const apple = {
    color: 'Green',
    price: {
        bulk: '$3/kg',
        smallQy: '$4/kg'
    }
};

console.log(apple.color) // Green
console.log(apple.price.smallQy) // $4/kg

let book = {
    type: 'Fiction',
    ISBN: '9789123598212',
    author: {
        name: 'Jeffrey Archer',
        sex: 'Male',
        age: 60
    },
    title: 'The Clifton Chronicles Series'
}

// Objects are fun, I am havaing a bLast

const person = {
    name: 'Andile Mbele',
    age: 22,
    hobby: 'Athletics',
    goal: 'Full Stack Developer'
};

delete person.hobby;
console.log(person)

//Accessing non-existent JavaScript properties
//When trying to access a JavaScript object property that has not been defined yet, the value of undefined will be returned by default.

const classElection = {
    date: 'January 12'
};

console.log(classElection.place); // undefined;

//JS Objects are mutable

const student = {
    name: 'Andile',
    score: 100,
    grade: 'A'
}
console.log(student);
delete student.score;
student.score = 'B';
console.log(student); // name: 'Andile', score: 100, grade: 'A';

student = {};

//Javascript Object Methods

const engine = {
    // method shorthand, with one argument
    start(adverb) {
        console.log(`THe engine starts up ${adverb}....`);
    },

    // anonymous arrow function expression with no arguments

    sputter: () => {
        console.log('The engine sputters...');
    },
}

engine.start('noisily');
engine.sputter();


//javascript passing objecst  as arguments
const origNum = 8;
const origObj = { color: 'blue' };
const changeItUp = (num, obj) => {
    num = 7;
    obj.color = 'red';
};

changeItUp(origNum, origObj);

//Will output 8 since integers are passed by value
console.log(origNum);

//Will output 'red' since objects are passed reference and are therefore mutable
console.log(origObj.color)

//JavaScript for...in loop
// The JavaScript for...in loop can be used to iterate over the keys of an object.In each iteration, one of the properties from the object is assigned to the variable of that loop.

let mobile = {
    brand: 'Samsung',
    model: 'Galaxy S20'
};

for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
}

// Add another
let computer = {
    brand: 'Apple',
    model: 'MacBook Pro 2019'
};

for (let key in computer) {
    console.log(`${key}: ${computer[key]}`);
}
// this Keyword
// The reserved keyword this refers to a method’ s calling object, and it can be used to access properties belonging to that object.

// Here, using the this keyword inside the object
// function to refer to the cat object and access its name property.

const cat = {
    name: 'Pipey',
    age: 8,
    whatName() {
        return this.name
    }
};

//Output:Pipey

let laptop = {
    name: 'Sasha',
    age: 3,
    color: 'reddish',
    whatName() {
        return this.name
    }
};

// javascript function this
// Every JavaScript
// function or method has a this context.For a
// function defined inside of an object, this will refer to that object itself.For a
// function defined outside of an object, this will refer to the global object(window in a browser, global in Node.js).

const restaurant = {
    numCustomers: 45,
    seatCapacity: 100,
    availableSeats() {
        //this refers to the restaurant object
        //and t's used to access its properties
        return this.seatCapacity - this.numCustomer;
    }
};

let zupcoBus = {
    numRiders: 45,
    seatCapacity: 75,
    availableSeats() {
        return this.seatCapacity - this.numRiders;
    }

};
//JavaScript Arrow Function this Scope
// JavaScript arrow functions do not have their own this context, but use the this of the surrounding lexical context.Thus, they are generally a poor choice for writing object methods. Consider the example code: loggerA is a property that uses arrow notation to define the function.Since data does not exist in the global context, accessing this.data returns undefined. loggerB uses method syntax.Since this refers to the enclosing object, the value of the data property is accessed as expected, returning "abc"

const myObj = {
    data: 'abc',
    loggerA: () => {
        console.log(this.data);
    },
    loggerB() {
        console.log(this.data);
    }
};

myObj.loggerA(); //undefined
myObj.loggerB(); //'abc

// javascript getters and setters restricted
// JavaScript object properties are not private or protected.Since JavaScript objects are passed by reference, there is no way to fully prevent incorrect interactions with object properties.

// One way to implement more restricted interactions with object properties is to use getter and setter methods.

// Typically, the internal value is stored as a property with an identifier that matches the getter and setter method names, but begins with an underscore(_).

const myCat = {
    _name: 'Dottie',
    get name() {
        return this._name;
    },

    set name(newName) {
        this._name = newName;
    }
};

console.log(myCat.name);

myCat.name('Francis');


// Let's try another
let myMachine = {
    _name: 'Sasha',
    get name() {

        return this._name
    },
    set name(newMachineName) {
        this._name = newMachineName;
    }
};

console.log(myMachine.name);
myMachine.name('Diana');

// getters and setters intercept property access
// JavaScript getter and setter methods are helpful in part because they offer a way to intercept property access and assignment, and allow
// for additional actions to be performed before these changes go into effect.

const myCat = {
    _name: 'Snickers',
    get name() {
        return this._name
    },
    set name(newName) {
        //Verify that newName is a non-empty string before setting before as name property

        if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Error: name must be a non-empty string")
        }
    }
}

// javascript factory functions
// A JavaScript function that returns an object is known as a factory function.Factory functions often accept parameters in order to customize the returned object

const dogFactory = (name, age, breed) => {
    return {

        name: name,
        age: age,
        breed: breed,

        bark() {

            console.log("Woof!")
        }
    };
};

//Let's try another
let babyFactory = (name, age, race) => {
    return {
        name: name,
        age: age,
        race: race,

        cry() {
            console.log("Haaaah!")
        }
    };
};

// JavaScript destructuring assignment shorthand syntax
// The JavaScript destructuring assignment is a shorthand syntax that allows object properties to be extracted into specific variable values.

// It uses a pair of curly braces({}) with property names on the left - hand side of an assignment to extract values from objects.The number of variables can be less than the total properties of an object.

let rubiksCubeFacts = {
    possiblePermutations: '43, 253, 003,274,489,856,000',
    invented: '1974',
    largestCube: '17x17x17'
};

const { possiblePermutations, invented, largestCube } = rubiksCubeFacts;
console.log(possiblePermutations);
console.log(invented);
console.log(largestCube);

// shorthand property name syntax for object creation
//The shorthand property name syntax in JavaScript allows creating objects without explicitly specifying the property names(ie.explicitly declaring the value after the key).In this process, an object is created where the property names of that object match variables which already exist in that context.Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’ s value. 
const activity = 'surfing';
const beach = { activity };
console.log(beach);