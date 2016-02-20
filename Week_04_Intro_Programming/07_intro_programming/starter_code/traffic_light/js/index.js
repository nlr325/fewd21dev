$( document ).ready(function() {
	$('#stopButton').click(illuminateRed);
		function illuminateRed() {
		clearLights();
		$('#stopLight').css("background-color","red");}

	$('#slowButton').click(illuminateYellow);
		function illuminateYellow() {
		clearLights();
		$('#slowLight').css("background-color","yellow");}

	$('#goButton').click(illuminateGreen);
		function illuminateGreen() {
		clearLights();
		$('#goLight').css("background-color","green");}
	

	function clearLights() {
		$('#goLight').css("background-color","black");
		$('#slowLight').css("background-color","black");
		$('#stopLight').css("background-color","black");
	}

    //console.log( "ready!" );
});




// //red lights//
// document.getElementById('stopButton').onclick = illuminateRed;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// //green lights//
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// //yellow lights//
// document.getElementById('slowButton').onclick = illuminateYellow;

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// //clearlights//

// function clearLights() {
//   document.getElementById('goLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('stopLight').style.backgroundColor = "black";
// }

