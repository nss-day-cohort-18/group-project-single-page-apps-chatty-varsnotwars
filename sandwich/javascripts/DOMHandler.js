"use strict";

console.log("hi dara");
console.log(SandwichMaker);

document.getElementById("submitButton").addEventListener("click", function(){

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;


//put arrays here that ingredients will push into
var breadChecked = [];
var meatChecked = [];
var cheeseChecked = [];
var veggiesChecked = [];
var condimentsChecked = [];

var bread = document.getElementsByClassName("bread");
// console.log("bread", bread);
for (var i=0; i < bread.length; i++) {
	if (bread[i].checked === true) {
		breadChecked.push(bread[i].value)
	}
	var selectedBread = SandwichMaker.getBreadPrices(breadChecked) //augmenting original IIFE--then envoking function from bread page
};

var meat = document.getElementsByClassName("meat");
for (var i=0; i < meat.length; i++) {
	if (meat[i].checked === true) {
		meatChecked.push(meat[i].value)
	}
	var selectedMeat = SandwichMaker.getMeatPrices(meatChecked) //augmenting original IIFE--then envoking function from meat page
};

var cheese = document.getElementsByClassName("cheese");
for (var i=0; i < cheese.length; i++) {
	if (cheese[i].checked === true) {
		cheeseChecked.push(cheese[i].value)
	}
	var selectedCheese = SandwichMaker.getCheesePrices(cheeseChecked) //augmenting original IIFE--then envoking function from cheese page
};


var condiments = document.getElementsByClassName("condiments");
for (var i=0; i < condiments.length; i++) {
	if (condiments[i].checked === true) {
		condimentsChecked.push(condiments[i].value)
	}
	var selectedCondiments = SandwichMaker.getCondimentPrices(condimentsChecked) //augmenting original IIFE--then envoking function from condiments page
};

// document.getElementById("getPrice").addEventListener("click", function(){
var veggies = document.getElementsByClassName("veggies");
for (var i=0; i < veggies.length; i++) {
	if (veggies[i].checked === true) {
		veggiesChecked.push(veggies[i].value)
	}
	var selectedVeggies = SandwichMaker.getVeggiePrices(veggiesChecked) //augmenting original IIFE--then envoking function from veggies page
};


document.getElementById("totPriceOutput").innerHTML = `<h3>Your sandwich costs: $ ${(selectedBread + selectedMeat + selectedCheese + selectedCondiments + selectedVeggies).toFixed(2)}</h3>`;
// console.log("finalOutput", finalOutput)
});










