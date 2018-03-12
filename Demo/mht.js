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


//Rest BMI input on clock
function bmiReset() {
document.getElementById("bmiForm").reset();
}
document.getElementById('bmiReset').addEventListener("click", bmiReset);

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

// input limits
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
  {type: 'Baked Potato', calories: 93, protein: 2.50, fat: 0.13, carbs: 21.15, img: "images/potatoes-vegetables-erdfrucht-bio-162673.jpeg"},
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
  //{type: 'Corn', calories: 212, protein: 29.33, fat: 9.67, carbs: 0},
  {type: 'Zucchini', calories: 15, protein: 1.14, fat: 0.36, carbs: 2.69, img: "images/pexels-photo-128420.jpeg"},
  {type: 'Cabbage', calories: 12, protein: 1.10	, fat: 0.17	, carbs: 2.23, img: "images/pexels-photo-209482.jpeg"},
  //{type: 'Squash', calories: 212, protein: 29.33, fat: 9.67, carbs: 0},
];

function randomProtein() {
var randomNumber = Math.floor(Math.random()*5+0);
var typeP = protein[randomNumber].type;
var calorieP = protein[randomNumber].calories;
var proteinP = protein[randomNumber].protein;
var fatP = protein[randomNumber].fat;
var carbP = protein[randomNumber].carbs;
var picP = protein[randomNumber].img;
document.getElementById("meat").textContent = typeP;
document.getElementById("caloriesP").textContent = "Calories: " +calorieP;
document.getElementById("proteinP").textContent = "Protein: " +proteinP;
document.getElementById("fatP").textContent = "Fat: " +fatP;
document.getElementById("carbP").textContent = "Carbs: " +carbP;
document.getElementById("picP").src = picP;

}

function randomCarb() {
var randomNumber = Math.floor(Math.random()*5+0);
var typeC = carb[randomNumber].type;
var calorieC = carb[randomNumber].calories;
var proteinC = carb[randomNumber].protein;
var fatC = carb[randomNumber].fat;
var carbC = carb[randomNumber].carbs;
var picC= carb[randomNumber].img;
document.getElementById("carb").textContent = typeC;
document.getElementById("caloriesC").textContent = "Calories: " +calorieC;
document.getElementById("proteinC").textContent = "Protein: " +proteinC;
document.getElementById("fatC").textContent = "Fat: " +fatC;
document.getElementById("carbC").textContent = "Carbs: " +carbC;
document.getElementById("picC").src = picC;
}

function randomVeg() {
var randomNumber = Math.floor(Math.random()*9+0);
var typeV = veg[randomNumber].type;
var calorieV = veg[randomNumber].calories;
var proteinV = veg[randomNumber].protein;
var fatV = veg[randomNumber].fat;
var carbV = veg[randomNumber].carbs;
var picV= veg[randomNumber].img;
document.getElementById("veg").textContent = typeV;
document.getElementById("caloriesV").textContent = "Calories: " +calorieV;
document.getElementById("proteinV").textContent = "Protein: " +proteinV;
document.getElementById("fatV").textContent = "Fat: " +fatV;
document.getElementById("carbV").textContent = "Carbs: " +carbV;
document.getElementById("picV").src = picV;
}

function showDiv() {
   document.getElementById('hide').style.display = "block";
}

$(document).ready(function(){
    $('#randomMeal').click(function(){
       randomProtein();
       randomCarb();
       randomVeg();
       showDiv();
    });
});


// Reset Button for Meal Randomizer
function mealReset(){
  document.getElementById("meat").textContent = "";
  document.getElementById("carb").textContent = "";
  document.getElementById("veg").textContent = "";
}
document.getElementById('mealReset').addEventListener("click", mealReset);

// var cardio = ['elliptical' , 'arc trainer' , 'treadmill'];
// var upper = [
//   {muscle:'bicep' , exercises: ['cable curl', 'dumbbell curl', 'hammer curl'] },
//   {muscle: 'tricep', exercises: ['tricep extension' , 'dips' , 'skull crusher'] },
//   {muscle: }
//
// var lower = ['quadricep' , 'hamstring' , 'calf' , 'glute'];
//
//
// function randomWorkout() {};



//Mifflin-St. Jeor Equation
//According to Nutrition Therapy and Pathophysiology, the Mifflin-St. Jeor equation was developed in 1990 and has been validated by more than 10 studies. The Mifflin-St. Jeor equation is gaining popularity among the nutrition professionals for accurately estimating caloric needs. The equation is as follows: for females = 10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age - 161; for males= 10 x (Weight in kg) + 6.25 x (Height in cm) - 5 x age + 5. These equations are also multiplied by the //same physical activity factors to estimate daily caloric needs.
