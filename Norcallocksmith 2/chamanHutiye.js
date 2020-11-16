$('.sliderContainer').slick({
	slidesToShow: 1,
	arrows: false,
	dots: false
})
$('.sliderCOntainerwhatwedo').slick({
	slidesToShow: 3,
	arrows: false,
	dots: false,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        centerMode: false,
          infinite: false,

      }
    }
  ]
})
$('.teamslider').slick({
	slidesToShow: 4,
	arrows: false,
	dots: false,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        centerMode: false,
          infinite: false,

      }
    }
  ]
})
$('.sliderCOntainertestimonials').slick({
	slidesToShow: 4,
	arrows: true,
	slidesToScroll: 3,
	dots: false,
	responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1,
        centerMode: false,
          infinite: false,

      }
    }
  ]
})

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll > 80) {
        $("header").addClass('scrolled');
    } else {
        $("header").removeClass('scrolled');
    }
});

if( $(window).width() < 767 ) {
	$('div.menucontainer h6').click( function(e) {
		$(this).parent().find('ul').slideToggle();
		$(this).toggleClass('active');
		$(this).parent().siblings().children().next().slideUp();
		$(this).parent().siblings().find('h6').removeClass('active');
		return false;
	});
	$('.hamburger').click( function(e) {
		$(this).toggleClass('active');
		$('body').toggleClass('active');
		$('#scrolledmenu').toggleClass('active');
	})
}





























