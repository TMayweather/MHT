
// Imperial/Metric Toggle
$(document).ready(function () {
 $("input[name$='bmr']").change(function () {
   $('#bmr1').toggle();
   $('#bmr2').toggle();
   bmrHideI();
   bmrHideM();
 });
});



function bmiCalcI() {
// Get user info
  var weight = parseInt(document.getElementById("bmiWeight").value);
  var heightft = parseInt(document.getElementById("bmiHeightft").value);
  var heightin = parseInt(document.getElementById("bmiHeightin").value);
// Calculate user info
var heightTotal = heightft * 12 + +heightin;
 var bmi = ((weight / Math.pow(heightTotal, 2)) * 703).toFixed(1);
document.getElementById("bmiResults1").textContent = ("Your BMI is " + bmi);

      if (bmi < 19) {
    document.getElementById("chartInfo1").textContent = ("You are in the 'Underweight' range");
      }
      else if (bmi< 25) {
        document.getElementById("chartInfo1").textContent = ("You are in the 'Normal' range");
      }
      else if (bmi< 30) {
        document.getElementById("chartInfo1").textContent = ("You are in the 'Overweight' range");
      }
      else if (bmi< 40) {
        document.getElementById("chartInfo1").textContent = ("You are in the 'Obese' range");
      }
      else if (bmi < 54) {
      document.getElementById("chartInfo1").textContent = ("You are in the 'Extreme Obesity' range");
    }
      else {
        document.getElementById("chartInfo1").textContent = ("Please check your height and weight and try again");
      }
}

// show/hide imperial BMI
function bmiShowI() {
   document.getElementById('bmiHide1').style.display = "block";
   }

function bmiHideI() {
      document.getElementById('bmiHide1').style.display = "none";
    }


//Calulate imperial BMI and show results or errors onclick
$(document).ready(function(){
  var inputWeight = $("input[id='bmiWeight']");
  var inputHeight = $("input[id='bmiHeightft']");
  var inputHeightIn = $("input[id='bmiHeightin']");
    $('#bmiCalcI').click(function(){
      if (inputWeight.val() == "" || inputHeight.val() =="" || inputHeightIn.val() =="") {
        inputWeight.addClass('inputError');
        inputHeight.addClass('inputError');
        inputHeightIn.addClass('inputError');
        $('.error').show();
      }
      else {
       bmiCalcI();
       bmiShowI();
       $('.error').hide();
       inputWeight.removeClass('inputError');
       inputHeight.removeClass('inputError');
       inputHeightIn.removeClass('inputError');
      }
    });
});



//Reset BMI input on click
function bmiResetI() {
document.getElementById("bmiForm").reset();
}
document.getElementById('bmiReset').addEventListener("click", bmiReset);

function bmiCalcM() {
// Get user info
  var weight = parseInt(document.getElementById("bmiKg").value);
  var height = parseInt(document.getElementById("bmiCm").value);

// Calculate user info

 var bmiMet = ((weight / Math.pow(height, 2)) * 10000).toFixed(1);
document.getElementById("bmiResults2").textContent = ("Your BMI is " + bmiMet);

      if (bmiMet < 19) {
    document.getElementById("chartInfo2").textContent = ("You are in the 'Underweight' range");
      }
      else if (bmiMet < 25) {
        document.getElementById("chartInfo2").textContent = ("You are in the 'Normal' range");
      }
      else if (bmiMet < 30) {
        document.getElementById("chartInfo2").textContent = ("You are in the 'Overweight' range");
      }
      else if (bmiMet < 40) {
        document.getElementById("chartInfo2").textContent = ("You are in the 'Obese' range");
      }
      else if (bmiMet < 54) {
      document.getElementById("chartInfo2").textContent = ("You are in the 'Extreme Obesity' range");
    }
      else {
        document.getElementById("chartInfo2").textContent = ("Please check your height and weight and try again");
      }
}

//hide/show bmi met
function bmiShowM() {
  document.getElementById('bmiHide2').style.display = "block";
}

function bmiHideM() {
  document.getElementById('bmiHide2').style.display = "none";
}

// calc metric BMI and show results onclick
$(document).ready(function(){
  var inputWeight = $("input[id='bmiKg']");
  var inputHeight = $("input[id='bmiCm']");
    $('#bmiCalcM').click(function(){
       if (inputWeight.val() == "" || inputHeight.val() == "") {
        $('#bmiKg').addClass('inputError');
        $('#bmiCm').addClass('inputError');
        $('.error1').show();

       }
else {
       bmiCalcM();
       bmiShowM();
       $('.error1').hide();
       $('#bmiKg').removeClass('inputError');
       $('#bmiCm').removeClass('inputError');
      }
    });
});

