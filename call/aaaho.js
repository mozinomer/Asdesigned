$('.sliderContainerMainBanenr').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
});
$('.sliderTestimonials').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
});

$('.sliderFor').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.sliderContentContainerQuantum'
});
$('.sliderContentContainerQuantum').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.sliderFor',
	dots: true,
	centerMode: true,
	focusOnSelect: true
});
