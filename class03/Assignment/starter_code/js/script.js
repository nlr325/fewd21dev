$( document ).ready(function() {
    console.log( "ready!" );


    // $('.read-more').click(function(){
    // 	// can't toggle this format
    // 	$('.more', this).hide();
    // 	$('.less', this).show();
    // });

    // can use a toggle attrib.
    $('.read-more').click(function() {
    	$('.more,.less').toggle();
    	$(this).prev('.toggle').slideToggle();
    });
});