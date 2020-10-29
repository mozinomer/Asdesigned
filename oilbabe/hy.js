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




