
// CHAPTER # 1

//Task 1

//1.Write a script to greet your website visitors using JS alert box
alert("Welcome! users")

//Task 2

//2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password")

//Task 3

//3. Write a script to display following message on your web page: (Hint: Use line break)
alert("Welcome to JS Land...\nHappy Coding!")

//Task 4

//4. Write a script to display following message in sequence
var box;
alert("Welcome to JS Land...");

alert("Happy Coding\nPrevent this page from creatng additional dialogs");

//Task 5

//5. Generate the following message through browser's developer console:
alert("Hello... I can run JS through my web browser's console");
console.log("Hello... I can run JS through my web browser's console");


//CHAPTER # 2

//Task 1

//1. Declare a variable called Username
document.write("Declare a variable called Username")
var username;

//Task 2

//2. Declare a variable called myName & assign to it a string that represents your full name
document.write("Declare a variable called myName & assign to it a string that represents your full name")
var myName = 'Muhib Aleem';

//Task 3

/*3. Write script to
                            a) Declare a JS variable, titled message
                            b) Assign "HELLO WORLD" to varibale message
                            c) Display the message in alert box*/

var message = 'Hello World'
alert(message);

//Task 4

//4. Write a script to save students'bio data in JS variable and show the data in alert boxes
var myName = 'Muhib Aleem';
alert(myName);
alert("23 years old");
alert("Certified Mobile Application Development");

//Task 5

//5. Write a script to display the following alert using one JS variable:

var a = "PIZZA";
alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

//Task 6

//6. Declare a variable called email and assign to it a string that represents your Email Address (e.g. example@example.com). Show the blow mentioned message in an alert box. (Hint: use string concatenation)
var email = "muhibaleem@gmail.com";
alert("My email address is " + email);

//Task 7

//7. Declare a variable called book and give it the value "A smarter way to learn JavaScript". Display the following message in an alert box.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Task 8

//8. Write a script to display this in brwoser through JS
document.write("Yah! I can write HTML content through JavaScript <br> <br>");

//Task 9

//9. Store following string in a variable and show in alert and browser through JS
var end = "---------ஜ۩۞۩ஜ---------";
alert(end);
document.write(end + "<br>");

//CHAPTER # 3

//Task 1

//1. Declare a variable called age and assign to it your age. Show your age in an alert box
var age = 23;
alert("I am " + age + " years old");

//Task 2

//2. Declare and initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of vists on your web page. For example: "You have visited this site N times"
var time = 0;
var a = 'We are exit now';
for (var i = 1; i > 0; i++) {
    let v = confirm(a);
    if (v == true) {
        time = time + 1;
        alert("You have visited this site " + time + " times")
        break;

    } else if (v == false) {
        time = time + 1
        alert("You have visited this site " + time + " times")
    }
}

//Task 3

//3. Declare a varaible called birthYear & assign to it your birth year. Show the following message in your browser
var birthYear = 1996;
document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number <br><br><br>");

//Task 4

/*4. A visitor visits an online clothing store 
                            www.xyed 5 T-shirt(s) on XYZ Clothing store”.*/

alert("Welcome to www.xyzClothing.com")
var Visitor = prompt("What is your name?", "Guest");
var product = prompt("Which type of Product you see here?", "Shoes");
var Quantity = prompt("How many products you wants to order?");
document.write(Visitor + " ordered " + Quantity + " " + product + " on XYZ Clothing store");

//CHAPTER # 4

//Task 1

//1. Declare 3 variables in one statement.
document.write("Declare 3 variables in one statement")
var letter = "letter",
    $ = "$",
    _ = "_";

//Task 2

//2. Declare 5 legal & 5 illegal variable names.
document.write("Declare 5 legal & 5 illegal variable names")
var var1 = 'muhib';
var var2 = '_muhib';
var var3 = 'muhib786';
var var4 = 'muhib$';
var var5 = 'muhib___';
var var6 = "keywords";
var var7 = "2name";
var var8 = "muhibbbbbbbbbbbbbbbb@";
var var9 = "name%";
var var10 = "5_haris";

//Task 3

//3. Display this in your browser
//              a)  A heading stating “Rules for naming JS variables” 
//            b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//          c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//        d) Variable names are case _________ 
//      e) Variable names should not be JS _________
var letter = "letter",
    $ = "$",
    _ = "_";

var var1 = 'name';
var var2 = '_name';
var var3 = 'name1';
var var4 = '$name';
var var6 = "keywords";
document.write("A heading stating “Rules for naming JS variables” <br>Variable names can only contain" + var1 + ", " + var2 + ", " + var3 + " and " + var4 + ".For example $my_1stVariable <br>Variables must begin with a " + letter + ", " + $ + " or " + _ + ".For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS " + var6);

//CHAPTER # 5

//Task 1

//1.Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var result = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + result);

//Task 2

//2. Repeat task1 for subtraction, multiplication, division & modulus.

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));
var sum, subtraction, multiplication, division, modulus;

sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
subtraction = num1 - num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);
multiplication = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication);
division = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + division);
modulus = num1 % num2;
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus);

//Task 3

/*3. Do the following using JS Mathematic Expressions 
                a. Declare a variable.
                 
                b. Show the value of variable in your browser like “Value 
                after variable declaration is: ??”.
                c. Initialize the variable with some number.
                 
              
                 
                Output : “The remainder is : 0”.*/

var a;
document.write("<br>Value after variable declaration is " + a);
var b = 5;
document.write("<br>Initial value: " + b);
b = b + 1;
document.write("<br>Value after increment is: " + b);
b = b + 7;
document.write("<br>Value after addition is: " + b);
b = b - 1;
document.write("<br>Value after decrement is: " + b);
b = b % 3;
document.write("<br>The remainder is : " + b);

//Task 4

/*4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie*/

var ticket = 600;
var buying = +(prompt("How many tickets you want to buy?"));
var cost;
cost = ticket * buying;
document.write("<br>Total Cost to buy " + buying + " tickets to a movie is " + cost + "PKR");

//Task 5

//5.Write a script to display multiplication table of any number in your browser. E.g
var a = prompt("Enter any number");
document.write("Table of " + a + "<br>");
document.write(a + "X 1 = " + a * 1 + "<br>");
document.write(a + "X 2 = " + a * 2 + "<br>");
document.write(a + "X 3 = " + a * 3 + "<br>");
document.write(a + "X 4 = " + a * 4 + "<br>");
document.write(a + "X 5 = " + a * 5 + "<br>");
document.write(a + "X 6 = " + a * 6 + "<br>");
document.write(a + "X 7 = " + a * 7 + "<br>");
document.write(a + "X 8 = " + a * 8 + "<br>");
document.write(a + "X 9 = " + a * 9 + "<br>");
document.write(a + "X 10 = " + a * 10 + "<br>");

//Task 6

//6.The temperature converter: Its hot out! Let's make a converter based on the steps here.
//a. Store a Celsius temperature into a variable
//b. Convert into Fahrenheit and output "NN°C is NN°F"
//c. Store a Fahrenheit temperature into a variable
//b. Convert into Celsius and output "NN°F is NN°C"
let a = +(prompt("Enter the value of Celsius Temperature"));
let F = (a * 9 / 5) + 32;
let b = +(prompt("Enter the value of Fahrenheit Temperature"));
let C = (b - 32) * 5 / 9;
document.write(a + "°C is " + F + "°F<br>");
document.write(b + "°F is " + C + "°C<br>");

//Task 7

//7.Write a program to implement to checkout process of a shopping cart system for an e-commerce website.
//Store the following in variables
//a. Price of item 1
//b. Price of item 2
//c. Ordered quantity of item 1
//d. Ordered quantity of item 1
//e. Shipping Charges
//Compute the total cost & show the receipt in your browser.

