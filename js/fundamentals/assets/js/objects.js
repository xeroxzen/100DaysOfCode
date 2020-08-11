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