/* variables For the Values */
document.getElementById("myEmail").required = true;
var yourage = 0;
var yourweight = 0;
var yourheight = 0;
var fatPercentage = 0;
var activityLevelCheck = 0;
var genderValue = 0;
var Male = true;
var Unit;
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
		$('#yourweight').val("");
		$('#yourheight').val("");
		$('#yourheight').attr("placeholder", "in cm");
		return Unit = false;
	} else {
		$('#yourweight').attr("placeholder", "write weight in lbs");
		$('#yourheight').attr("placeholder", "in Inches");
		$('#yourheight').val("");
		$('#yourweight').val("");
		return Unit = true;
	}
});

$('#yourweightValue input').on('keyup change', function(e) {
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

	if 	(
			$("input[name='emailAdd']").val().length <= 0 
			&&  $("input[name='lastName']").val().length <= 0 
			&& $("input[name='firstName']").val().length <= 0 
			|| yourage <= 0
			|| yourweight <= 0
			|| yourheight <= 0
			|| fatPercentage <= 0
			|| activityLevelCheck <= 0
		) {
		alert("please Fill all the fields to see the result")
		$('#yourageCheck input, #yourweightValue input, #yourheights input, #fatPercentages input').val('');
		console.log(yourage);
		console.log(yourweight);
		console.log(yourheight);
		console.log(fatPercentage);
		console.log(activityLevelCheck);
	} else {
		$('.calculated-macros').slideDown();

		if ($("input[name='Goal']:checked").attr('id') === 'Goal1') {
			console.log('Goal 1');
			var leanMass = yourweight * (1 - (fatPercentage));
			var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
			var totalCalories =   (activityLevelCheck * BMR)  * 0.8;
			var protiens = ((totalCalories * 0.2) * ( 1 - fatPercentage)) * 0.8;
			var caloriesFromCarbs = 4 * carbsinGrams;
			var caloriesFromFats = (totalCalories - protiens - caloriesFromCarbs);
			var caloriesFromFatsInGrams = caloriesFromFats / 9;
			var caloriesFromProtiensInGrams = (protiens / 4)	;
			var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
			var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
			var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
			var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
		} else if ($("input[name='Goal']:checked").attr('id') === 'Goal2') {
			console.log('Goal 2');
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
		} else {
			console.log('Goal 3');
			var leanMass = yourweight * (1 - (fatPercentage));
			var BMR =   ( yourweight + yourheight + genderValue ) - yourage;
			var totalCalories =   (activityLevelCheck * BMR)  * 1.2;
			var protiens = ((totalCalories * 0.2) * ( 1 - fatPercentage)) * 1.2;
			var caloriesFromCarbs = 4 * carbsinGrams;
			var caloriesFromFats = (totalCalories - protiens - caloriesFromCarbs);
			var caloriesFromFatsInGrams = caloriesFromFats / 9;
			var caloriesFromProtiensInGrams = (protiens / 4)	;
			var caloriesFromProtiensInGramsPerKgOfLeanMass = caloriesFromProtiensInGrams / (leanMass * 0.1);
			var caloriesFromFatInPercent = (caloriesFromFats / totalCalories) * 100;
			var caloriesFromProtiensInPercent = (protiens / totalCalories) * 100;
			var caloriesFromCarbsInPercent = (caloriesFromCarbs / totalCalories) * 100;
		}

		console.log(Unit);

		console.log('BMR = ' + BMR);
		console.log('Carbs in Grams = ' + carbsinGrams);
		console.log('Calories from Protiens = ' + protiens);
		console.log('calories From Carbs = ' + caloriesFromCarbs);
		console.log('is Male = ' + Male);
		console.log('is Unit Lbs = ' + Male);
		console.log('yourage = ' + yourage);
		console.log('Your Weight = ' + yourweight);
		console.log('Your Height = ' + yourheight);
		console.log('fatPercentage = ' + fatPercentage);
		console.log('activityLevelCheck = ' + activityLevelCheck);
		console.log('leanMass = ' + leanMass);
		console.log('Gender Value = ' + genderValue);
		console.log('Total Calories = ' + totalCalories);
		console.log('Calories From Fats = ' + caloriesFromFats);
		console.log('Calories From Fats In Grams = ' + caloriesFromFatsInGrams);
		console.log('calories From Protiens In Grams = ' + caloriesFromProtiensInGrams);
		console.log('Calories From Protiens In Grams Per Kg Of Lean Mass = ' + caloriesFromProtiensInGramsPerKgOfLeanMass);
		console.log('calories From Fat In Percent = ' + caloriesFromFatInPercent);
		console.log('calories From Protiens In Percent = ' + caloriesFromProtiensInPercent);
		console.log('calories From Carbs In Percent = ' + caloriesFromCarbsInPercent);

		var bmr_round =  BMR.toFixed(0);
		var protiens_round =  protiens.toFixed(0);
		var FromCarbs =  caloriesFromCarbs.toFixed(0);
		var totalCalories_round =  totalCalories.toFixed(0);
		var FromFats =  caloriesFromFats.toFixed(0);
		var FatsInGrams =  caloriesFromFatsInGrams.toFixed(0);
		var PerKgOfLeanMass =  caloriesFromProtiensInGramsPerKgOfLeanMass.toFixed(0);
		var FatInPercent =  caloriesFromFatInPercent.toFixed(2);
		var ProtiensInPercent =  caloriesFromProtiensInPercent.toFixed(2);
		var CarbsInPercent =  caloriesFromCarbsInPercent.toFixed(2);


		$('.bmr').text(bmr_round + ' cal');
		$('.gcarbs').text(carbsinGrams + ' grams');
		$('.kprotein').text(protiens_round + ' cal');
		$('.kcarbs').text(FromCarbs + ' cal');
		$('.consume').text(totalCalories_round + ' cal');
		
		$('.kfat').text(FromFats + ' cal');
		$('.gfat').text(FatsInGrams + ' grams');
		$('.gprotein').text(PerKgOfLeanMass + ' grams');
		$('.percentfat').text(FatInPercent + ' %');
		$('.percentprotein').text(ProtiensInPercent + ' %');
		$('.percentcarbs').text(CarbsInPercent + ' %');
	}



})