
const time = new Date();

document.getElementById("time").innerHTML = time.toLocaleString("en-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

$(document).ready(function(){
  $('#clear').click(function(){
    $('#clear').html("A");

  });

});
$(document).ready(function(){
  $(".values .result").addClass("pad");
});

$(document).ready(function () {
  var thisValue = 0;
  var valueOne = 0;
  var valueTwo = 0;
  var result = 0;

  $(".x1").click(function (event) {
    $(".button").click(function(){
      $(".valueSymbol").hide(".symbol");
    })
    $(".x1").click(function(){
      $(".valueTwo").click(function(){
        $(".valueOne").hide(".number");
      });
    })


    $(".symbol").css({ "pointer-effect": "auto " });

    if ($(".x1").hasClass("first-active")) {
      thisValue = $(this).text();
      $(".valueOne").append(thisValue);

      valueOne = $(".valueOne").text();
    } else if ($(".x1").hasClass("second-active")) {
      thisValue = $(this).text();
      $(".valueTwo").append(thisValue);

      valueTwo = $(".valueTwo").text();
    }
  });

  $(".symbol").click(function () {
    symbol = $(this).html();
    $(".valueSymbol").text(symbol);
    symbol = $(".valueSymbol").text();

    $(".x1").removeClass("first-active").addClass("second-active");
  });

  // calls this function when the equal to button is clicked
  $(".equal").click(function () {
    valueOne = parseFloat(valueOne);
    valueTwo = parseFloat(valueTwo);

    if (symbol == "+") {
      result = valueOne + valueTwo;
    } else if (symbol == "-") {
      result = valueOne - valueTwo;
    } else if (symbol == "÷") {
      result = valueOne / valueTwo;
    } else if (symbol == "×") {
      result = valueOne * valueTwo;
    } else if (symbol == "%") {
      result = valueOne % valueTwo;
    }

    $(".result").text(result);
    setStrAsValue(getResultOfOperationAsStr());
    valueStrInMemory = null;
    operatorInMemory = null;

    $( ".result-container").text()  = result.toprecision(9);
  });

  $(".clear").click(function () {

    $(".x1").addClass("first-active");
    $("symbol").css({ "pointer-events": "none" });

    $(".valueOne").text(" ");
    $(".valueSymbol").text("");
    $(".valueTwo").text("");
    $(".result").text("");

    
  });

  $(".plus_minus").click(function () {
    if (Math.sign(result) == 1) {
      result *= -1;
    } else if (Math.sign(result) == -1) {
      result *= 1;
    } else if (Math.sign(result) == 0) {
      result *= 0;
    } else {
      $(".valueOne").text("There was an error!");
    }

    $(".result").text(result);
  });
  $(".button operator").hide();
});

/*
//DOM Elements


const hourEl = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const  displayEl = document.querySelector(".display");
  
const  clearEl = document.querySelector(".clear");
const  plus_minusEl = document.querySelector(".plus_minus");
const  additionEl = document.querySelector(".addition");
const  subtractionEl = document.querySelector(".subtraction");
const  multiplicationEl = document.querySelector(".multiplication");
const  divisionEl = document.querySelector(".division");
const  equalEl = document.querySelector(".equal");

const  decimalEl = document.querySelector(".decimal");
const  number0El = document.querySelector(".number_0");
const  number1El = document.querySelector(".number1");
const  number2El = document.querySelector(".number2");
const  number3El = document.querySelector(".number3");
const  number4El = document.querySelector(".number4");
const  number5El = document.querySelector(".number5");
const  number6El = document.querySelector(".number6");
const  number7El = document.querySelector(".number7");
const  number8El = document.querySelector(".number8");
const  number9El = document.querySelector(".number9");

const numberElArray = [
  number0El, number1El, number2El, number3El, number4El, number5El, 
  number6El, number7El, number8El, number9El
];



//functions

const getValue 
 
const handleNumberClick = (numstr) => {
  const currentDisplayStr =display1El.textContent;
  dispalayEl.textContent = currentDisplayStr + numstr
  if (currentDisplayStr === '0'){
    display1El.textContent = numStr;
  } else {
    display1El.textContent =
      parseFloat(currentDisplyStr + numStr).toLocaleString();
  }
};













//dd event listeners to numbers nd button
for (let i=0; i < numberElArray.length;  i++) {
  const numberEl = numberElArray[i];
  numberEl.addEventListener('click',() => {
    handleNumberClick(i.toString());
  });
};

//set up time 
const updatetime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12){
    currentHour -= 12;
  }
  hourEl.textContent = currentHour.toString();
  minuteEl.textContent =currentMinute.toString().padStart(2,"0");

} 
setInterval(updatetime, 1000);
updatetime();
**/




