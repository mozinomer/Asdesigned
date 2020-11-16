$('.bannerHOmeContainer').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
      }
    },
  ]
})
$('.containerSLiderProduct').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	 responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: false,
      }
    },
  ]
})