jQuery( document ).ready(function() {
   jQuery('#greyButton').click(switchToGrey);
   jQuery('#whiteButton').click(switchToWhite);

 	function switchToGrey() {
 	  jQuery('body').css("background-color", "grey");
 	}

 	function switchToWhite() {
 	  jQuery('body').css("background-color", "white");
 	}

   // console.log( "ready!" );
});




// //click on white button set colors white
// document.getElementById("whiteButton").onclick = switchToWhite;

// //on click grey button set colors grey
// document.getElementById("greyButton").onclick = switchToGrey;

// //function to make colors white
// function switchToWhite() {
// 		//change background
// 		document.body.style.backgroundColor = "white";
// 		//change text colors
// 		document.body.style.color = "black";
// }

// //function to make colors grey
// function switchToGrey() {
// 		// change background
// 		document.body.style.backgroundColor = "grey";
// 		// change text colors
// 		document.body.style.color = "black";
// }