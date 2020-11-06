$('.sliderproductSection').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
  ]
})
$('.sliderSection3').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
  ]
})
$('.slidetestimonials').slick({
	slidesToShow: 3,
	slidesToScroll: 2,
	dots: false,
	arrows: true,
 	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      }
    },
  ]
})
$('#bestSellerSliders').slick('unslick');
$('.hamburger').click( function(e) {
  $('.menuItems').slideToggle();
  $(this).toggleClass('active');
});
$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
});
$('.mainCarousal').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: false,
    asNavFor: '.forThumbnails'
});
$('.forThumbnails').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.mainCarousal',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});

$('.sliderINgrdients').slick({
    slidesToShow: 4,
    dots: false,
    arrows: false,
    responsive: [
         {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
    ]
})
    
$(document).ready(function() {
  setTimeout(function(){
    $('.loaderMain').fadeOut();
     $("html, body").animate({ scrollTop: 0 }, "slow");
  }, 3000);
  setTimeout(function(){
    $('.contentMainSite').fadeIn();
  }, 2000);
  
});

$('.slderBanner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
})


if( $(window).width() < 767 ) {
    $('.sliderMobileonly').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 2,
        dots: true,
        arrows: false

    })
}

