var item1 = +(prompt("Enter Price of item 1"));
var item2 = +(prompt("Enter Price of item 2"));
var Ordered1 = +(prompt("Enter ordered quantity of item 1"));
var Ordered2 = +(prompt("Enter ordered quantity of item 2"));
var ShippingCharges = 100;
let result1 = item1 * Ordered1;
let result2 = item2 * Ordered2;
let cost = result1 + result2 + ShippingCharges;
document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + Ordered1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + Ordered2 + "<br>");
document.write("Shipping Charges " + ShippingCharges + "<br><br>");
document.write("Total cost of your order is " + cost);

//Task 8

//8. Store total marks and marks obtained by a student in 2 variables. Compute the percentage
//& show the result in your browser

var TM = +(prompt("Enter Total Marks of Student"));
var OM = +(prompt("Enter Obtained Marks of Student"));
document.write("<h1>Marks Sheet</h1>");
document.write("Total Marks: " + TM + "<br>");
document.write("Obtained Marks: " + OM + "<br>");
var per = (OM / TM) * 100;
document.write("Percentage: " + per + "%<br>");

//Task 9

//9. Assume we have 10 US Dollars & 25 Saudi Riyals. Write a script to convert the total currency the total currency to Pakistani Rupees.
//Perform all calculations in a single expression.
//(Exchange rates: 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write("<h1>Currency in PKR</h1>");
let Dollar = 10;
let Saudi_Riyal = 25;
let Exchange1 = 104.80 * Dollar;
let Exchange2 = 28 * Saudi_Riyal;
let cost = Exchange1 + Exchange2;
document.write("Total currecny in PKR: " + cost);

//Task 10

//10. Write a program to initialize a variable with some number and do arithmetic in following sequence.
//a. Add 5
//b. Multiply by 10
//c. Divide the result by 2
//performe all calculation in a single expression

let a = 7;
b = (a + 7) * 10 / 2;
document.write(b);

//Task 11

//11.The Age Calculator: Forgot how old someone is?
//Calculate it!
//a. Store the current year in a variable
//b. Store their birth year in a variable
//c. Calculate their two possible ages based on the stored values.
//  Output them ot the screen like so: "They are either NN or NN years old"

document.write("<h1>Age Calculator</h1>");
let CY = +(prompt("Enter the current year"));
document.write("Current Year: " + CY + "<br>")
let BY = +(prompt("Enter the birth year"));
document.write("Birth Year: " + BY + "<br>")
let age = CY - BY;
document.write("Your age is: " + age);

//Task 12

//12. The Geometrizer: Calculate properties of a circle
//a. Store a radius into a variable
//b. Calculate the circumference based on the radius, and output "The circumference is NN"
//Calculate the area based on the radius, and output "The area is NN"

document.write("<h1>The Geometrizer</h1>");
const pie = 3.142;
let radius = +(prompt("Enter a value of radius"));
document.write("Radius of a circle is: " + radius + "<br>");
let circumference = 2 * pie * radius;
document.write("The Circumference is: " + circumference + "<br>");
let area = pie * radius * radius;
document.write("The Area is: " + area + "<br>");

//Task 13

//13.The Life Time Supply Calculator: Ever wonder how much a "lifetime supply" of your favourite snack is?
//Wonder no more.
//a. Store your favourite snack into a variable
//b. Store your current age into a variable
//c. Store your maximum age into a variable
//d. Store an estimated amount per day (as a number).
//e. Calculate how many would you eat total for the rest of your life.
//Output the result to the screen like so: "You will need NNNN to last you until the ripe old age of NN"

document.write("<h1>The Life Time Supply Calculator</h1>");
let favouriteSnacks = prompt("Enter your favourite snack");
document.write("Favourite Snacks: " + favouriteSnacks + "<br>");
let currentAge = +(prompt("Enter your Current age"));
document.write("Current Age: " + currentAge + "<br>");
let maximumAge = +(prompt("Enter your Maximum Age"));
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
let estimatedAmount = +(prompt("Enter your estimated amount per day"));
document.write("Amount of snacks per day: " + estimatedAmount + "<br>");
let total, a, b;
a = maximumAge - currentAge;
b = a * 365;
total = b * estimatedAmount;
document.write("You will need " + total + " to last you until the ripe old age of " + maximumAge);

//CHAPTER # 6 to 9

//Task 1

/*1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:*/

var a = prompt("Enter the value of a");
document.write("Results: <br>The value of a is: " + a + "<br>............................................... <br>")

a = ++a;
document.write("<br>The value of ++a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a++ is: " + a);
a++;
document.write("<br>Now the value of a is: " + a);
a = --a;
document.write("<br> <br>The value of --a is: " + a);
document.write("<br>Now the value of a is: " + a);
document.write("<br> <br>The value of a-- is: " + a);
a--;
document.write("<br>Now the value of a is: " + a);


//Task 2

//2. What will be the output in variables a,b & result after execution of the following script:
//var a = 2, b =1;
//var result = --a - --b + ++b  + b--;
//Explain the output at each stage:
//--a: 1;
//--a - --b: 0;
//--a - --b + ++b: 0; 
//--a - --b + ++b + b--: -1;


var a = 2,
    b = 1;
/*x = --a;
document.write("<br>The value of --a is: " + x);
y = --a - --b;
document.write("<br>The value of --a - --b is: " + y);
z = --a - --b + ++b;
document.write("<br>The value of --a - --b + ++b is: " + z);
w = --a - --b + ++b + b--;
document.write("<br>The value of --a - --b + ++b + b-- is: " + w);*/
var result = --a - --b + ++b + b--;
document.write("<br>The value of a is: " + a);
document.write("<br>The value of b is: " + b);
document.write("<br>Result is: " + result);

//Task 3

//3. Write a program to takes input a name from user & greet the user.
var name = prompt("Enter Your Name","muhib");
alert("Welcome to " + name);
document.write("Welcome to " + name);

//Task 5

