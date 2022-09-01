/*function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

// Pick a string. Your string can have any number of characters.
var my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
var ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}*/

/*let price = 15;
let money = 10;
if (price <= money) {
  console.log("buy the stuff");
} else {
  console.log("don't buy the stuff");
}*/



//Loopy assignment
/*
for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0 && i % 3 === 0) {
    console.log("LoopyLighthouse");
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else if (i % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}
*/


//for...of practice
/*
const amounts = [61.00, 52.25, 112.99, 5.00];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
*/

/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);

*/

/*
let favoriteMovie = function(movieName) {
  console.log("My favorite movie is " + movieName);
}

function movies(messageFunction, name) {
  messageFunction(name);
}

movies(favoriteMovie, "finding nimo");
*/

// function expressions that pass a function into another function inline

/*
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nimo");
*/


// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound += "ha" ;  
  }
  sound += "!"; 
  return sound; 
});