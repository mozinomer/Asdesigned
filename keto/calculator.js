/* variables For the Values */

var yourage = 0;
var yourweight = 0;
var yourheight = 0;
var fatPercentage = 0;
var activityLevelCheck = 0;
var leanMass = 

/* variables For the Values */
$('#genderCheck input').on('change', function(e) {
	// console.log($(this).val())
})
$('#yourweightValue input').on('change', function(e) {
	yourweight = $(this).val() * 10;
	console.log('your weight ' + yourweight);
})
$('#activityLevelCheck input').on('change', function(e) {
	activityLevelCheck = $(this).val()
	console.log('activity Level ' + activityLevelCheck);
})
$('#yourageCheck input').on('change', function(e) {
	yourage = $(this).val() * 5;
	console.log('yourageCheck Level ' + yourage);
})
$('#yourheights input').on('change', function(e) {
	yourheight = $(this).val() * 6.25;
	console.log('yourheight Level ' + yourheight);
})
$('#fatPercentages input').on('change', function(e) {
	fatPercentages = $(this).val();
	console.log('fatPercentages Level ' + fatPercentages);
})
$('#meterUnit input').on('change', function(e) {
	var unitType = $(this).val();
	if (unitType === 'metricSelected') {
		$('#yourweight').attr("placeholder", "write weight in Kg");
	} else {
		$('#yourweight').attr("placeholder", "write weight in lbs");
	}
})