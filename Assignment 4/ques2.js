// Write a JavaScript program to calculate multiplication and division of two
//numbers (input from user).
function calculateOperations() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }

    const multiplication = num1 * num2;
    const division = num2 !== 0 ? num1 / num2 : "Cannot divide by zero.";

    console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
    console.log(`Division: ${num1} / ${num2} = ${division}`);
}

// Call the function
calculateOperations();