//Toggles for Imperial/Metric
$("input[name$='types']").change(function () {
  $('#bmi1').toggle();
  $('#bmi2').toggle();
  bmiHideI();
  bmiHideM();
});


 $("input[name$='bmr']").change(function () {
   $('#bmr1').toggle();
   $('#bmr2').toggle();
   bmrHideI();
   bmrHideM();
 });


// Get user info
var bmrFemale;
var bmrMale;
function bmrCalcI() {
    age = parseInt(document.getElementById("bmrAge").value);
    weight = parseInt(document.getElementById("bmrWeight").value);
    heightft = parseInt(document.getElementById("bmrHeightft").value);
    heightin = parseInt(document.getElementById("bmrHeightin").value);
// Calculate user info
if (document.getElementById('male').checked) {
  var heightTotal = heightft * 12 + +heightin;
  bmrMale = 66.47 + (6.23 * weight) + (12.7 * heightTotal) - (6.755 * age);
  document.getElementById("bmrResults").textContent = ("Your BMR is " +bmrMale.toFixed(1));
 } else if (document.getElementById('female').checked) {
  var heightTotal = heightft * 12 + +heightin;
  bmrFemale = 655.1 + (4.35 * weight) + (4.7 * heightTotal) - (4.7 * age);
  document.getElementById("bmrResults").textContent = ("Your BMR is " +bmrFemale.toFixed(1));
    }
   }

//TDEE for imperial BMR
var male = document.getElementById("male");
var female = document.getElementById("female");
var activity = document.getElementById("select");
activity.addEventListener("change", energy);
function energy(){
  if (female.checked) {
  var eFemale = Math.round(bmrFemale * activity.value);
  document.getElementById('maintain').textContent = ("You need "+eFemale+ " calories daily to maintain your weight");
  document.getElementById('onePound').textContent = ((eFemale -500)+ " calories daily to lose one pound a week");
  document.getElementById('twoPound').textContent = ((eFemale -1000)+ " calories daily to lose two pounds a week");
  document.getElementById('gPound').textContent = ((eFemale +500)+ " calories daily to gain one pound a week");
  document.getElementById('gTwoPound').textContent = ((eFemale +1000)+ " calories daily to gain two pounds a week");
  }
  else if (male.checked) {
  var eMale = Math.round(bmrMale * activity.value);
    document.getElementById('maintain').textContent = ("You need " +eMale+ " calories to maintain your weight");
    document.getElementById('onePound').textContent = ((eMale -500)+ " calories daily to lose one pound a week");
    document.getElementById('twoPound').textContent = ((eMale -1000)+ " calories daily to lose two pounds a week");
    document.getElementById('gPound').textContent = ((eMale +500)+ " calories daily to gain one pound a week");
    document.getElementById('gTwoPound').textContent = ((eMale +1000)+ " calories daily to gain two pounds a week");
  }
}


// Hide/Show Imperial BMR
function bmrShowI() {
   document.getElementById("bmrHide1").style.display = "block";
}

function bmrHideI() {
   document.getElementById("bmrHide1").style.display = "none";
}


//Calulate Imperial BMR and show results on click
$(document).ready(function () {
  var inputAge = $("input[id='bmrAge']");
  var inputWeight = $("input[id='bmrWeight']");
  var inputHeight = $("input[id='bmrHeightft']");
  var inputHeightIn = $("input[id='bmrHeightin']");
  $('#bmrCalcI').click(function () {
    if (inputAge.val() == "" || inputWeight.val() == "" || inputHeight.val() == "" || inputHeightIn.val() == "" || male.checked == false && female.checked == false) {
      inputAge.addClass('inputError');
      inputWeight.addClass('inputError');
      inputHeight.addClass('inputError');
      inputHeightIn.addClass('inputError');
      $('.error2').show();
      $('#bmrHide1').hide();
    } else {
      bmrCalcI();
      bmrShowI();
      $('.error2').hide();
       inputAge.removeClass('inputError');
       $('#bmrWeight').removeClass('inputError');
       $('#bmrHeightft').removeClass('inputError');
       $('#bmrHeightin').removeClass('inputError');
    }
  });
});

//reset bmr on click - NEEDS WORK
function bmrReset() {
document.getElementById("bmrForm").reset();
}
document.getElementById('bmrReset').addEventListener("click", bmrReset);


