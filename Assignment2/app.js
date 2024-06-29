// QUES 1
let number=parseInt(prompt("Enter A Number"));
document.write("Result: <br>", `The value of a is: ${number}`, "<br><b>.........................................</b><br><br>");
document.write(`The value of ++a is: ${number+1}`, "<br>", `Now the value of a is: ${number+1}`,"<br><br>");
document.write(`The value of a++ is: ${number+1}`, "<br>", `Now the value of a is: ${number+2}`,"<br><br>");
document.write(`The value of --a is: ${number+1}`, "<br>", `Now the value of a is: ${number+1}`,"<br><br>");
document.write(`The value of a-- is: ${number+1}`, "<br>", `Now the value of a is: ${number}`,"<br><br>");

// QUES 2
let a = 2;
let b = 1;

document.write("The value of a is " + a + "<br>");
document.write("The value of b is " + b + "<br>");
document.write("The question is [ <b>--a - --b + ++b + b--</b> ]" + "<br><br>");

let result = --a - --b + ++b + b--;

document.write("Now, The value of a is " + a + "<br>");
document.write("Now, The value of b is " + b + "<br>");
document.write("The result is " + result + "<br>");

// QUES 3
let user_name = prompt("Enter Your Name");
alert(`Welcome ${user_name}`);

// QUES 4
let n = prompt("Enter A Number Whose Table You Want");

let i, j;
i = 1;
while (i <= 10) {
    j = n * i;
    document.write(n, " x ", i, " = ", j, "<br>");
    i++;
}

// QUES 5
let sub1 = prompt("Enter A Subject Name Please");
let sub2 = prompt("Enter Another Subject Name Please");
let sub3 = prompt("Enter One More Subject Name Please");
let total_sub = 3;

let total = 100;
let total_marks = total * total_sub;

let obt1 = parseFloat(prompt(`Enter Your Marks Obtained In ${sub1}`));
let obt2 = parseFloat(prompt(`Enter Your Marks Obtained In ${sub2}`));
let obt3 = parseFloat(prompt(`Enter Your Marks Obtained In ${sub3}`));
let total_obt = obt1 + obt2 + obt3;

let percent1 = (obt1 / total) * 100;
let percent2 = (obt2 / total) * 100;
let percent3 = (obt3 / total) * 100;
let total_percent = (percent1 + percent2 + percent3) / total_sub;

document.write("<table border='0'>");

document.write("<tr> <th> Subject </th> <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th> </tr>");
document.write("<tr> <td>" + sub1 + "</td> <td>" + total + "</td > <td>" + obt1 + "</td> <td>" + percent1 + "%" + "</td> </tr>");
document.write("<tr> <td>" + sub2 + "</td> <td>" + total + "</td > <td>" + obt2 + "</td> <td>" + percent2 + "%" + "</td> </tr>");
document.write("<tr> <td>" + sub3 + "</td> <td>" + total + "</td > <td>" + obt3 + "</td> <td>" + percent3 + "%" + "</td> </tr>");

document.write("<tr> <td> </td> <th>" + total_marks + "</th> <th>" + total_obt + "</th> <th>" + total_percent + "%" + "</th> </tr>")