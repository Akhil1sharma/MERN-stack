1.What are Anonymous Functions in JavaScript?
Anonymous functions are functions that are declared without a name. They are often used as inline function expressions or as arguments to other functions. For example:

const greet = function() {
  console.log("Hello!");
};
```
Anonymous functions are commonly used in callbacks, event handlers, and IIFEs (Immediately Invoked Function Expressions).



2. Strict Comparison (`===`) vs Abstract Comparison (`==`)
- Strict Comparison (`===`):
  - Compares both value and type.
  - Returns `true` only if both the value and type are the same.
  - Example: `5 === "5"` returns `false`.

- **Abstract Comparison (`==`)**:
  - Compares values after performing type coercion (converting one type to another).
  - Returns `true` if the values are the same after coercion.
  - Example: `5 == "5"` returns `true`.

---

3. Difference Between Arrow Functions and Regular Functions
| Feature                | Arrow Functions                          | Regular Functions                     |
|------------------------|-----------------------------------------|--------------------------------------|
| Syntax            | Shorter syntax: `(a, b) => a + b`       | Uses `function` keyword              |
| this` Binding     | Lexical `this` (inherits from parent)   | Own `this` (depends on how called)   |
| Arguments Object   | No `arguments` object                   | Has `arguments` object               |
| Constructor       | Cannot be used as constructors          | Can be used as constructors          |
| Method Definition  | Not ideal for object methods            | Ideal for object methods             |


4. What is Hoisting in JavaScript?
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope during the compilation phase. This allows you to use functions and variables before they are declared. However:
- Only declarations are hoisted, not initializations.
- Example:
  
  console.log(x); 
  var x = 5;

 5.JavaScript is a Garbage Collected Programming Language
JavaScript automatically manages memory allocation and deallocation using a garbage collector. It identifies and frees up memory that is no longer in use (e.g., unreachable objects). This prevents memory leaks and makes memory management easier for developers.

 6. Shallow Copy vs Deep Copy
- Shallow Copy:
  - Copies only the top-level properties of an object or array.
  - Nested objects or arrays are shared between the original and the copy.
  - Example: Using `Object.assign()` or the spread operator (`...`).

- Deep Copy:
  - Creates a completely independent copy of the object or array, including all nested objects or arrays.
  - Example: Using `JSON.parse(JSON.stringify(obj))` or libraries like Lodash.



7. What is `Object.freeze`?
`Object.freeze` is a method that makes an object immutable. It prevents:
- Adding new properties.
- Modifying existing properties.
- Deleting properties.
Example:

const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; 
console.log(obj.a); 



8.-implementation of the function that generates a random number between two ranges:


function randomInTwoRanges(min1, max1, min2, max2) {
    // Generate a random number in the first range
    const range1 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
    // Generate a random number in the second range
    const range2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    // Randomly choose between the two ranges
    return Math.random() < 0.5 ? range1 : range2;
}

// Example usage:
console.log(randomInTwoRanges(-100, 0, 800, 900));
