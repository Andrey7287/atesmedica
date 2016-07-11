define(['jquery', 'slick', 'bootstrap', 'slimscroll'], function(){

  $.fn.ravno = function () {
    var maxH = -1;
    var $cols = $(this).height("auto").each(function () {
      var h = $(this).height();
      maxH = (h > maxH) ? h : maxH;
    });
    $cols.height(maxH);
  };

  $('.ravno').ravno();

  /* SLIMSCROLL */
  $('#scroll').slimscroll({
    railVisible: true,
    alwaysVisible: true,

  });
  /* GET text-block titles positions */

  var $titles = $('#scroll').find('h2');

  function scrollText(num) {
    var position = $titles[num].offsetTop;
    $('#scroll').slimscroll({scrollTo: position + 'px'});
  };


  /* SLIDER */
  var slider = $('.slider').slick({
    autoplay: false,
    dots: true
  });
  slider.on('afterChange', function(event, slick, currentSlide, nextSlide){

    var navigators = $('#navigator-wrap').find('.navigator');
    $(navigators).removeClass('active');
    $(navigators[currentSlide]).addClass('active');
    scrollText(currentSlide);
  });

  /* SLIDER with production */
  var sliderProduct = $('.slider-production').slick({
    autoplay: false,
    arrows: false,
    draggable: false
  });

  /* Navigator & slide munus & Dropdown nav behavior */

  var $sliderItems =$('.slider').find('slider__item');
  var $slideBlocks = $('#navigator-wrap').find('.navigator__slide-block');
  var $navigatorTitles = $('#navigator-wrap').find('.navigator__title');
  var $sliders = $('.slider').add('.slider-production');

  function togleActiveSlider(target){
      if ( target === 'slider' ) {
        $($sliders[1]).removeClass('slider--active');
        $($sliders[0]).addClass('slider--active');
      } else if ( target === "production" ) {
        $($sliders[0]).removeClass('slider--active');
        $($sliders[1]).addClass('slider--active');
      }
  };

  function changeSlide(target){
    var targetNum = $(target).attr('data-num');
    $('.slider').slick('slickGoTo', targetNum);
    scrollText (targetNum);
  };
  function openProduction(target){
    var targetNum = $(target).attr('data-production');
    $('.slider-production').slick('slickGoTo', targetNum);
  };

  function openProduction(target){
    var targetNum = $(target).attr('data-product');
    $('.slider-production').slick('slickGoTo', targetNum);
  };

  function closeMenu(){
    $slideBlocks.slideUp();
    $navigatorTitles.removeClass('navigator__title--closed');
  };

  function Toggle(e){

    $('.slider').slick('slickPause');
    var target = $(e.target).attr('data-toggle');

    if ( target === "menu" ) { // navigator empty space

      closeMenu();
      $(e.target).find('.navigator__title').addClass('navigator__title--closed');
      $(e.target).find('.navigator__slide-block').slideDown();

    } else if ( target === "slider" ||  $(e.target).parent().attr('data-toggle') === "slider") { // navigator title or dropdown navigation title

      target === "slider"
      e.preventDefault();
      closeMenu();
      changeSlide(e.target);
      togleActiveSlider(target);

    } else if( target === "production" ){ //link in slide menu or dropdown navigation menu

      e.preventDefault();
      changeSlide(e.target);
      openProduction(e.target);
      togleActiveSlider(target);
    }
  };

  $('#navigator-wrap').on('click', '.navigator', Toggle);
  $('.slider-menu-container').on('click', '.slider-menu__link', Toggle);



  /*var $arrows = $('.slick-prev').add('.slick-next');
  $('.slick-list').hover(function(){
    $arrows.css('opacity', '1');
  },
  function(){
    $arrows.css('opacity', '1');
  });*/

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



