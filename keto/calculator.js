/* variables For the Values */

var yourage = 0;
var yourweight = 0;
var yourheight = 0;
var fatPercentage = 0;
var activityLevelCheck = 0;
var genderValue = 0;
var Male = true;
var Unit = true;
var fats = 0;
var protiens = 0;
var carbsinGrams = 0;


/* variables For the Values */
$('#genderCheck input').on('change', function(e) {
	// console.log($(this).val())
	if ($(this).attr('id') === "Male") {
		Male = true;
		return genderValue = 5;
	} else {
		var Male = false;
		return genderValue = -161;
	}
});

$('#meterUnit input').on('change', function(e) {
	var unitType = $(this).val();
	if (unitType === 'metricSelected') {
		$('#yourweight').attr("placeholder", "write weight in Kg");
		$('#yourheight').attr("placeholder", "in cm");
		return Unit = false;
	} else {
		$('#yourweight').attr("placeholder", "write weight in lbs");
		$('#yourheight').attr("placeholder", "in Inches");
		return Unit = true;
	}
});

$('#yourweightValue input').on('change', function(e) {
	if (!Unit) {
		return yourweight = $(this).val() * 10;
	} else {
		return yourweight = (($(this).val()) / 2.205) * 10;
		
	}
})
$('#activityLevelCheck input').on('change', function(e) {
	return activityLevelCheck = $(this).val()
})
$('#yourageCheck input').on('change', function(e) {
	return yourage = $(this).val() * 5;
})
$('#yourheights input').on('change', function(e) {
	if (!Unit) {
		return yourheight = $(this).val() * 6.25;
	} else {
		return yourheight = (($(this).val()) * 2.54) * 6.25;
	}
})
$('#fatPercentages input').on('change', function(e) {
	return fatPercentage = ($(this).val()) / 100;
})

$('#carbsinGrams').on('change', function(e) {
	return carbsinGrams = ($(this).val());
});












$('#calculateresult').click( function(e) {
	console.clear();
	var leanMass = yourweight * (1 - (fatPercentage));
	var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
	var totalCalories =   activityLevelCheck * BMR;
	var protiens = (totalCalories * 0.2) * ( 1 - fatPercentage);
	var caloriesFromCarbs = 4 * carbsinGrams;
	var caloriesFromFats = totalCalories - protiens - caloriesFromCarbs;
	var caloriesFromFatsInGrams = caloriesFromFats / 9;
	var caloriesFromProtiensInGrams = (protiens / 4)	;
	var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
	var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
	var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
	var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
	var bmr_round =  BMR.toFixed(0);
	// var carbsinGrams_round =  carbsinGrams.toFixed(0);
	var protiens_round =  protiens.toFixed(0);
	var FromCarbs =  caloriesFromCarbs.toFixed(0);
	var totalCalories_round =  totalCalories.toFixed(0);
	var FromFats =  caloriesFromFats.toFixed(0);
	var FatsInGrams =  caloriesFromFatsInGrams.toFixed(0);
	var PerKgOfLeanMass =  caloriesFromProtiensInGramsPerKgOfLeanMass.toFixed(0);
	var FatInPercent =  caloriesFromFatInPercent.toFixed(2);
	var ProtiensInPercent =  caloriesFromProtiensInPercent.toFixed(2);
	var CarbsInPercent =  caloriesFromCarbsInPercent.toFixed(2);



	console.log(Unit);

	$('.bmr').text(bmr_round + ' cal');
	$('.gcarbs').text(carbsinGrams + ' grams');
	$('.kprotein').text(protiens_round + ' cal');
	$('.kcarbs').text(FromCarbs + ' cal');
	// $('.').text(Male);
	// $('.').text(Male);
	// $('.').text(yourage);
	// $('.').text(yourweight);
	// $('.').text(yourheight);
	// $('.').text(fatPercentage);
	// $('.').text(activityLevelCheck);
	// $('.').text(leanMass);
	// $('.').text(genderValue);
	$('.consume').text(totalCalories_round + ' cal');
	
	$('.kfat').text(FromFats + ' cal');
	$('.gfat').text(FatsInGrams + ' grams');
	// $('.').text(caloriesFromProtiensInGrams);
	$('.gprotein').text(PerKgOfLeanMass + ' grams');
	$('.percentfat').text(FatInPercent + ' %');
	$('.percentprotein').text(ProtiensInPercent + ' %');
	$('.percentcarbs').text(CarbsInPercent + ' %');
})