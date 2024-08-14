var userInput = prompt('Enter Temperature in Fahrenheit');
var Fahrenheit = parseFloat(userInput);

var celsius = 0;
celsius = 5/9 * (Fahrenheit - 32);
console.log('Temperature in Celsius is = ',celsius);


var kelvin = 0;
kelvin = celsius + 273;
console.log('Temperature in Kelvin is = ', kelvin);