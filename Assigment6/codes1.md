1. Average of Array Numbers

const nums = [10, 20, 30, 40, 50];
const average = nums.reduce((sum, num) => sum + num, 0) 
console.log("Average:", average); 

2. Swap Two Numbers by Reference

function swapNumbers(a, b) {
  [a.value, b.value] = [b.value, a.value];
}

let num1 = { value: 5 };
let num2 = { value: 10 };
swapNumbers(num1, num2);
console.log("num1:", num1.value, "num2:", num2.value); 

3. Print the Fibonacci Sequence
   
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

console.log("Fibonacci Sequence:", fibonacci(10)); 

4. Sort an Array in Ascending and Descending Order
javascript
Copy
const arr = [5, 3, 8, 1, 2];
const ascending = [...arr].sort((a, b) => a - b);
const descending = [...arr].sort((a, b) => b - a);

console.log("Ascending:", ascending); 
console.log("Descending:", descending); 

5. Show a Variable Value in an HTML Webpage Using DOM
html
Copy
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Variable</title>
</head>
<body>
  <p id="output"></p>
  <script>
    const value = "Hello, World!";
    document.getElementById("output").textContent = value;
  </script>
</body>
</html>
