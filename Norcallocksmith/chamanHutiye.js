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
	})
}


















































// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    var element = document.getElementsByClassName("wki-box");
    element.classList.remove("active-box");
    if($id===$element){
        element.classList.add("active-box");
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({scrollTop: pos});
});







