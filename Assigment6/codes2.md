1. Reverse an Array
Input: [1, 2, 3, 4, 5, 6]

const arr = [1, 2, 3, 4, 5, 6];
const reversed = arr.reverse();
console.log(reversed); 

2. Explain the Properties of the join Array Method
The join method concatenates all array elements into a string, separated by a specified delimiter.


const arr = ["Hello", "World"];
const joined = arr.join(" "); 
console.log(joined); 

3. Show All Values of an Array in an HTML Webpage Using DOM and forEach
html

<p id="output"></p>
<script>
  const arr = [1, 2, 3, 4, 5];
  arr.forEach((item) => {
    document.getElementById("output").textContent += item + " ";
  });
</script>

4. Merge Two Sets in JavaScript
Use the Set class and the spread operator ... to merge sets.

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const merged = new Set([...set1, ...set2]);
console.log([...merged]); 

