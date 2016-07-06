define(['jquery', 'slick', 'bootstrap'], function(){

  $.fn.ravno = function () {
    var maxH = -1;
    var $cols = $(this).height("auto").each(function () {
      var h = $(this).height();
      maxH = (h > maxH) ? h : maxH;
    });
    $cols.height(maxH);
  };

  $('.ravno').ravno();

  /* Navigator slide munus */
  function ToggleSlide(e){

    $('.slider').slick('slickPause');

    if ( $(e.target).attr('data-toggle') === "menu" ) {
      $(e.target).find('.navigator__title').addClass('navigator__title--closed');
      $(e.target).find('.navigator__slide-block').slideDown();
    } else if ( $(e.target).attr('data-toggle') === "slider" ||  $(e.target).parent().attr('data-toggle') === "slider") {
      e.preventDefault();
      var $sliderButtons = $('.slick-dots').find('button');
      var targetNum = $(e.target).attr('data-num');
      $sliderButtons[targetNum].click();
    } else if ( $(e.target).attr('data-toggle') === "production" ){
      var $current
    }
  };
  $('#navigator-wrap').on('click', '.navigator', ToggleSlide);

  /*SLIDER*/
  var slider = $('.slider').slick({
    autoplay: true,
    dots: true
  });
  slider.on('afterChange', function(event, slick, currentSlide, nextSlide){

    //console.log($navigator[currentSlide])
    var navigators = $('#navigator-wrap').find('.navigator');
    $(navigators).removeClass('active');
    $(navigators[currentSlide]).addClass('active');
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