//5. Write a program to take input a number from user & display it's multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should  be displayed by default
var num = +(prompt("Enter any number", "5"));
document.write("Table of " + num + "<br>")
for (var i = 1; i <= 10; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 6

//  6. Take:
//  a) Take three subjects name from user and store them in 3 different variables
//  b) Total marks for each subject is 100, store it in another variable
//  c) Take obtained marks for first subject from user and stored it in different variables
//  d) Take obtained marks for remaining 2 subjects from user and stored them in variables
//  e) Now calculate total marks and percentage and show the result in browser like  this. (Hint: user table)

var sub1 = prompt("Enter Your First Subject Name");
var sub2 = prompt("Enter Your Second Subject Name");
var sub3 = prompt("Enter Your Third Subject Name");
var TM = 100;
var ob1 = +(prompt("Enter Obtained Marks of First Subject"));
var ob2 = +(prompt("Enter Obtained Marks of Second Subject"));
var ob3 = +(prompt("Enter Obtained Marks of Third Subject"));
var per1, per2, per3, PER, OB, TM;
per1 = (ob1 / TM) * 100;
per2 = (ob2 / TM) * 100;
per3 = (ob3 / TM) * 100;
OB = ob1 + ob2 + ob3;
PER = (OB / 300) * 100;

document.write("<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr> <td>" + sub1 + "</td> <td>" + TM + "</td> <td>" + ob1 + "</td> <td>" + per1 + "%</td> </tr> <tr> <td>" + sub2 + "</td> <td>" + TM + "</td> <td>" + ob2 + "</td> <td>" + per2 + "%</td> </tr> <tr> <td>" + sub3 + "</td> <td>" + TM + "</td> <td>" + ob3 + "</td> <td>" + per3 + "%</td> </tr> <tr> <td> </td> <th>" + 300 + "</th> <th>" + OB + "</th> <th>" + PER + "%</th>  </tr> </table>");

//CHAPTER # 9 TO 11

//Task 1

//1. Write a Program to take 'city' name as input from user. If user enter "Karachi" Welcome the user like this:
//"Welcome to city of lights"

var city = prompt("Enter City Name").toUpperCase(city);
if (city === "KARACHI") {
    alert("Welcome to city of lights");
    document.write("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
    document.write("Welcome to " + city);
}

//Task 2

//2. Write a program to take "gender" as input from user. If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma'am

var gender = prompt("What is your gender?\nMale or Female").toLowerCase(gender);
if (gender === "male") {
    alert("Good Morning Sir");
    document.write("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma'am");
    document.write("Good Morning Ma'am");
} else {
    alert("Wrong Gender")
}

//Task 3

//3. Write a program to take input color of road traffic signal from the user & show the message:
var color = prompt("Which color you see of traffic signal?").toLowerCase(color);
if (color === 'red') {
    alert("Must Stop");
} else if (color === "yellow") {
    alert("Ready to move");
} else if (color === "green") {
    alert("Move now");
} else {
    alert("Wrong Color! Please try again")
}

//Task 4

//4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
//show the message “Please refill the fuel in your car”

var remainingfuel = +(prompt("How many reamining fuel in your car (in litres)"));
if (remainingfuel < 0.25) {
    alert("Please refill the fuel in your car");
    document.write("Please refill the fuel in your car");
} else {
    alert("I think you can go with this fuel in any near fuel station");
    document.write("I think you can go with this fuel in any near fuel station");
}

//Task 5

//5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true"); //this conditions is not true
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true"); //this conditions is not true
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true"); //this conditions is not true
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False"); //this conditions is not true
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

//Task 6

//6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
//percentage on your page. Take percentage & compute grade as per following table: 

var ob1 = +(prompt("Enter the obtained marks of first subject"));
var ob2 = +(prompt("Enter the obtained marks of second subject"));
var ob3 = +(prompt("Enter the obtained marks of third subject"));
var TM = 300;
var OB = ob1 + ob2 + ob3;
var per;
per = (OB / TM) * 100;
per = per.toFixed(2)
if (per >= 80) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A-one<br>Remarks: Excellent</center>")
} else if (per >= 70) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: A<br>Remarks: Good</center>")
} else if (per >= 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: B<br>Remarks: You need to improve</center>")
} else if (per < 60) {
    document.write("<center><h1>Marks Sheet</h1> <br><br>Total Marks: 300 <br>Marks Obtaiend:" + OB + "<br>Percentage: " + per + "%<br>Grade: Fail<br>Remarks: Sorry</center>")
}

//Task 7

//7. Guess game: 
//Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
//a. If user guesses the same number, show “Bingo! Correct answer”.
//b. If the guessed number +1 is the secret number, show 
//“Close enough to the correct answer”

var n = 7;
var num = +(prompt("Enter a Guess number"));
if (num === n) {
    alert("Bingo! Correct Answer");
    document.write("Bingo! Correct Answer");
} else if (num > n) {
    alert("Close enough to the correct answer try to lower number");
    document.write("Close enough to the correct answer try to lower number");
} else {
    alert("Close enough to the correct answer try to higher number");
    document.write("Close enough to the correct answer try to higher number");

}

//Task 8

//8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
//is divisble by 3

var num = +(prompt("Enter the number to check it is divisible by 3"));
var check = num % 3;
if (check === 0) {
    alert(num + " is divisble by 3");
} else {
    alert(num + " can not be divisible by 3")
}

//Task 9

//9. Write a program that checks whether the given input is an even number or an odd number.

var num = +(prompt("Enter the number"));
var check = num % 2;
if (check === 0) {
    alert(num + " is even number");
} else {
    alert(num + " is odd number");
}

//Task 10

//10. Write a program that takes temperature as input and shows a message based on following criteria 
//a. T > 40 then “It is too hot outside.” 
//b. T > 30 then “The Weather today is Normal.” 
//c. T > 20 then “Today’s Weather is cool.” 
//d. T > 10 then “OMG! Today’s weather is so Cool.”

var T = +(prompt("Enter Weather Temperature"));
if (T > 40) {
    document.write("It is too hot outside");
} else if (T > 30) {
    document.write("The weather today is Normal");
} else if (T > 20) {
    document.write("Today's Weather is cool");
} else if (T > 10) {
    document.write("OMG! Today's weather is so cool");
} else {
    document.write("Its very cool weather")
}

//Task 11

//11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
//a. First number
//b. Second number
//c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user

var num1 = +(prompt("Enter First Number"));
var num2 = +(prompt("Enter Second Number"));
var op = prompt("Choose your operation\n(+, -, *, /, %)");
var result;
if (op === "+") {
    result = num1 + num2;
    document.write("Result is: " + result);
} else if (op === "-") {
    result = num1 - num2;
    document.write("Result is: " + result);
} else if (op === "*") {
    result = num1 * num2;
    document.write("Result is: " + result);
} else if (op === "/") {
    result = num1 / num2;
    document.write("Result is: " + result);
} else if (op === "%") {
    result = num1 % num2;
    document.write("Result is: " + result);
} else {
    alert("Invalid Operator");
}

//CHAPTER # 12 TO 13

//Task 1

//1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII codes:-A=65, Z=90, a=97, z=122).
var character = prompt("Enter any character");
var c = character.charCodeAt(0);
alert(c);

//Task 2

//2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal
var num1 = +(prompt("Enter first integer"));
var num2 = +(prompt("Enter second integer"));
if (num1 > num2) {
    document.write(num1 + " is larger number");
} else if (num2 > num1) {
    document.write(num2 + " is larger number");
} else if (num1 === num2) {
    document.write("Both integers are equal");
}

//Task 3

//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num = +(prompt("Check your number is positive or negative?"));
if (num > 0) {
    document.write("Number is positive");
}
if (num < 0) {
    document.write("Number is negative");
}
if (num === 0) {
    document.write("Number is zero");
}

//Task 4

//4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var character = prompt("Enter one alphabate");
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
    document.write("True");
} else {
    document.write("False");
}

//Task 5

//5. Write a program that 
//a. Store correct password in a JS variable. 
//b. Asks user to enter his/her password 
//c.Validate the two passwords: 
//  i. Check if user has entered password. If not, then give message “ Please enter your password” 
//ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show 
//“Incorrect password” otherwise.

var password = "Python_Programmer";
var a = prompt("Enter Your Password");
if (password == a) {
    alert("Correct! The Password you entered matches the original password");
} else if (a == false) {
    alert("Please Enter Your Password")
} else if (password != a) {
    alert("Incorrect password");
}

//Task 6

//6. This if/else statement does not work. Try to fix it:
//var greeting;
//      var hour = 13; 
//if (hour < 18) { 
//greeting = "Good day"; 
//else

//greeting = "Good evening"; 
//}
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
    document.write(greeting);
} else {
    greeting = "Good evening";
    alert(greeting);
    document.write(greeting);
}

//Task 7

//7. Write a program that takes time as input from user in 24 hours clock format like:
//1900 = 7pm. Implement the following case using if, else & else if statements
var time = +(prompt("Enter Time like this format 1900"));
if (time >= 0000 && time < 1200) {
    alert("Good Morning");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}

//CHAPTER # 14 TO 16

//Task 1

//1.Declare an empty array using JS literal notation to store student names in future.

