//Back End Functions

var add = function(num1, num2) {
return num1 + num2;
};
var subtract = function(num1, num2) {
return num1 - num2;
};
var multiply = function(num1, num2) {
return num1 * num2;
};
var divide = function(num1, num2) {
return num1 / num2;
};

//Front End Functions

$(document).ready(function() {

$("form#add").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
    $("#addoutput").text(result);
});

$("form#subtract").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var result = subtract(number1, number2);
    $("#suboutput").text(result);
});

$("form#multiply").submit(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#mult1").val());
  var number2 = parseInt($("#mult2").val());
  var result = multiply(number1, number2);
    $("#multoutput").text(result);
});

$("form#divide").submit(function(event) {
    event.preventDefault();
  var number1 = parseFloat($("#div1").val());
  var number2 = parseFloat($("#div2").val());
  var result = divide(number1, number2);
    $("#divoutput").text(result);
});

});
