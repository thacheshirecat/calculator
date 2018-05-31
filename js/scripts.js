//Back End Functions

var add = function(normnum1, normnum2) {
return num1 + num2;
};
var subtract = function(normnum1, normnum2) {
return normnum1 - normnum2;
};
var multiply = function(normnum1, normnum2) {
return normnum1 * normnum2;
};
var divide = function(normnum1, normnum2) {
return normnum1 / normnum2;
};

//Front End Functions

$(document).ready(function() {
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));

  alert(add(number1, number2));
});
