/* variables For the Values */

var yourage = $("#yourage").val();
var yourweight = $("#yourweight").val();

/* variables For the Values */
$('#genderCheck input').on('change', function(e) {
	console.log($(this).val())
})
$('#meterUnit input').on('change', function(e) {
	var unitType = $(this).val();
	if (unitType === 'metricSelected') {
		$('#yourweight').attr("placeholder", "write weight in Kg");
	} else {
		$('#yourweight').attr("placeholder", "write weight in lbs");
	}
})