var studentArray = [];
studentArray.push("muhib", "raza", "zoony") //new student names write here and then automatically add in array
document.write(studentArray);

//Task 2

//2. Declare an empty array using JS object notation to store student names in future.
var studentArray = {}
document.write(studentArray);
console.log(studentArray);

//Task 3

//3.Declare and initialize a strings array.
document.write("Declare and initialize a strings array")

let employeeNames = ["muhib", "raza", "zoony", "haris", "ayub"];
console.log(employeeNames);

//Task 4

//4.Declare and initialize a number array.
document.write("Declare and initialize a number array");

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(number);

//Task 5

//5.Declare and initialize a boolean array.
document.write("Declare and initialize a boolean array");

let booleanArray = [true, false];
console.log(booleanArray);

//Task 6

//6.Declare and initialize a mixed array.
document.write("Declare and initialize a mixed array");
let mixedArray = [true, false, 0, 5, 9, 7, 4, 3, "muhib", "raza", "zoony", "haris", "ayub"];
console.log(mixedArray);

//Task 7

//7.Declare and Initialize an array and store available education qualifications in Pakistan(e.g.SSC, HSC, BCS,
//BS, BCOM, MS, M.Phil., PhD).Show the listed qualifications in your browser like:

let educationArray = ["SSC", "HSC", 'BCS', 'BS', "BCOM", 'MS', 'M.Phill', 'PhD'];
document.write("<h2>Qualification:</h2><br>1) " + educationArray[0] + "<br>2) " + educationArray[1] + "<br>3) " + educationArray[2] + '<br>4) ' + educationArray[3] + "<br>5) " + educationArray[4] + "<br>6) " + educationArray[5] + "<br>7) " + educationArray[6] + "<br>8) " + educationArray[7]);

//Task 8

//8.Write a program to store 3 student names in an array.Take another array to store score of these three students.
//Assume that total marks are 500 for each student, display the scores & percentages of students like:

let studentNames = [];
studentNames[0] = prompt("Enter First Student Name");
studentNames[1] = prompt("Enter Second Student Name");
studentNames[2] = prompt("Enter Third Student Name");
console.log(studentNames);
let scoreArray = [];
scoreArray[0] = prompt("Enter " + studentNames[0] + " score");
scoreArray[1] = prompt("Enter " + studentNames[1] + " score");
scoreArray[2] = prompt("Enter " + studentNames[2] + " score");
console.log(scoreArray);
let TM = 500;
let per1 = (scoreArray[0] / TM) * 100;
let per2 = (scoreArray[1] / TM) * 100;
let per3 = (scoreArray[2] / TM) * 100;
document.write("<h1>Score of " + studentNames[0] + " is " + scoreArray[0] + ". Percentage: " + per1 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[1] + " is " + scoreArray[1] + ". Percentage: " + per2 + "%<br></h1>");
document.write("<h1>Score of " + studentNames[2] + " is " + scoreArray[2] + ". Percentage: " + per3 + "%<br></h1>");

//Task 9

//9.Initialize an array with color names. Display the array elements in your browser. 
//a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
//Display the updated array in your browser. 
//b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the 
//updated array in your browser. 
//c. Add two more color to the beginning of the array. Display the updated array in your browser.
//d. Delete the first color in the array. Display the updated array in your browser. 
//e. Delete the last color in the array. Display the updated array in your browser. 
//f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
//position/index. . Display the updated array in your browser.
//g.Ask the user at which index he / she wants to delete color(s) & how many colors he / she wants to delete.Then
//remove the same number of color(s) from user-defined position/index.Display the updated array in your browser.
let colorNames = [];
colorNames[0] = prompt("What color you wants to add to the beginning?");
document.write(colorNames[0] + ",");
colorNames[1] = prompt("What color you wants to add to the end?");
document.write(colorNames[1] + "<br>");
let a = prompt("Add one more color to the beginning of the array");
let b = prompt("Add one more color to the beginning of the array");
colorNames.unshift(b);
colorNames.unshift(a);
document.write(colorNames + "<br>");
colorNames.shift(colorNames);
document.write(colorNames + "<br>");
colorNames.pop(colorNames);
document.write(colorNames + "<br>");
let indexNumber = +(prompt("Which index you wants to add a color"));
let Color = prompt("Which color you wants to add a index");
colorNames[indexNumber] = Color;
document.write(colorNames + "<br>");
let c = +(prompt("Which index you wants to delete color(s)?"));
let d = +(prompt("How many colors you wants to delete?"));
colorNames.splice(c, d);
document.write(colorNames);

//Task 10

//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentScore = [320, 230, 480, 120];
document.write("Scores of Students: " + studentScore);
studentScore.sort();
document.write("<br>Orderd Scores of Students: " + studentScore);

//Task 11

//11. Write a program to initialize an array with city names Copy 3 array elements from cities array to selectedCities 
//array.
let cities = ["Karachi", 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
let selectedCities;
document.write("<h3>Cities List:</h3>" + cities + "<br><br>");
selectedCities = cities.slice(2, 4);
document.write("<h3>Selected Cities List:</h3>" + selectedCities);

//Task 12

//12. Write a program to create a single string from the below mentioned array: 
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
//(Use array’s join method)

var arr = ["This", "is", "my", "cat"];
document.write("<h1>Array:</h1> " + arr + "<br>");
a = arr.join(" ");
document.write("<h1>String:</h1> " + a);

//Task 13

//13.Create a new array. Store values one by one in such a way that you can access the values in the order in which they 
//were stored. (FIFO-First In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[0] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[3] + "<br>");

//Task 14

//14.Create a new array. Store values one by one in such a way that you can access the values in reverse order
//(Last In First Out)
let arr = ['keyboard', 'mouse', 'printer', 'monitor'];
document.write("Devices:<br>" + arr + "<br><br>")
document.write("Out:<br>" + arr[3] + "<br>");
document.write("Out:<br>" + arr[2] + "<br>");
document.write("Out:<br>" + arr[1] + "<br>");
document.write("Out:<br>" + arr[0] + "<br>");

//Task 15

//15.Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//Display the following dropdown/select menu in your browser using document.write() method:

let arr = ["Apple", 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// document.write("<ul><li>" + arr[0] + "</li> <li>" + arr[1] + "</li> <li>" + arr[2] + "</li><li>" + arr[3] + "</li><li>" + arr[4] + "</li><li>" + arr[5] + "</li></ul>")
document.getElementById('apple').innerHTML = arr[0];
document.getElementById('samsung').innerHTML = arr[1];
document.getElementById('motorola').innerHTML = arr[2];
document.getElementById('nokia').innerHTML = arr[3];
document.getElementById('sony').innerHTML = arr[4];
document.getElementById('haier').innerHTML = arr[5];

//CHAPTER # 17 TO 20

//Task 1

//1. Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("Declare and initialize an empty multidimensional array. (Array of arrays)<br>Check the code")
let arr = [
    [],
    [],
    [],
    [],
    [],
    [],
];

//Task 2

//2.Declare and initialize a multidimensional array representing the following matrix:
let arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
document.write(arr[0][0] + " ");
document.write(arr[0][1] + " ");
document.write(arr[0][2] + " ");
document.write(arr[0][3] + "<br>");
document.write(arr[1][0] + " ");
document.write(arr[1][1] + " ");
document.write(arr[1][2] + " ");
document.write(arr[1][3] + "<br>");
document.write(arr[2][0] + " ");
document.write(arr[2][1] + " ");
document.write(arr[2][2] + " ");
document.write(arr[2][3] + "<br>");

//Task 3

//3. Write a program to print numeric counting from 1 to 10
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

//Task 4

//4.Write a program to print multiplication table of any number using for loop.
//Table number & length should be taken as an input from user

var num = +(prompt("Enter a number to show its multiplication table"));
var length = +(prompt("Enter length multiplication table"));
for (var i = 1; i <= length; i++) {
    document.write(num + " X " + i + " = " + num * i + "<br>");
}

//Task 5

//5.Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
document.write("<br>");
for (var j = 0; j < fruits.length; j++) {
    document.write("Element at index " + j + " is " + fruits[j] + "<br>");
}

//Task 6

//6.Generate the following series in your browser. See example output. 
//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
//c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
//d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
//e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
    document.write(i + ",");
}
document.write("<h3>Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
    document.write(i + ",");
}
document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 20; i = i + 2) {
    document.write(i + ",");
}
document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i = i + 2) {
    document.write(i + "k,");
}