//BMR metric formula
var bmrFemaleM;
var bmrMaleM;
function bmrCalcM() {
  var age = parseInt(document.getElementById("bmrAgeM").value);
  var weight = parseInt(document.getElementById("bmrKg").value);
  var height = parseInt(document.getElementById("bmrCm").value);

// Calculate user info
if (document.getElementById('maleM').checked) {
  bmrMaleM = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
  document.getElementById("bmrResults2").textContent = ("Your BMR is " +bmrMaleM.toFixed(1));
} else if (document.getElementById('femaleM').checked) {

  bmrFemaleM = 655.1 + (9.563 * weight) + (1.85 * height) - (4.7 * age);
  document.getElementById("bmrResults2").textContent = ("Your BMR is " +bmrFemaleM.toFixed(1));
    }
   }

// TDEE metric BMR
   var maleM = document.getElementById("maleM");
   var femaleM = document.getElementById("femaleM");
   var activityM = document.getElementById("selectM");
   activityM.addEventListener("change", energyM);
   function energyM(){
     if (femaleM.checked) {
     var eFemale = Math.round(bmrFemaleM * activityM.value);
     document.getElementById('maintainM').textContent = ("You need "+eFemale+ " calories daily to maintain your weight");
     document.getElementById('onePoundM').textContent = ((eFemale -500)+ " calories daily to lose 0.07 stone a week");
     document.getElementById('twoPoundM').textContent = ((eFemale -1000)+ " calories daily to lose 0.14 stone a week");
     document.getElementById('gPoundM').textContent = ((eFemale +500)+ " calories daily to gain 0.07 stone a week");
     document.getElementById('gTwoPoundM').textContent = ((eFemale +1000)+ " calories daily to gain 0.14 stone a week");
     }
     else if (maleM.checked) {
     var eMale = Math.round(bmrMaleM * activityM.value);
       document.getElementById('maintainM').textContent = ("You need " +eMale+ " calories to maintain your weight");
       document.getElementById('onePoundM').textContent = ((eMale -500)+ " calories daily to lose 0.07 stone a week");
       document.getElementById('twoPoundM').textContent = ((eMale -1000)+ " calories daily to lose 0.14 stone a week");
       document.getElementById('gPoundM').textContent = ((eMale +500)+ " calories daily to gain 0.07 stone a week");
       document.getElementById('gTwoPoundM').textContent = ((eMale +1000)+ " calories daily to gain 0.14 stone a week");
     }
   }

// hide/show for bmr
   function bmrShowM() {
      document.getElementById("bmrHide2").style.display = "block";
   }
   function bmrHideM() {
      document.getElementById("bmrHide2").style.display = "none";
   }

   //Calulate metric BMR and show results on click
   $(document).ready(function(){
       $('#bmrCalcM').click(function(){
          bmrCalcM();
          bmrShowM();

       });
   });

   $(document).ready(function () {
     var inputAge = $("input[id='bmrAgeM']");
     var inputWeight = $("input[id='bmrKg']");
     var inputHeight = $("input[id='bmrCm']");
     
     $('#bmrCalcM').click(function () {
       if (inputAge.val() == "" || inputWeight.val() == "" || inputHeight.val() == "" || maleM.checked == false && femaleM.checked == false) {
         inputAge.addClass('inputError');
         inputWeight.addClass('inputError');
         inputHeight.addClass('inputError');
         
         $('.error3').show();
         $('#bmrHide2').hide();
       } else {
         bmrCalcM();
         bmrShowM();
         $('.error3').hide();
         inputAge.removeClass('inputError');
         inputWeight.removeClass('inputError');
         inputHeight.removeClass('inputError');
        
       }
     });
   });

    $("input[name$='bmr']").change(function () {
      $('#bmr1').toggle();
      $('#bmr2').toggle();
      bmrHideI();
      bmrHideM();
    });


   

// input limits

var limitKeys = document.querySelectorAll('form');
limitKeys.forEach(function(elem) {
elem.addEventListener("keydown", function (e) {
   if ([69, 187, 188, 189, 190].includes(e.keyCode)) {
           e.preventDefault();
   }
          });
      });
      
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


//Meal Randomizer
var protein = [
{type: 'Chicken', calories: 296, protein: 59.86, fat: 6.21, carbs: 0, img: "images/pexels-photo-616354.jpeg"},
{type: 'Turkey',  calories: 300, protein: 50, fat: 6.21, carbs: 0, img: "images/pexels-photo-265393.jpeg"},
{type: 'Salmon', calories: 182, protein: 25.44, fat: 8.13, carbs: 0, img: "images/pexels-photo-842142.jpeg"},
{type: 'Tuna', calories: 184, protein: 29.91, fat: 6.28, carbs: 0, img: "images/appetite-banana-calories-catering-161481.jpeg"},
{type: 'Steak', calories: 212, protein: 29.33, fat: 9.67, carbs: 0, img: "images/pexels-photo-341048.png"},
];

