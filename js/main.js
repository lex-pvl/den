$(document).ready(function() {
	
	$('.menu__basket-inner').on('click', function(){
		$('.menu__basket-popup').toggleClass('active');
	});

	$('#up').on('click', function(e){
		e.preventDefault();
		$('html,body').stop().animate({ scrollTop: 0 }, 2000);
	});

});