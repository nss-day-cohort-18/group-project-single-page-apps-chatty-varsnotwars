"use strict";

// THIS IS THE PRIMARY/ORIGINAL IIFE:

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Instructions: "Return the public interface that other code can interact with"
  // This is adding the selected topping price to the total price and then displaying that in the console:
  return {
    addToppingPrice: function(toppingPrice) {
      console.log("toppingPrice", toppingPrice.toFixed(2))
      totalPrice += toppingPrice;
      console.log("totalPrice should be -->", totalPrice.toFixed(2));
      // finalMeatPrice from meat.js becomes toppingPrice (var toppingPrice = finalMeatPrice)
      // anything you pass in here now becomes toppingPrice (reusable code; makes your code DRY)
    },
    getTotalPrice: function() {
      document.getElementById("sandwichPrice").innerHTML = `Your sandwich cost is: $ ${(totalPrice.toFixed(2))}`;
    }
  };
})();