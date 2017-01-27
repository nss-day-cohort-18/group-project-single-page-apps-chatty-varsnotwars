  
var inputOne = document.getElementById("inputOne");//variables for the inputs where the numbers go.
var inputTwo = document.getElementById("inputTwo");
var output = document.getElementById("output-target"); 

multiply.addEventListener("click", multiplyStuff);//placed the event listeners in variables so I can use them 
divide.addEventListener("click", divideStuff);// in a function. That might be a crappy idea but whatever.
subtract.addEventListener("click", subtractStuff);
add.addEventListener("click", addStuff);

function addStuff() {
	var a = Number(inputOne.value);
	var b = Number(inputTwo.value);
	var addSum = a + b;
	output.innerHTML = addSum;
};									//functions to control the basic operations

function subtractStuff() {
	var c = Number(inputOne.value);
	var d = Number(inputTwo.value);
	var subSum = c - d;
	output.innerHTML = subSum;
};

function multiplyStuff() {
	var e = Number(inputOne.value);
	var f = Number(inputTwo.value);
	console.log("do i work");
	var mulSum = (e * f);
	output.innerHTML = mulSum;		//functions to control the basic operations
};

function divideStuff() {
	var g = Number(inputOne.value);
	var h = Number(inputTwo.value);
	var divSum = (g / h);
	output.innerHTML = divSum;
};
//this is

// function addition(num1, num2) {
// 	console.log(num1 + num2)
// 	return num1 + num2;
// }

// function subtract(a, b,) {
// 	console.log(num)
// 	return a - b;

// }

// function stuff(x, y, doMath) {
// 	doMath(x, y);
// }

// var pointlessStuff = stuff(4, 5, addition)
// console.log(pointlessStuff);
// console.log("am i working?");