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

// javascript function this
// Every JavaScript
// function or method has a this context.For a
// function defined inside of an object, this will refer to that object itself.For a
// function defined outside of an object, this will refer to the global object(window in a browser, global in Node.js).