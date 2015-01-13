// Milla Theme site's scripts, by @mabrasil 

(function($){
   	
   	// Preloader 	 
   	$(window).load(function() { 
       	$('#loading').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
    }); 

	$(document).ready(function() {
		
		// Open window window on click
		$('.editors a').on('click', function(e) {
			var mainInner = $('.overlay'),
				window = $('#' + $(this).attr('data-window'));
					
			mainInner.animate({opacity: 0}, 400, function(){
				$('html,body').scrollTop(0);
				window.addClass('active').fadeIn(400);
			});
			e.preventDefault();

			$('.window-close').on('click', function(e) {
				window.removeClass('active').fadeOut(400, function(){
					mainInner.animate({opacity: 1}, 400);
				});
				e.preventDefault();
			});
		});

		// Tooltips
		$('.editors a, .share a').tooltip();
	
		$('.editors a, .share a').on('click', function () {
			$(this).tooltip('hide')
		});
			
	});
})(jQuery);
