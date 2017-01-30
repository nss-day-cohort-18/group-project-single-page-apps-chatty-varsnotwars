// Create an HTML file that has two input fields to accept the two numbers to perform operations on.
// Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
// In your JavaScript, put an event listener on each of the buttons.
// When the user performs one of the operations, output the result to another DOM element of your choice.
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */



// In your JavaScript, put an event listener on each of the buttons.
// ex: header.addEventListener("mouseover", handleHeaderMouseOver);

var inputOne = document.getElementById("input1");
var inputTwo = document.getElementById("input2");

var outputArea = document.getElementById("outputArea");

var addingStuff = document.getElementById("addButton").addEventListener("click", addingNums);

var subtractingStuff = document.getElementById("subtractButton").addEventListener("click", subtractingNums);
var multiplyingStuff = document.getElementById("multiplyButton").addEventListener("click", multiplyingNums);
var dividingStuff = document.getElementById("divideButton").addEventListener("click", dividingNums);

var calculatingButton = document.getElementById("calculateButton").addEventListener("click", calculatingNums);

function addingNums (input1, input2) {
  console.log(input1 + input2);
  // var elementText = clickEvent.target.innerHTML;
  // outputEl.innerHTML = "You clicked on the " + elementText;
}


// When the user performs one of the operations, output the result to another DOM element of your choice.