var total = 0;

function add5() {
	total = total + 5;
	console.log(total);
	$('#result').html(total);
}

function add10() {
	total = total + 10;
	console.log(total);
	$('#result').html(total);
}

function sub1() {
	total = total - 1;
	console.log(total);
	$('#result').html(total);
    }

 function zero() {
 	total = 0;
 	console.log(total);
	$('#result').html(total);
 }


$( document ).ready(function() {
    $('#add5').click(add5);
    $('#add10').click(add10);
    $('#sub1').click(sub1);
    $('#zero').click(zero);
});