var carb = [
  {type: 'Brown Rice', calories: 123, protein: 2.74	, fat: 0.97, carbs: 25.58, img: "images/pexels-photo-723198.jpeg"},
  {type: 'Wild Rice', calories: 101, protein: 3.99, fat: 0.34,	 carbs: 21.34, img: "images/supersavory-wild-rice-pilaf-ck.jpg"},
  {type: 'Quinoa', calories: 120, protein: 4.40, fat: 1.92, carbs: 21.30, img: "images/pan-1832926_640.jpg"},
  {type: 'Baked Potato', calories: 93, protein: 2.50, fat: 0.13, carbs: 21.15, img: "images/potatoes-vegetables-erdfrucht-bio-162673.jpg"},
  {type: 'Sweet Potato', calories: 90, protein: 2.01, fat: 0.15, carbs: 20.71, img: "images/pexels-photo-89247.png"}
  ];

var veg = [
  {type: 'Green Beans', calories: 35, protein: 1.89, fat: 0.28, carbs: 7.88, img: "images/pexels-photo-185473.jpeg"},
  {type: 'Broccoli', calories: 33, protein: 3.83, fat: 0.52, carbs: 3.12, img: "images/brocoli-vegetables-salad-green-161514.jpeg"},
  {type: 'Carrots', calories: 35, protein: 0.76, fat: 0.18, carbs: 8.22, img: "images/pexels-photo-65174.jpeg"},
  {type: 'Spinach', calories: 23, protein: 2.97	, fat: 0.26, carbs: 3.75, img: "images/food-salad-healthy-lunch.jpg"},
  {type: 'Kale', calories: 28, protein: 1.84, fat: 0.40, carbs: 5.63, img: "images/kale-2317181_640.jpg"},
  {type: 'Cauliflower', calories: 23, protein: 29.33, fat: 0.45, carbs: 4.11, img: "images/pexels-photo-461245.jpeg"},
  {type: 'Sweet Peas', calories: 84, protein: 5.36, fat: 0.22, carbs: 15.63, img: "images/pexels-photo-255469.jpeg"},
  {type: 'Zucchini', calories: 15, protein: 1.14, fat: 0.36, carbs: 2.69, img: "images/pexels-photo-128420.jpeg"},
  {type: 'Cabbage', calories: 12, protein: 1.10	, fat: 0.17	, carbs: 2.23, img: "images/pexels-photo-209482.jpeg"},
];

var calorieP;
var proteinP;
var fatP;
var carbP;
function randomProtein() {
var randomNumber = Math.floor(Math.random()*5+0);
var typeP = protein[randomNumber].type;
calorieP = protein[randomNumber].calories;
proteinP = protein[randomNumber].protein;
fatP = protein[randomNumber].fat;
carbP = protein[randomNumber].carbs;
var picP = protein[randomNumber].img;
document.getElementById("meat").textContent = typeP;
document.getElementById("caloriesP").textContent = ("Calories: " +calorieP);
document.getElementById("proteinP").textContent = ("Protein: " +proteinP.toFixed(1)+"g");
document.getElementById("fatP").textContent = ("Fat: " +fatP.toFixed(1)+"g");
document.getElementById("carbP").textContent = ("Carbs: " +carbP.toFixed(1)+"g");
document.getElementById("picP").src = picP;
}

var calorieC;
var proteinC;
var fatC;
var carbC;
function randomCarb() {
var randomNumber = Math.floor(Math.random()*5+0);
var typeC = carb[randomNumber].type;
 calorieC = carb[randomNumber].calories;
 proteinC = carb[randomNumber].protein;
 fatC = carb[randomNumber].fat;
 carbC = carb[randomNumber].carbs;
var picC= carb[randomNumber].img;
document.getElementById("carb").textContent = typeC;
document.getElementById("caloriesC").textContent = ("Calories: " +calorieC);
document.getElementById("proteinC").textContent = ("Protein: " +proteinC.toFixed(1)+"g");
document.getElementById("fatC").textContent = ("Fat: " +fatC.toFixed(1)+"g");
document.getElementById("carbC").textContent = ("Carbs: " +carbC.toFixed(1)+"g");
document.getElementById("picC").src = picC;
}

