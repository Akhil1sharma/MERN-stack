Write a JavaScript program to convert temperatures to and from Celsius,
//Fahrenheit.

function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

// Test cases
const celsius = 60;
const fahrenheit = 45;

console.log(`${celsius}°C is ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is ${fahrenheitToCelsius(fahrenheit)}°C`);