//Task 7

//7.You have an array 
//A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable“ search by user input” in an array.After searching,
//prompt the user whether the given item is found in the list or not.Example:

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var customer = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am?");
if (customer == A[0]) {
    alert(customer + " is available at index 0 in our bakery ");
} else if (customer == A[1]) {
    alert(customer + " is available at index 1 in our bakery ");
} else if (customer == A[2]) {
    alert(customer + " is available at index 2 in our bakery ");
} else if (customer == A[3]) {
    alert(customer + " is available at index 3 in our bakery ");
} else if (customer == A[4]) {
    alert(customer + " is available at index 4 in our bakery ");
} else {
    alert("We are sorry." + customer + " is not available in our bakery");
}

//Task 8

//8. Write a program to identify the largest number in the given array. 
//A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 91 && A[i] > 90) {
        document.write("The largest number is " + A[i]);
    }
}

//Task 9

//9. Write a program to identify the smallest number in the given array.
//A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
document.write("Array items: " + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (A[i] == 12 && A[i] < 13) {
        document.write("The smallest number is " + A[i]);
    }
}

//Task 10

//10. Write a program to print multiples of 5 ranging 1 to 100.
document.write("Write a program to print multiples of 5 ranging 1 to 100<br><br>");

for (var i = 1; i <= 20; i++) {
    var j = 5 * i;
    document.write(j + ",");
}				
// CHAPTER # 21 TO 25

//Task 1
/*1. Write a program that takes two user inputs for first and last name using prompt and
merge them in a new variable titled fullName. Greet the user using his full name.*/

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname + " " + lname;
alert("Good Morning! " + fullName);

//Task 2
/*2. Write a program to take a user input about his favorite mobile phone model.
Find and display the length of user input in your browser*/

var mobileModel = prompt("Enter Your Favorite Mobile Phone Model");
document.write("My favorite phone is: " + mobileModel + "<br>");
var mobileLength = mobileModel.length
document.write("Length of String: " + mobileLength);

//Task 3
/*3. Write a program to find the index of letter “n” in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Index of 'n': " + name.indexOf('n'));

//Task 4
/*4. Write a program to find the last index of letter “l” in the word “Hello World” and display
the result in your browser */

var greet = 'Hello World';
document.write("String: " + greet + "<br>Last Index of 'l': " + greet.lastIndexOf('l'));

//Task 5
/*5. Write a program to find the character at 3rd index in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Character at Index 3: " + name.charAt(3));

//Task 6
//6.Repeat Q1 using string concat() method.

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname.concat(" ", lname);
alert("Good Morning! " + fullName);

//Task 7
/*7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display
the result in your browser*/

var city = 'Hyderabad';
document.write("City: " + city);
var cityHyder = city.slice(0, 5);
var cityIslam = cityHyder.replace(cityHyder, 'Islam');
var abad = city.slice(5);
var cityReplace = cityIslam + abad
document.write("<br>After Replacement: " + cityReplace);

//Task 8
/*8.Write a program to replace all occurrences of “and” in the string with “&” and display the
result in your browser. var message = “Ali and Sami are best friends. They play cricket and 
football together.”; */

var message = "Ali and Sami are best friends.They play cricket and football together.";
var replaceMessage = message.replace(/and/g, '&');
document.write(replaceMessage)

//Task 9
/*9. Write a program that converts a string “472” to a number 472.
Display the values & types in your browser. */

var number = 472;
var convertNumber = number.toString();
var a = typeof(convertNumber);
document.write("Value: " + number + "<br>Type: " + a);
var string = "472";
var convertString = parseInt(string);
var b = typeof(convertString);
document.write("<br>Value: " + string + "<br>Type: " + b);

//Task 10
/*10.Write a program that takes user input. Convert and show the input in capital letters. */

var userInput = prompt("Enter Any Dry Fruits Name");
document.write("User Input: " + userInput);
var upper = userInput.toUpperCase();
document.write("<br>Upper Case: " + upper);

//Task 11
/*11.Write a program that takes user input. Convert and show the input in title case */

var userInput = prompt("Enter Your Favorite Programming Language");
document.write("User Input: " + userInput)
var firstLetter = userInput.slice(0, 1);
var otherLetters = userInput.slice(1);
var ProgrammingLanguage = firstLetter.toUpperCase() + otherLetters
document.write("<br>Title Case: " + ProgrammingLanguage);

//Task 12
/*12. Write a program that converts the variable num to string.
var num = 35.36 ; Remove the dot to display “3536” display in your browser */

var num = 35.36;
document.write("Number: " + num + "<br>");
var string = num.toString();
var stringStart = string.slice(0, 2);
var stringEnd = string.slice(3);
var strings = stringStart + stringEnd;
document.write("Result: " + strings);

//Task 13
/*13. Write a program to take user input and store username in a variable.
If the username contains any special symbol among [@ . , !], prompt the user to enter a valid
username.
For character codes of [@ . , !]*/

var userInput = prompt("Enter User Name");
var atTheRate = '@';
var fullStop = '.';
var comma = ',';
var exclaminationMark = '!';
for (var i = 0; i < userInput.length; i++) {
    var check = userInput.charAt(i)
    if (check == atTheRate || check == fullStop || check == comma || check == exclaminationMark) {
        alert("Enter a valid User Name");

    }

}

//Task 14
/*14. You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program  should inform about its availability. Example: */

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var changeCase = userInput.toLowerCase();
switch (changeCase) {
    case 'cake':
        document.write("cake is <b>available</b> at index 0 in our bakery<br>");
        break;
    case 'apple pie':
        document.write("apple pie is <b>available</b> at index 1 in our bakery<br>");
        break;
    case 'cookie':
        document.write("cookie is <b>available</b> at index 2 in our bakery<br>");
        break;
    case 'chips':
        document.write("chips is <b>available</b> at index 3 in our bakery<br>");
        break;
    case 'patties':
        document.write("patties is <b>available</b> at index 4 in our bakery<br>");
        break;
    default:
        document.write(changeCase + " is not <b>available</b> in our bakery<br>");
        break;
}

//Task 15
/*15. Write a program to take password as an input from user.
The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number
c. It must at least 6 characters long 
If the password does not meet above requirements,prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.*/

var password = prompt("Enter Your Password");
var passwordLength = password.length;
var smallLetters = /[a-z]/g;
var capitalLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if ((password.match(smallLetters) || password.match(capitalLetters)) && password.match(numbers)) {
    var notDigit = password.charAt(0);
    if (notDigit != 0 && notDigit != 1 && notDigit != 2 && notDigit != 3 && notDigit != 4 && notDigit != 5 && notDigit != 6 && notDigit != 7 && notDigit != 8 && notDigit != 9) {
        if (passwordLength > 5) {
            document.write("Enter Password: " + password);
            document.write("<br>Password Created");
        } else {
            document.write("Enter Password: " + password);
            document.write("<br>Minimum password length is 6");
            document.write("<br>Please enter a Valid Password");

        }
    } else {
        document.write("Enter Password: " + password);
        document.write("<br>Password can not begin with a number");
        document.write("<br>Please enter a Valid Password");
    }
} else {
    document.write("Enter Password: " + password);
    document.write("<br>Password should contain alphabets and numbers");
    document.write("<br>Please enter a Valid Password");

}

