// QUES 1
let city = prompt("Enter Your City");
if (city === "karachi") {
    alert("Welcome to city of lights");
}

// QUES 2
let gender = prompt("Enter Your Gender");
if (gender === "male") {
    alert("Good Morning Sir");
}

else if (gender === "female") {
    alert("Good Morning Ma'am");
}

// QUES 3
let fuel = prompt("Enter The Remaining Fuel In The Car");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// QUES 4

// (a)
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// (b)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// (c)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// (e)
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// (f)
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// QUES 5
let secret_number = 6;
let guess_number = prompt("Guess The Secret Number Ranging From 1 To 10");

if (secret_number == guess_number) {
    alert("Bingo! Correct answer");
}

else if (secret_number - 1 == guess_number) {
    alert("Close enough to the correct answer");
}

// QUES 6
let given_number = prompt("Enter A Random Number!");
let modulus = given_number % 3;

if (modulus === 0) {
    alert("The Given Number Is Divisible By 3");
}

// QUES 7
let given_input = prompt("Please Enter A Number");
let mod = given_input % 2;

if (mod === 0) {
    alert("The Given Number Is An Even Number");
}

else {
    alert("The Given Number Is An Odd Number");
}

// QUES 8
let temp = prompt("Enter The Current Temperature");

if (temp > 40) {
    alert("It is too hot outside.");
}

else if (temp > 30) {
    alert("The Weather today is Normal.");
}

else if (temp > 20) {
    alert("Today's Weather is cool.");
}

else if (temp > 10) {
    alert("OMG! Today's weather is so Cool.");
}

// QUES 9
let first_num = parseInt(prompt("Enter The First Number Please"));
let second_num = parseInt(prompt("Enter The Second Number Please"));
let operation = prompt("Enter The Operation You Want To Opearte Please");

if (operation === "+") {
    document.write("The Sum Of Two Given Numbers Is Equal To ", first_num + second_num);
}

else if (operation === "-") {
    document.write("The Subtraction Of Two Given Numbers Is Equal To ", first_num - second_num);
}

else if (operation === "*") {
    document.write("The Product Of Two Given Numbers Is Equal To ", first_num * second_num);
}

else if (operation === "/") {
    document.write("The Division Of Two Given Numbers Is Equal To ", first_num / second_num);
}

else if (operation === "%") {
    document.write("The Modulus Of Two Given Numbers Is Equal To ", first_num % second_num);
}

else {
    alert("Please Enter The Correct Operation! ");
}