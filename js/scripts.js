var num1 = prompt("First Number");
var num2 = prompt("Second Number");
var normnum1 = parseInt(num1);
var normnum2 = parseInt(num2);

var add = function(normnum1, normnum2) {
return normnum1 + normnum2;
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

var addresult = add(normnum1, normnum2);
alert("The sum is: " + addresult);