//Task 16
/*16. Write a program to convert the following string to an array using string split method. 
var university = “University of Karachi”;
Display the elements of array in your browser.  */

var university = 'University of Karachi';
let char = university.split('');
for (var i = 0; i < 21; i++) {
    document.write(char[i] + "<br>");

}
let arr = university.split();
console.log(arr);

//Task 17
/*17. Write a program to display the last character of a user input. */

var userInput = prompt("Enter any country name");
let firstCapital = userInput.slice(0, 1);
let otherLetters = userInput.slice(1);
let join = firstCapital.toUpperCase() + otherLetters;
document.write("User Input: " + join);
let lastCharcter = userInput.charAt(userInput.length - 1);
document.write("<br>Last Charcter of input: " + lastCharcter);

//Task 18
/*18. You have a string “The quick brown fox jumps over the lazy dog”.
Write a program to count number of occurrences of word “the” in given string. */

let string = 'The quick brown fox jumps over the lazy dog';
document.write("Text: " + string);
let lowerString = string.toLowerCase();
let countVariable = (lowerString.match(/the/g)).length;
document.write('<br>There are ' + countVariable + " occurrences of word 'the' ");

				//CHAPTER # 26 TO 30

//Task 1
/*1.Write a program that takes a positive integer from user & display the following in your browser. 
a. number
b. round off value of the number 
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any postive integer"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 2
/*2. Write a program that takes a negative floating point number from user & display the
following in your browser. 
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any negative floating point"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 3
/*3. Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

let number = +(prompt("Enter any value to find absolute value"));
let absolute = Math.abs(number);
document.write("absolute value of " + number + " is " + absolute);

//Task 4
/*4. Write a program that simulates a dice using random() method of JS Math class.
Display the value of dice in your browser.: */

let dice = (Math.random()) * 7
let value = Math.floor(dice)
document.write('random dice value: ' + value);

//Task 5
/*5. Write a program that simulates a coin toss using random() method of JS Math class.
Display the value of coin in your browser */

let tail = 1;
let head = 2;
let numberGenerate = (Math.random()) * 3;
let coinToss = Math.floor(numberGenerate);
if (coinToss == 1) {
    document.write(tail + "<br>random coin value: Tail");
} else if (coinToss == 2) {
    document.write(head + "<br>random coin value: Head");
} else {
    document.write("Coin has vanished in System ☺");
}

//Task 6
/*6. Write a program that shows a random number between 1 and 100 in your browser.  */

let number = (Math.random()) * 101;
let floor = Math.floor(number);
document.write("Random number between 1 and 100: " + floor);

//Task 7
/*. Write a program that asks the user about his weight. Parse the user input and display his
weight in your browser.Possible user
inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms  */

let weight = prompt("Enter your weight in kilograms");
document.write("The weight of user is: " + weight);

//Task 8
/*8. Write a program that stores a random secret number from 1 to 10 in a variable.
Ask the user to input a number between 1 and 10. If the user input equals the secret 
number, congratulate the user.  */

var secret = Math.random() * 10;
var secrets = Math.floor(secret);
var inn = +(prompt("enter number between 1 to 10"));
if (inn == secrets){
    document.write("congrats");
}else{
    document.write("try again");
}
				//CHAPTER # 31 TO 34

//Task 1
/*1. Write a program that displays current date and time in your browser.  */

let date = new Date();
document.write(date);

//Task 2
/*2. Write a program that alerts the current month in words. For example December. */

let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
let currentMonth = date.getMonth();
alert("Current Month: " + monthsNames[currentMonth]);

//Task 3
/*3. Write a program that alerts the first 3 letters of the current day,
for example if today is Sunday then alert will show Sun.*/

let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let date = new Date();
let today = date.getDay();
alert("Today is " + dayNames[today]);

//Task 4
/*4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. */

let dayNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thrday', 'Friday', 'Satday'];
let date = new Date();
let today = date.getDay();
if (dayNames[today] == 'Sunday') {
    alert("It's Fun Day");
}

//Task 5
/*5. Write a program that shows the message “First fifteen days of the month” if the date is
less than 16th of the month else shows “Last days of the month”. */

let date = new Date();
let day = date.getDate();
if (day < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");

}

//Task 6
/*6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it
to a variable that hasn't been declared beforehand.
Use any variable you like to represent the Date object */

let todayDate = new Date();
document.write("Current Date: " + todayDate);
let miliseconds = todayDate.getTime();
document.write("<br>Elasped miliseconds since January 1, 1970: " + miliseconds);
let minutes = miliseconds / (60 * 60);
document.write("<br>Elasped minutes since January 1, 1970: " + minutes);

//Task 7
/*7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

let todayDate = new Date();
let time = todayDate.getHours();
if (time >= 0 && time < 12) {
    alert("It's AM");

} else if (time >= 12 && time < 24) {
    alert("It's PM");
}

//Task 8
/*8.Write a program that creates a Date object for the last day of the last month of 2020 and
assigns it to variable named laterDate. */

let date = new Date(2020, 11, 31);
document.write("Later date: " + date);

//Task 9
/*9. Create a date object of the starting date of this Ramadan and alert the number of days
past since 1st Ramadan? 
Note: 1st Ramadan was on June 18, 2015 */

let firstRamdan = new Date(2015, 6, 12);
let date = new Date(2015, 11, 30);
let miliseconds = date - firstRamdan;
let milisecondsConvertIntoDays = miliseconds / 8.64e+7;
alert(milisecondsConvertIntoDays + " days have passed since 1st Ramdan, 2015");

//Task 10
/*10. Write a program that displays in your browser the seconds that elapsed between the
reference date and the  beginning of 2015.  */

let referenceDate = new Date(2015, 11, 5, 22, 50, 16);
document.write("On Refernce Date: " + referenceDate);
let beginningDate = new Date(2015, 0, 1, 0, 0, 0);
let miliseconds = referenceDate - beginningDate;
let seconds = miliseconds / (60000);
let ceilSeconds = Math.ceil(seconds);
document.write("<br>" + ceilSeconds + " seconds had passed since beginning of 2015");

//Task 11
/*11.Create a Date object for the current date and time.Extract the hours, reset the date
object an hour ahead and finally display the date object in your browser. */

let currentDate = new Date();
let resetHour = new Date();
resetHour.setHours(2);
document.write("Current Date: " + resetHour);
document.write("<br>1 hour ago, it was: " + currentDate);

//Task 12
/*12. Write a program that creates a date object and show the date in an alert box that is
reset to 100 years back?  */

let currentDate = new Date();
let resetYears = new Date();
resetYears.setFullYear(1920);
alert("Current Date: " + currentDate + "\n100 years back, it was: " + resetYears);

//Task 13
/*13. Write a program to ask the user about his age. Calculate and show his birth year in
your browser. */

let age = +(prompt("Enter Your Age"));
let year = new Date();
let currentYear = year.getFullYear();
let birthYear = currentYear - age;
document.write('Your Age is: ' + age + "<br>Your Birth Year is: " + birthYear);

//Task 14
/*4. Write a program to generate your K-Electric bill in your browser.
All the amounts should be rounded off to 2 decimal places. Display the following fields: 
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) */

