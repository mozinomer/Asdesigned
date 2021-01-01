$('.sliderProductgallery').slick({
	slidesToShow: 3,
	arrows: false,
	dots: false,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		}
	},
    ]
})
$('.menuMobileContainer').click( function(e) {
	$('.mainMenu').slideToggle();
})