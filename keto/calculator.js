/* variables For the Values */

var yourage = 0;
var yourweight = 0;
var yourheight = 0;
var fatPercentage = 0;
var activityLevelCheck = 0;
var Male = true;
var Unit = true;


/* variables For the Values */
$('#genderCheck input').on('change', function(e) {
	// console.log($(this).val())
	if ($(this).attr('id') === "Male") {
		return Male = true;
	} else {
		return Male = false;
	}
})
$('#yourweightValue input').on('change', function(e) {
	return yourweight = $(this).val() * 10;
	// console.log('your weight ' + yourweight);
})
$('#activityLevelCheck input').on('change', function(e) {
	return activityLevelCheck = $(this).val()
	// console.log('activity Level ' + activityLevelCheck);
})
$('#yourageCheck input').on('change', function(e) {
	return yourage = $(this).val() * 5;
	// console.log('yourageCheck Level ' + yourage);
})
$('#yourheights input').on('change', function(e) {
	return yourheight = $(this).val() * 6.25;
	// console.log('yourheight Level ' + yourheight);
})
$('#fatPercentages input').on('change', function(e) {
	return fatPercentage = $(this).val();
	// console.log('fatPercentages Level ' + fatPercentages);
})
$('#meterUnit input').on('change', function(e) {
	var unitType = $(this).val();
	if (unitType === 'metricSelected') {
		$('#yourweight').attr("placeholder", "write weight in Kg");
		return Unit = false;
	} else {
		$('#yourweight').attr("placeholder", "write weight in lbs");
		return Unit = true;
	}
});
$('#calculateresult').click( function(e) {
	console.clear();
	var leanMass = yourweight * (1 - (fatPercentage));
	console.log('is Male = ' + Male);
	console.log('is Unit Lbs = ' + Male);
	console.log('yourage = ' + yourage);
	console.log('yourweight = ' + yourweight);
	console.log('yourheight = ' + yourheight);
	console.log('fatPercentage = ' + fatPercentage);
	console.log('activityLevelCheck = ' + activityLevelCheck);
	console.log('leanMass = ' + leanMass);
})