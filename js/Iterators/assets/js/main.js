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

numbers.forEach(number=> {
	console.log(number);
});

const chosenParticipants = ['Andile', 'Mzie', 'Nokuzola', 'Taylor', 'Don'];

const announcements = chosenParticipants.map(member => {
	return member + " joined the contest.<br>";
})

console.log(announcements);