let name = prompt("Enter Your Name");
let firstCapital = name.slice(0, 1);
let otherLetters = name.slice(1);
var fullname = firstCapital.toUpperCase() + otherLetters;
let month = prompt("Enter Current Month Name");
let startLetter = month.slice(0, 1);
let othersAlphabate = month.slice(1);
var MonthName = startLetter.toUpperCase() + othersAlphabate;
let numberOfUnits = +(prompt("Enter Number Of Units"));
let ChargesPerUnit = 16;
let netAmountPayable = numberOfUnits * ChargesPerUnit;
let LatePaymentSurcharge = 350;
let GrossAmountPayable = netAmountPayable + LatePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>" + fullname + "</b><br>Month: <b>" + MonthName + "</b><br>Number of Units: <b>" + numberOfUnits + "</b><br>Charge Per Unit: <b>" + ChargesPerUnit + "</b>");
document.write("<br><br>Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>Late Payment Surcharge: <b>" + LatePaymentSurcharge + "</b>");
document.write("<br>Gross Amount Payable (after Due Date): <b>" + GrossAmountPayable + "</b>")

				//CHAPTER # 35 TO 38

//Task 1
/*1. Write a function that displays current date & time in your browser. */

let currentDate = new Date();
document.write(currentDate);

//Task 2
/*2. Write a function that takes first & last name and then it greets the user using his full name */

let first = prompt("Enter First Name");
let firstCapital = first.slice(0, 1);
let otherLetters = first.slice(1);
var firstName = firstCapital.toUpperCase() + otherLetters;
let last = prompt("Enter Last Name");
let firstAlphabate = last.slice(0, 1);
let othersAlphabate = last.slice(1);
var LastName = firstAlphabate.toUpperCase() + othersAlphabate;
let fullName = firstName.concat(" " + LastName);
alert("Good Moring " + fullName);

//Task 3
/*3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.*/

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));

function add(a, b) {
    return a + b;
}
document.write("The sum of two numbers: " + add(num1, num2));

//Task 4
/*4. Calculator:  
Write a function that takes three arguments num1, num2 & operator & compute the desired
operation. Return and show the desired result in your browser. */

function Calculator(a, b, c) {
    if (b == '+') {
        return a + c;
    } else if (b == '-') {
        return a - c;
    } else if (b == '*') {
        return a * c;
    } else if (b == '/') {
        return a / c;
    } else if (b == '%') {
        return a % c;
    }
}

let num1 = +(prompt("Enter First Number"));
let num2 = +(prompt("Enter Second Number"));
let operator = prompt("Select any operator\n+ - * / %");

let ans = Calculator(num1, operator, num2);
document.write("The answer is: " + ans);

//Task 5
//5. Write a function that squares its argument.

function squares(a) {
    return a * a;
}
let num = +(prompt("Enter any number to find its square"));
let square = squares(num);
document.write("The square of " + num + " is: " + square);

//Task 6
/*6. Write a function that computes factorial of a number */

function factorial(n) {

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);

}

let num = +(prompt("Enter any number to find its Factorial"));
let facNum = factorial(num);
document.write("The Factorial of " + num + " is: " + facNum);

//Task 7
/*7. Write a function that take start and end number as inputs & display counting in your browser. */

function counting(a, b) {
    for (var i = a; i <= b; i++) {
        document.write(i + "<br>");
    }
}
let StartNum = +(prompt("Enter Start Number"));
let EndNum = +(prompt("Enter End Number"));
counting(StartNum, EndNum);

//Task 8
/*8. Write a nested function that computes hypotenuse of a right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare()  */

function calculateHypotenuse(a, b) {
    function calculateSquare(a, b) {
        var PerpendicularSquare = a * a;
        var BaseSquare = b * b;
        var squareValues = PerpendicularSquare + BaseSquare;
        var sqrt = Math.sqrt(squareValues);
        return sqrt.toFixed(2);
    }
    return calculateSquare(a, b);
}

let base = +(prompt("Enter Base Value of Right Angle Triangle"));
let perpendicular = +(prompt("Enter Perpendicular Value of Right Angle Triangle"));
document.write("The value of Hypotenuse of a Right Angle Triangle " + calculateHypotenuse(perpendicular, base));

//Task 9
/*9. Write a function that calculates the area of a rectangle. 
A = width * height
Pass width and height in following manner: 
i. Arguments as value 
ii. Arguments as variables */

function CalculateArea(a, b) {
    return a * b
}
let height = 45;
document.write("The area of a rectangle is: " + CalculateArea(5, height));

//Task 10
/* 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as  forward, e.g., madam. */

function palindrome(str) {
    let a = str.split('');
    let b = a.reverse();
    let c = b.join('');
    if (str == c) {
        return alert('Yes it is palindrome word');
    } else {
        return alert("No it's not palindrome word");
    }
}
let word = prompt("Enter any word to check it is palindrome or not?");
palindrome(word);

//Task 11
/*11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of
the string in upper case.  
EXAMPLE STRING: 'the quick brown fox'  
EXPECTED OUTPUT :'The Quick Brown Fox */

