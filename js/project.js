define(['jquery', 'slick', 'bootstrap'], function(){

	/*SLIDER*/
	var slider = $('.slider').slick({
		autoplay: false,
		dots: true
	});
	slider.on('afterChange', function(event, slick, currentSlide, nextSlide){

		//console.log(currentSlide)

	});

	/*menu*/
	
	var mq = window.matchMedia( "(min-width: 768px)" );
	if (mq.matches) {
		 
		$('#dropdown').hover(function(e){
			$(this).click();
		});
		
	}
	
	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
  $('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // ADD SLIDEUP ANIMATION TO DROPDOWN //
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
	
	
});



