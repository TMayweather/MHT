




function bmiCalc() {
// Get user info
  var weight = parseInt(document.getElementById("bmiWeight").value);
  var heightft = parseInt(document.getElementById("bmiHeightft").value);
  var heightin = parseInt(document.getElementById("bmiHeightin").value);
// Calculate user info
var heightTotal = heightft * 12 + +heightin;
var bmi = ((weight / Math.pow(heightTotal, 2)) * 703).toFixed(1);
document.getElementById("bmiResults").textContent = ("Your BMI is " + bmi);
var bmiResults = Math.round(bmi);
      if (bmiResults < 19) {
    document.getElementById("chartInfo").textContent = ("You are in the 'Underweight' range");
      }
      else if (bmiResults < 25) {
        document.getElementById("chartInfo").textContent = ("You are in the 'Normal' range");
      }
      else if (bmiResults < 30) {
        document.getElementById("chartInfo").textContent = ("You are in the 'Overweight' range");
      }
      else if (bmiResults < 40) {
        document.getElementById("chartInfo").textContent = ("You are in the 'Obese' range");
      }
      else if (bmiResults < 100) {
      document.getElementById("chartInfo").textContent = ("You are in the 'Extreme Obesity' range");
    }
      else {
        document.getElementById("chartInfo").textContent = ("Please check your height and weight and try again");
      }
}
//Calulate BMI on click
document.getElementById('bmiCalc').addEventListener("click", bmiCalc);



function bmrCalc() {
  // Get user info
    var age = parseInt(document.getElementById("bmrAge").value);
    var weight = parseInt(document.getElementById("bmrWeight").value);
    var heightft = parseInt(document.getElementById("bmrHeightft").value);
    var heightin = parseInt(document.getElementById("bmrHeightin").value);
// Calculate user info
if (document.getElementById('male').checked) {
  var heightTotal = heightft * 12 + +heightin;
  var bmrMale = 66 + (6.23 * weight) + (12.7 * heightTotal) - (6.8 * age).toFixed(1);
  document.getElementById("bmrResults").textContent = bmrMale;
 } else if (document.getElementById('female').checked) {
  var heightTotal = heightft * 12 + +heightin;
  var bmrFemale = 655 + (4.35 * weight) + (4.7 * heightTotal) - (4.7 * age).toFixed(1);
  document.getElementById("bmrResults").textContent = bmrFemale;
    }
}
//Calulate BMR on click
document.getElementById('bmrCalc1').addEventListener("click", bmrCalc);


function inches(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 11) input.value = 11;
  }

function limitThree(element) {
    var maxChar = 3;
    if(element.value.length > maxChar) {
    element.value = element.value.substr(0, maxChar);
    }
}

function limitTwo(element) {
    var maxChar = 2;
    if(element.value.length > maxChar) {
    element.value = element.value.substr(0, maxChar);
    }
}

function limitOne(element){
    var maxChar = 1;
    if(element.value.length > maxChar) {
    element.value = element.value.substr(0, maxChar);
    }
}


//var protein = ['Chicken', 'Turkey' , 'Fish' , 'Beef'];

//var carb = ['Brown Rice', 'Wild Rice' 'Quinoa' , 'Baked Potato' , 'Sweet Potato'];

//var vegetable = ['Green Beans' , 'Broccoli' , 'Carrots' , 'Spinach' , 'Kale' , 'Cauliflower', 'Sweet Peas' , 'Corn' , 'Zucchini', 'Cabbage', 'Squash'];
