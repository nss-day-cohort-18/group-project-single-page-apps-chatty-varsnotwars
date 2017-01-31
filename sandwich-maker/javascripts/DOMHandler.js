
var meat = document.getElementById("meats");
var bread = document.getElementById("breads");
var veggie = document.getElementById("veggies");
var cheese = document.getElementById("cheeses");
var condiment = document.getElementById("condiments");
var totalCost = document.getElementById("price");
var meat = document.getElementById("meats");
var endPrice = document.getElementById("output-area");
var chosenToppings;
var priceButton = document.getElementById("price")

priceButton.addEventListener("click", function(event){
	console.log("do i work");
	end = sandwichMaker.endPrice;
	console.log("sandwichMaker.finalPrice", sandwichMaker.finalPrice);
	endPrice.innerHTML += end;	
})

veggie.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		chosenToppings = event.target.id;
		chosenToppingPrice = sandwichMaker.getVegCost(chosenToppings);
		var updatedPrice = sandwichMaker.addTopping(chosenToppingPrice);
		endPrice.innerHTML = updatedPrice;
	}
		
});

bread.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		chosenToppings = event.target.id;
		chosenToppingPrice = sandwichMaker.getBreadCost(chosenToppings);
		var updatedPrice = sandwichMaker.addTopping(chosenToppingPrice);
		endPrice.innerHTML = updatedPrice;

	}
});

meat.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		chosenToppings = event.target.id;
		chosenToppingPrice = sandwichMaker.getMeatCost(chosenToppings);
		var updatedPrice = sandwichMaker.addTopping(chosenToppingPrice);
		endPrice.innerHTML = updatedPrice;

	}
});

cheese.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		chosenToppings = event.target.id;
		chosenToppingPrice = sandwichMaker.getCheeseCost(chosenToppings);
		var updatedPrice = sandwichMaker.addTopping(chosenToppingPrice);
		endPrice.innerHTML = updatedPrice;

	}
});

condiment.addEventListener("change", function(event) {
	if (event.target.checked === true) {
		chosenToppings = event.target.id;
		chosenToppingPrice = sandwichMaker.getConCost(chosenToppings);
		var updatedPrice = sandwichMaker.addTopping(chosenToppingPrice);
		endPrice.innerHTML = updatedPrice;

	}
});

// price.addEventListener("click", event) {
// 		var theFinalCost = sandwichMaker.price();
// 		console.log("yoyo what up")
// }

// Variable to hold the final price. Default to 0.
// var finalSandwichPrice = 0;

// // Variable to hold topping that the user selects
// var selectedTopping;

// // Get a reference to the <select> element that has all the meat options
// var meatChooser = document.getElementById("meats");

 
//   A <select> element broadcasts a change event, so you listen for it
//   and get the value of the topping from your augmented IIFE

// meatChooser.addEventListener("change", function(event) {
//   // Get the value chosen from the DOM
//   selectedTopping = event.target.value;
// console.log("selectedTopping", selectedTopping)
//   // Determine the price of the topping chosen

//   // Add the topping to the SandwichMaker to increase the total price
// });

