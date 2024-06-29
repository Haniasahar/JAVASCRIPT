// QUES 1
alert("Welcome To Our Website");

// QUES 2
alert("Error! Please Enter a valid password");

// QUES 3
alert("Hint : Use line break");

// QUES 4
alert("Hi");
alert("How Are You");
alert("I Am Fine :)");

// QUES 7
let username;

// QUES 8
let myName = "Haniya Sahar";

// QUES 9
let message;
message = ("Hello World");
alert(message);

// QUES 10
let student_name = "Haniya";
let student_age = 16;
alert(student_name);
alert(student_age);

// QUES 11
let email = "umerzaheer9999@gmail.com";
alert("Hint: use string concatenation");

//  QUES 12
document.write("Hint: use string concatenation");

// QUES 13
let a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
document.write(a);

// QUES 14
let age = 16;
alert(age);

// QUES 15
let visits = 12;
document.write("<br> You have visited this site ", visits, " times <br>");

// QUES 16
let birthYear = 2008;
document.write(birthYear);

// QUES 17
let visitorName = "John Doe";
let productTitle = "T-shirt(s)";
let quantity = 5;
document.write(visitorName, " ordered ", quantity, " ", productTitle, " on XYZ Clothing store.")

// QUES 18
let x, y, z;

// QUES 19

// LEGAL VARIABLE NAMES
let name123;
let father_name;
let dollors$;
let _age;
let $cost;

// ILLEGAL VARIABLE NAMES
// let 123name;
// let name@;
// let #score;
// let var;
// let enjoyment<;

// QUES 20
document.write(" <H1> Rules for naming JS variables </H1>");

document.write(" <br> Variable names can only contain letters, numbers, dollorsigns and underscores. For example $my_1stVariable");
document.write(" <br> Variables must begin with a letter, dollorsign or underscore. For example $name, _name or name");
document.write(" <br> Variable names are case sensitive");
document.write(" <br> Variable names should not be JS keywords");

// QUES 21
let num1 = 21;
let num2 = 15;
let sum = num1 + num2;
document.write("<br>", sum, " ");

// QUES 22
let subtract = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

document.write(subtract, " ", product, " ", division, " ", modulus);

// QUES 23
let num = "abc";
document.write("<br> Value after variable declaration is: ", num);

num = 15;
document.write("<br> Initial value: ", num);

num = ++num;
document.write("<br> Value after increment is: ", num);

num = num + 7;
document.write("<br> Value after addition is: ", num);

num = --num;
document.write("<br> Value after decrement is: ", num);

num = num % 3;
document.write("<br> Remainder after division is: ", num);

// QUES 24
let price = 600;
let costOfTickets = price * 5;
console.log(costOfTickets);

// QUES 25
function table(n) {
    for (let i = n; i <= n * 10; i += n)
        document.write("<br>", i);
}

table(9);