// This SandwichMaker IIFE augments the original one
console.log("meat")


var SandwichMaker = (function(maker){

  // Private variable to store the different meat prices
  var meatPrice = {
  	ham: 2.00,
  	turkey: 2.00,
  	bacon: 2.50
  };

  // Augment the original object with another method
  maker.getMeatPrices = function(meat) {
  	var totalPrice = 0;
  	for(i=0; i < meat.length; i++) {
  		totalPrice += meatPrice[meat[i]];
  		console.log("meatPrice[meat[i]]", meatPrice[meat[i]])
    }
    console.log("totalPrice", totalPrice)
    return totalPrice;
  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});


