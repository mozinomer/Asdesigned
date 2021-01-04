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
});
$('.menuMobileContainer').click( function(e) {
	$('.mainMenu').slideToggle();
});
$(document).ready(function(){
	$(".containerProductShopPage").slice(0, 3).show();
	$("#loadMore").on("click", function(e){
		e.preventDefault();
		$(".containerProductShopPage:hidden").slice(0, 3).slideDown();
		if($(".containerProductShopPage:hidden").length == 0) {
			$("#loadMore").text("No More Product Found").addClass("noContent");
		}
	});

})

if ($(window).width() < 767) {
	$('.listSections h6').click( function(e) {
		$(this).parent().find('ul').slideToggle();
		$(this).parent().siblings().children().next().slideUp();
		return false;
	});
}