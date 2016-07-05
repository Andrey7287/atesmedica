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

    $('.dropdown').hover(function(){
      $(this).find('.dropdown-menu').stop().slideToggle();
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



  $('.dropdown-menu').add('.site-nav__item').hover(function(){

      if( $(this).children('.site-nav__link').length ) {
        $(this).children('.site-nav__link').toggleClass('hovered');
      } else {
        $(this).siblings('.site-nav__link').hover(function(){
          $(this).toggleClass('hovered');
        });
      }

    }
  );

});