function upperCase(str) {
    var array = str.split(' ');
    var Newarr = [];

    for (var i = 0; i < array.length; i++) {
        Newarr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    let upperValues = Newarr.join(' ');
    return alert(upperValues);
}
let sentence = prompt("Enter any sentence");
upperCase(sentence);

//Task 12
/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.  
EXAMPLE STRING: 'Web Development Tutorial'  
EXPECTED OUTPUT :'Development'  */

function LongeastWord(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for (var i = 0; i < array1.length; i++) {
        if (result.length <= array1[i].length) {
            result = array1[i].charAt(0).toUpperCase() + array1[i].slice(1);
        }
    }
    return result;
}
let sentence = prompt("Enter any sentence");
let long = LongeastWord(sentence);
alert("The longest Word is: " + long);

//Task 13
/*13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the
number of occurrences of the specified letter within the string.  
Sample arguments : 'JSResourceS.com', 'o' */

function count(a, b) {
    let countVariable = 0
    let lowerString = a.toLowerCase();
    for (var i = 0; i < lowerString.length; i++) {
        if (b == lowerString.charAt(i)) {
            countVariable += 1;
        }

    }
    return document.write('There are ' + countVariable + " occurrences of word " + b + "<br>Text: " + a);
}
let string = prompt("Enter any sentence");
let letter = prompt("Enter any letter to find in your sentence");
count(string, letter);

//Task 14
/*14. The Geometrizer 
Create 2 functions that calculate properties of a circle, using 
the definitions here. Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN". */

function calcCircum(r) {
    let circumferenceOfCircle = 2 * Math.PI * r;
    let twoDec = circumferenceOfCircle.toFixed(2)
    return document.write("The Circumference is: " + twoDec);
}

function calcArea(r) {
    let AreaOfCircle = Math.PI * r * r;
    let twoDec = AreaOfCircle.toFixed(2)
    return document.write("<br>The Area is: " + twoDec);
}

let radi = +(prompt("Enter Radi Value"));
calcCircum(radi);
calcArea(radi);

///***** Chapter 38 - 42 */

    /////task1

// function power( a, b)
// {
//       var p=1;
//       for(var i=1;i<=b;i++)
//             p*=a;
//       return p;
// }
//       let x = +(prompt("\n Enter the Value of 'x' : "));
      
//       let n = +(prompt("\n Enter the Value of 'n' : "));
      
//       p=power(x,n);

//       document.write("\n Power :  ",p);
      
    ///task - 2

// let year = +(prompt("\n Enter year : "));
// isLeapYear();

// function isLeapYear(year) { 
      
//     if ((year%4==0 || year%400==0) && (year%100!=0)) {
//         return document.write("It is leap year");
//     } 
//     else  {
//         return document.write("It is not leap year");
//     } 
// } 

    ///task - 3

// function findArea(a, b, c) 
// { 
//     // Length of sides must be positive and sum of any two sides 
//     // must be smaller than third side. 
//     if (a < 0 || b < 0 || c <0 || (a+b <= c) || 
//         a+c <=b || b+c <=a) 
//     { 
//         document.write("Not a valid trianglen"); 
//         exit(0); 
//     } 

//     let s = (a+b+c)/2; 
//     return sqrt(s*(s-a)*(s-b)*(s-c)); 
// } 

//     let a = +(prompt("\n Enter the Value of 'a' : "));
//     let b = +(prompt("\n Enter the Value of 'b' : "));
//     let c = +(prompt("\n Enter the Value of 'c' : "));
     
  
//     document.write("Area is %f", findArea(a, b, c)); 

    ///task - 6

// var string = prompt("Enter sentence");
// var vowel = ["a", "e", "i", "o", "u"];

// String.prototype.character = function name() {
//     var i;
//     for ( i = 0; i < vowel.length; i++) {
//         var secondLoop = string.length;
//         for ( j = 0; j < secondLoop; j++) {
//             if (vowel[i] == string.charAt(j)) {
//                 string = string.slice(0, j).concat(string.slice(j + 1, secondLoop));
//             }

//         }
//     }
// }

// string.character();
// document.write(string);

    ///task - 7

    // var string = prompt("Enter sentence");
    // function vowel_count(str1)
    // {
    //   var vowel_list = 'aeiouAEIOU';
    //   var vcount = 0;
      
    //   for(var x = 0; x < str1.length ; x++)
    //   {
    //     if (vowel_list.indexOf(str1[x]) !== -1)
    //     {
    //       vcount += 1;
    //     }
    //   }
    //   return vcount;
    // }
    // document.write(vowel_count(string));

    ///task - 9

    // let hours, count = 1, ot = 0;  
  
    // while(count <= 10)  
    // {  
    //     let hours = prompt("\nEnter no of hours employee has worked\n");  
    //     if(hours > 40)  
    //     {  
    //         ot = ot + (hours - 40);  
    //         document.write("Employee has worked hours\n", count, hours);  
    //         document.write("Overtime pay is Rs \n", (hours-40)*12);  
    //     }  
    //     else  
    //     {  
    //         document.write("no of hours worked is %d, which is less than 40 hours, so no over time pay for employee %d\n", hours, count);  
    //     }  
    //     count++;  
    // }  
  
    // document.write("\nTotal Overtime pay is Rs %d\n", (ot*12));
    

    ////task - 10

    // function currencyDenomination() {
    //     var cash = prompt("Enter cash (in hundreds): ");                              // You  can use prompt like this
    //     var hundred = parseInt(cash / 100);
    //     var fifty = parseInt((cash % 100) / 50);
    //     var ten = parseInt(((cash % 100) % 50) / 10);
    //     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');
    
    // }
    // currencyDenomination();
  
    
    //chapter 43 to 48
//task1
function alertdikha(){
    alert("task1 chapter 43 to 48")
}
//task2
function alertkhol(){
    alert("ye task 2 hy chap 43 to 48 ka")
}
//task3
// function changepic(){
//     document.getElementById("myImg").src = "data:image/jpeg;base64,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sQ21nEX5uugz4XlWnifJPNaqqJHanSyxxh23IANFhZBuz4DRyPfK6niMkrS1z9A1kEW9LmNkHMoMnxxlvFqauqZG5pYyeW8bNJu3zR6VtrE9iDoS5boJHulfSU7pHG5cYm3ce0lBmfgdI58cppoS+EBrHGNt4wNwGnog6CAgICAgICAgICAgICAgICCEEoCAgICAgICAgICAgICAgICAgICAgICAgICAgIIQSgICAgICAgICAgICAgICAgICAgICAgICAgICAghBKAgICAghBKAgIIQSgICAgICAgICAghBKAghBKAgICCEEoCAgICAgICAgICAgICAgICAgICAggoJQEEIJQEBBCCUBAQEBBCCUBBCAgIJQEBBCCUEIJQEEICCUBAQEBAQEEIJQEBAQEBBCCUEXQNSCNSBrQNaBqQNSBrQNaCQUEoIuglBCCUBAQEBAQQglAQEHl52QYuIgjiIJ4iBxEHkyIMbpDYlB54hvbuv4IIbIT1sSbcuqCGyE6f734b2QOMbXQew83t+KDyJr73PQcr8//iCdZHM9SPgg9sm70HvjDtQOMO1A4w7QgcYdqDNE64Qe0BAQEBBCAEEoCDy8XFkGAwjsQOCOxA4I7EDgjsQQYe5BjdGeiDzwz2dAN99vegaD8Tc99+aCGxkaefm9/Pe6AIza1ha1unz8UEiM3v3g2QGxkCwuL25Hsv8AqglsZtbpugyMiQZOGgcNA4aBw0GWMWQekBAQEBBCCUBAQEBBCBZBKCLII0oGhA0IGhA0IGkIGhA0oJAQSghBKCEEoCAgICAghBKAgICAgICAgICAgICAgICAgICAgICAgICAgICCCglAQEEICAglAQEBAQEEIJQEEIJQEBBCCUBAQEEICAgIP//Z";
// }
// function changePic2(){
//     document.getElementByID("myImg").src = "data:image/jpeg;base64,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";
// }

//task5

//     var c = document.getElementById("addd");
// function addc(){
//     p=0;
//     p = p++;
//     c.appendChild(p)
// }
// function decc(){
//     p=0;
//     p = p--;
//     c.appendChild(p)
// }




                                                                //chapter 49 to 52
                                                                    //Q1

// function addMessage(){
//     var name = document.getElementById("name");
//     var email = document.getElementById("email");
//     var p = document.createElement("p");
//     var textNode = document.createTextNode(name.value);
//     var textNode2 = document.createTextNode(email.value);
//     p.appendChild(textNode);
//     p.appendChild(textNode2);
//     var main = document.getElementById("main");
//     main.appendChild(p);

// }
                                                                        //Q2
// function readMore(){
//     var text = "the item is name is dell laptop .it was built in 2001. it has 4gb ram and 320gb hard drivLorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facere, necessitatibus quam nam quae,quo illum sapiente illo reprehenderit enim recusandae velit culpa quaerat impedit laudantium error iusto quis pariatur";

//     var para = document.getElementById('para');
//     para.innerHTML = text;
// }
                                                            //chapter 53 to 57
                                                                //Q1.

function showImage(e){
    var modalImage = document.getElementById("modalImage");
    modalImage.src = e.src;
}
                                                                    //chapter 58 to 67
                                                                        //Q1.

// var mcontent = document.getElementById("main-content");
// console.log(mcontent.childNodes);
// var render = document.getElementsByClassName("render");
// console.log(render);
// var firstname = document.getElementById("first-name");
// firstname.value="Muhib";
// var lastname = document.getElementById("last-name");
// lastname.value="Aslam";
// var email = document.getElementById("email");
// email.value="muhibaleem@gmail.com";

                                                                        //Q2.

// var formcontent = document.getElementById("form-content");
// console.log(formcontent.nodeType);
// var lastname = document.getElementById("last-name");
// console.log(lastname.nodeType);
// console.log(lastname.childNodes);

// var mcontent = document.getElementById("main-content");
// console.log(mcontent.firstChild);
// console.log(mcontent.lastChild);
// console.log(lastname.nextSibling);
// console.log(lastname.previousSibling);
// var email = document.getElementById("email");
// console.log(email.parentNode);
// console.log(email.nodeType);


