$('.sliders-images').slick({
  infinite: true,
  dots: true,
  /*autoplay: true,*/
  /*speed: 500,
  autoplaySpeed: 2000,*/
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: false,
      }
    }
  ]
});

$('.sl-border').slick({
	infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  centerMode: true,
  centerPadding: '130px',
  focusOnSelect: true,
  asNavFor: '.sl-sliders',
});

$('.sl-sliders').slick({
  infinite: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  asNavFor: '.sl-border',
  appendArrows: '.arrow',
  nextArrow: '<div class="slick-arrow prev-arrows"></div>',
  prevArrow: '<div class="slick-arrow next-arrows"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipe: true,
        fade: false,
      }
    }
  ]
});

$('.sl-content').slick({
  arrows: false,
 	asNavFor: '.sl-slider',
});

$('.sl-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  focusOnSelect: true,
  nextArrow: '<div class="slick-arrow arrow-next"></div>',
  prevArrow: '<div class="slick-arrow arrow-prev"></div>',
  asNavFor: '.sl-content',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 700,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-creating-a-business').slick({
	dots: true,
	arrows: false,
});

$(document).ready(function() {
  $('select').niceSelect();
});

//BUR
  //nav
    $(function(){
      $('.burger').on('click', function(){
        $('#nav').slideToggle(300, function(){
          if($(this).css('display') === 'none'){
            $(this).removeAttr('style');
          };
        });
      });
    });
  //nav end

  //submenu
    $('#nav li.menu-item-has-children a').click( function(event){
      if ($('#nav li ul').css('display') == 'none'){
        $('#nav li ul').css('display', 'block').animate({opacity: 1}, 400);
        $('.menu-item-has-children > a > span').css('display', 'block').animate({opacity: 1}, 400);
      }
      else
      if ($('#nav li ul').css('display') == 'block'){
        $('#nav li ul').animate({opacity: 0}, 400, function(){
          $(this).css('display', 'none');
        });
        $('.menu-item-has-children > a > span').animate({opacity: 0}, 400, function(){
          $(this).css('display', 'none');
        });
      }
    });
  //submenu end
//BUR and