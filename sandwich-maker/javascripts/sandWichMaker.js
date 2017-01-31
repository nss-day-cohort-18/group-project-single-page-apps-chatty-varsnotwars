"use strict";
 
var sandwichMaker = (function(originalSandwich){
  var totalPrice = 0;
   return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
      console.log("The total price is now: " + totalPrice);
    },
    subtractTopping: function(event) {
      totalPrice -= event;
      console.log("The total price is now: " + totalPrice);
    },
    finalPrice: function(end) {
      var end = totalPrice;
      return end;
  }

};
   return originalSandwich;
})(sandwichMaker || {});






  // originalSandwich.addTopping = function(event) {
  //   console.log("am i here");
  //   return newPrice;
  // },
  // return {
  //   subtractTopping: function(minus) {
  //     totalPrice -= minus;
  //     console.log("The total price is now: " + totalPrice);









