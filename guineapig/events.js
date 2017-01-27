// DONE: When any section is clicked the output target text should be "You clicked on the {text of the section} section"
// DONE: When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
// DONE: When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
// DONE: When you type characters into the input field, the output element should mirror the text in the input field.
// DONE: Change the "Leave me alone" text (id="guinea-pig"):
// -- When you click the "Add color" button, the guinea-pig element's text color should change to blue. 
// -- When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
// -- When you click the "Capture it" button, the guinea-pig element should have a border added to it.
// -- When you click the "Rounded" button, the guinea-pig element's border should become rounded.
// DONE: The first section's text should be bold.
// DONE: The last section's text should be bold and italicized.
// DONE: Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

var outputEl = document.getElementById("output-target");

document.addEventListener("click", function(event){
	if (event.target.tagName.toLowerCase() === "section") {
    outputEl.innerHTML = `You clicked on the "${event.target.innerHTML}" section.`;
    console.log("You clicked on a <section> element");
  	}	
});

var header = document.getElementById("page-header");

function h1MouseOver(event) {
  outputEl.innerHTML = "You moved your mouse over the header.";
}

function h1MouseOut(event) {
  outputEl.innerHTML = "You left me!!";
}

header.addEventListener("mouseover", h1MouseOver);
header.addEventListener("mouseout", h1MouseOut);

var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function(event){
  // console.log("event", event);
  outputEl.innerHTML = event.target.value;
});

var changeGuineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(colorEvent){
    changeGuineaPig.classList.toggle("blue");
	});

document.getElementById("make-large").addEventListener("click", function(largeEvent){
    changeGuineaPig.classList.toggle("large");
  });

document.getElementById("add-border").addEventListener("click", function(borderEvent){
    changeGuineaPig.classList.toggle("bordered");
  });

document.getElementById("add-rounding").addEventListener("click", function(roundingEvent){
    changeGuineaPig.classList.toggle("rounded");
  });

// *** POSSIBLY REFACTOR INTO MORE CONCISE IF STATEMENTS *** 

// document.getElementById("add-color").addEventListener("click", function(event){
// 	if (event.target.tagName.toLowerCase() === "section") {
//     outputEl.innerHTML = `You clicked on the "${event.target.innerHTML}" section.`;
//     console.log("You clicked on a <section> element");
//   	}
// });