var calorieV;
var proteinV;
var fatV;
var carbV;
function randomVeg() {
var randomNumber = Math.floor(Math.random()*9+0);
var typeV = veg[randomNumber].type;
 calorieV = veg[randomNumber].calories;
 proteinV = veg[randomNumber].protein;
 fatV = veg[randomNumber].fat;
 carbV = veg[randomNumber].carbs;
var picV= veg[randomNumber].img;
document.getElementById("veg").textContent = typeV;
document.getElementById("caloriesV").textContent = ("Calories: " +calorieV);
document.getElementById("proteinV").textContent = ("Protein: " +proteinV.toFixed(1)+"g");
document.getElementById("fatV").textContent = ("Fat: " +fatV.toFixed(1)+"g");
document.getElementById("carbV").textContent = ("Carbs: " +carbV.toFixed(1)+"g");
document.getElementById("picV").src = picV;
}

function totalValue(){
  var totalCal = calorieP + calorieC + calorieV;
  var totalPro = proteinP + proteinC + proteinV;
  var totalFat = fatP + fatC + fatV;
  var totalCarb = carbP + carbC + carbV;
  document.getElementById("totalCal").textContent = ("Calories: " +totalCal);
  document.getElementById("totalPro").textContent = ("Protein: " +totalPro.toFixed(1)+"g");
  document.getElementById("totalFat").textContent = ("Fat: " +totalFat.toFixed(1)+"g");
  document.getElementById("totalCarb").textContent = ("Carbs: " +totalCarb.toFixed(1)+"g");
  }

function showMeal() {
   document.getElementById('mealHide').style.display = "block";
}

$(document).ready(function(){
    $('#randomMeal').click(function(){
       randomProtein();
       randomCarb();
       randomVeg();
       showMeal();
       totalValue();
    });
});

//Water Intake
var intWater = document.getElementById('activeW');
function water() {
var intWeight = document.getElementById('intWeight').value;
var totalWater = Math.round(intWater.value * intWeight);
document.getElementById("totalWater").textContent = ("You need " +totalWater+ " ounces of water daily");
}

$(document).ready(function(){
    $('#intCalc').click(function(){
       water();
     });
});

//Workout Randomizer
var cardio = ['Elliptical' , 'Arc Trainer' , 'Treadmill' , 'StairMaster' , 'Stationary Bike'];
var upper = [
  {muscle:'Bicep' , exercises: ['Cable Curl', 'Dumbbell Curl', 'Hammer Curl']},
  {muscle: 'Tricep', exercises: ['Tricep Extension' , 'Dips' , 'Skull Crusher']},
  {muscle: 'Chest', exercises: ['Dumbbell Press' , 'Fly', 'Incline Chest Press']},
  {muscle: 'Shoulder', exercises: ['Shoulder Press' , 'Front Raises' , 'Lateral Raises']},
];

var lower = [
  {muscle:'Quadricep', exercises: ['Leg Press', 'Leg Extensions', 'Squats']},
  {muscle: 'Hamstring', exercises: ['Lying Hamstring Curl', 'Leg Curls', 'Lunges']},
  {muscle: 'Calf', exercises: ['Calf Raises']},
   ];

function randomCardio() {
  var cardioEx = cardio[Math.floor(Math.random()*cardio.length)];
  document.getElementById('cardioEx').textContent = cardioEx;
}

function randomUpper() {
  var randomNumber = Math.floor(Math.random()*4+0);
  var upperMus = upper[randomNumber].muscle;
  var upperEx = upper[randomNumber].exercises.join(', ');
  document.getElementById('upperMus').textContent = upperMus;
  document.getElementById('upperEx').textContent = upperEx;
}

function randomLower() {
  var randomNumber = Math.floor(Math.random()*3+0);
  var lowerMus = lower[randomNumber].muscle;
  var lowerEx = lower[randomNumber].exercises.join(', ');
  document.getElementById('lowerMus').textContent = lowerMus;
  document.getElementById('lowerEx').textContent = lowerEx;
}

function workShow() {
  document.getElementById("workHide").style.display = "inline-flex";
}

$(document).ready(function(){
    $('#randomEx').click(function(){
       randomCardio();
       randomUpper();
       randomLower();
       workShow();
      
    });
});


//Mifflin-St. Jeor Equation
//According to Nutrition Therapy and Pathophysiology, the Mifflin-St. Jeor equation was developed in 1990 and has been validated by more than 10 studies. The Mifflin-St. Jeor equation is gaining popularity among the nutrition professionals for accurately estimating caloric needs. The equation is as follows: for females = 10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age - 161; for males= 10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age + 5. These equations are also multiplied by the //same physical activity factors to estimate daily caloric needs.
