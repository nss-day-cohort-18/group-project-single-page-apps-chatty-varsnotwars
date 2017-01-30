var breadChoices = (function() {

	var prices = {
		"white": 1.00,
		"wheat": 1.00,
		"baguette": 1.00,
		"hoagie": 1.00,
		"bagel": 1.00,
		"croissant": 1.00,
	};

	var breads = ["white", "wheat", "baguette", "hoagie", "bagel", "croissant"];

	return {
		getBreadPrice: function(breadType){
			return prices[breadType];
		},
		getBreadName: function(breadName){
			return prices[breadName];
		},
		addTopping: function(toppingPrice) {
     	totalPrice += toppingPrice;
    	}
	};

	// Augment the original object with another method
	maker.addMeat = function() {
	  return ???;
	};

  // Return the new, augmented object with the new method on it
  	return maker;

})();

// breadChoices.getBreadPrice("white") returns 1.00

// prices is an object with key/value pairs
// what is being returned is an object, and that object has two items in it
