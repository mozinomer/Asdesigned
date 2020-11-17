$(document).ready(function() {
$('.testimoina').slick({
	slidesToShow: 1,
	arrows: false,
	dots: true
});
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
$('.hamburger').click( function(e) {
	$(this).toggleClass('active');
	$('#mobilemenu').toggleClass('active');
});
$('.has-children a').click( function(e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.subMenuContainer').toggleClass('active');
})
});	
