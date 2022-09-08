//template literals = delimited with (`) instead of double string
//allows embedded variables and expression

//online give card example
//UNCOMMENT THE VARIABLE

//let userName = "MyName";
//cards
//let items = 3;
//price
//let total = 75;

/* USUAL WAY
console.log("hello", userName);
console.log("you have", items, "give card");
console.log("your total is $", total);
*/

//with template literal, use backtick (`) and  ${embed variable}
//UNCOMMENT THESE CODE BELOW
/*
let userName = "myName";
let items = 3;
let total = 75;
console.log(`hello ${userName}`);
console.log(`you have ${items} givecard`);
console.log(`the total is $${total}`);
*/

//what if we want to describe very long string?
//put all of the strings and variables as a variable value, begin and end with backtick
let userName = "myName";
let items = 3;
let total = 75;
let text = ` hello ${userName}<br>
  you have ${items} givecard
  the total is $${total}<br> `;
//console.log(text);

//instead we will display it to html page
document.getElementById("myLabel").innerHTML = text;
