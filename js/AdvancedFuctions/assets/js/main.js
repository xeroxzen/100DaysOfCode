function sayMyName() {
    return "Andile";
}
document.write(sayMyName());

function greeting() {
    return "<br>Hello, how are you?"
}
document.write(greeting());

function easyCalculator(firstNum, secondNum) {
    return firstNum * secondNum;
}
alert("Evaluated to " +
    easyCalculator(5, 6));

function calcMax(a, b, c) {
    return Math.max(a, b, c);
}

document.write("<br>The max number is " + calcMax(4, 6, 9));