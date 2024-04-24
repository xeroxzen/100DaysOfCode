// States of a Javascript Promise
// A JavaScript Promise object can be in one of three states: pending, resolved, or rejected.

// While the value is not yet available, the Promise stays in the pending state.Afterwards, it transitions to one of the two states: resolved or rejected.

// A resolved promise stands
// for a successful completion.Due to errors, the promise may go in the rejected state.

// In the given code block,
// if the Promise is on resolved state, the first parameter holding a callback
// function of the then() method will print the resolved value.Otherwise, an alert will be shown.

const promise = new Promise((resolve, reject) => {
    const res = true;

    //An asynchronous operation
    if (res) {
        resolve('Resolved!');
    } else {
        reject(Error('Error'));
    }
});
promise.then((res) => console.log(res), (err) => alert(err));

// Creating a Javascript Promise object
// An instance of aJS Promise object is created using the new keyword

//The constructor of the Promise object takes a function, known as the executor function, as the argument. This function is responsible for resolving or rejecting the promise

const executorFn = (resolve, reject) => {
    console.log('The executor function of the promise!');
};


const promise1 = new Promise(executorFn);

// Executor function of JavaScript Promise object
// A JavaScript promise’ s executor function takes two functions as its arguments.The first parameter represents the function that should be called to resolve the promise and the other one is used when the promise should be rejected.A Promise object may use any one or both of them inside its executor function.

// In the given example, the promise is always resolved unconditionally by the resolve function.The reject function could be used for a rejection.

const executorFn2 = (resolve, reject) => {
    resolve('Resolved!');
};

const promise2 = new Promise(executorFn2);

// .then() method of a JavaScript Promise object
// The.then() method of a JavaScript Promise object can be used to get the eventual result(or error) of the asynchronous operation.

// .then() accepts two function arguments.The first handler supplied to it will be called if the promise is resolved.The second one will be called if the promise is rejected.

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Result');
    }, 200);
});

promise3.then((res) => {
    console.log(res);
}, (err) => {
    alert(err);
});

// setTimeout()
// setTimeout() is an asynchronous JavaScript function that executes a code block or evaluates an expression through a callback function after a delay set in milliseconds.

const loginAlert = () => {
    alert('Login');
};

setTimeout(loginAlert, 6000);

// Avoiding nested Promise and .then()
// In JavaScript, when performing multiple asynchronous operations in a sequence, promises should be composed by chaining multiple.then() methods.This is better practice than nesting.

// Chaining helps streamline the development process because it makes the code more readable and easier to debug.

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('*');
    }, 1000);
});

const twoStars = (star) => {
    return (star + star);
};

const oneDot = (star) => {
    return (star + '.');
};

const print = (val) => {
    console.log(val);
};

// Chaining them all together
promise4.then(twoStars).then(oneDot).then(print);
