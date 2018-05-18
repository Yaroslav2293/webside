$('.sliders-images').slick({
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 500,
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
  appendArrows: '.sl-sliders',
  nextArrow: '<div class="slick-arrow prev-arrows"></div>',
  prevArrow: '<div class="slick-arrow next-arrows"></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        swipe: true,
        fade: false,
        dots: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        dots: true,
      }
    },
    {
      breakpoint: 400,
      settings: {
        swipe: true,
        fade: false,
        dots: false,
      }
    },
  ]
});

$('.sl-content').slick({
  arrows: false,
 	asNavFor: '.sl-slider',
});

$('.sl-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  nextArrow: '<div class="slick-arrow arrow-next"></div>',
  prevArrow: '<div class="slick-arrow arrow-prev"></div>',
  asNavFor: '.sl-content',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 575,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});

$('.slider-creating-a-business').slick({
	dots: true,
	arrows: false,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(document).ready(function() {
  $('select').niceSelect();
});

//BUR
  //nav
    $(function(){
      $('#nav-buttons').on('click', function(){
        $(this).toggleClass('open');
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
        $('.menu-item-has-children > a > span:first-child').css('display', 'block').animate({opacity: 1}, 400);
        $('.menu-item-has-children > a').addClass('nav-active');
      }
      else
      if ($('#nav li ul').css('display') == 'block'){
        $('#nav li ul').animate({opacity: 0}, 400, function(){
          $(this).css('display', 'none');
        });
        $('.menu-item-has-children > a > span:first-child').animate({opacity: 0}, 400, function(){
          $(this).css('display', 'none');
        });
        $('.menu-item-has-children > a').removeClass('nav-active');
        $(this).removeAttr('style');
      }
    });
  //submenu end

  //popup
    $('a.popup-buttons').click( function(event){
      event.preventDefault();
      $('.overlay').fadeIn(400,function(){
          $('.overlay').addClass('active');
          $('body').addClass('menu-opened');
          $('#popup') 
            .css('display', 'block')
            .animate({opacity: 1}, 400);
      });
    });
      
    $('#popup-close, .overlay').click( function(){
      $('#popup').animate({opacity: 0}, 400,function(){
            $(this).css('display', 'none');
            $('.overlay').removeClass('active');
            $('body').removeClass('menu-opened');
      });
    });
  //pop-up end

  //Плавные якоря
  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  });
  //Плавные якоря end
//BUR and