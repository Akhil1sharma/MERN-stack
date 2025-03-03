// 1. Data Types

console.log("===== Data Types =====");

// Primitive Data Types
let stringType = "Hello, World!"; // String
let numberType = 42; // Number
let booleanType = true; // Boolean
let undefinedType; // Undefined
let nullType = null; // Null
let symbolType = Symbol("unique"); // Symbol
let bigIntType = 9007199254740991n; // BigInt

// Non-Primitive Data Types
let objectType = { key: "value" }; // Object
let arrayType = [1, 2, 3]; // Array

console.log("Primitive Types:", stringType, numberType, booleanType, undefinedType, nullType, symbolType, bigIntType);
console.log("Non-Primitive Types:", objectType, arrayType);


// 2. Objects and Arrays

console.log("\n===== Objects and Arrays =====");

// Object Example
let person = {
    name: "Alice",
    age: 25,
    isStudent: false,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    },
};

console.log("Object:", person);
person.greet(); // Method call

// Array Example
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);

// 3. Array Operations

console.log("\n===== Array Operations =====");

let numbers = [1, 2, 3, 4, 5];

// map: Transform each element
let doubled = numbers.map((num) => num * 2);
console.log("map (doubled):", doubled);

// filter: Filter elements based on a condition
let evens = numbers.filter((num) => num % 2 === 0);
console.log("filter (evens):", evens);

// find: Find the first element that matches a condition
let firstEven = numbers.find((num) => num % 2 === 0);
console.log("find (first even):", firstEven);

// reduce: Accumulate values into a single result
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum):", sum);

// some: Check if at least one element matches a condition
let hasEven = numbers.some((num) => num % 2 === 0);
console.log("some (has even):", hasEven);

// every: Check if all elements match a condition
let allEven = numbers.every((num) => num % 2 === 0);
console.log("every (all even):", allEven);

// indexOf: Find the index of an element
let index = numbers.indexOf(3);
console.log("indexOf (index of 3):", index);


// 4. Strings

console.log("\n===== Strings =====");

let str = "Hello, World!";

// Common String Methods
console.log("Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring:", str.substring(0, 5));
console.log("Includes 'World':", str.includes("World"));
console.log("Index of 'World':", str.indexOf("World"));


// 5. Truthy & Falsy Values

console.log("\n===== Truthy & Falsy Values =====");

// Falsy Values: false, 0, "", null, undefined, NaN
// Truthy Values: Everything else

let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach((value) => {
    console.log(`Is ${value} falsy?`, !value);
});

let truthyValues = [true, 1, "Hello", {}, []];
truthyValues.forEach((value) => {
    console.log(`Is ${value} truthy?`, !!value);
});

// 6. Operators

console.log("\n===== Operators =====");

// Arithmetic Operators
console.log("Addition:", 5 + 3);
console.log("Subtraction:", 5 - 3);
console.log("Multiplication:", 5 * 3);
console.log("Division:", 5 / 3);
console.log("Modulus:", 5 % 3);

// Comparison Operators
console.log("5 > 3:", 5 > 3);
console.log("5 == '5':", 5 == "5"); // Loose equality
console.log("5 === '5':", 5 === "5"); // Strict equality

// Logical Operators
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);


// 7. Call by Value and Call by Reference

console.log("\n===== Call by Value and Call by Reference =====");

// Call by Value (Primitive Types)
let a = 10;
let b = a; // b gets a copy of a's value
b = 20;
console.log("Call by Value - a:", a); // 10 (unchanged)
console.log("Call by Value - b:", b); // 20

// Call by Reference (Non-Primitive Types)
let obj1 = { value: 10 };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.value = 20;
console.log("Call by Reference - obj1:", obj1); // { value: 20 }
console.log("Call by Reference - obj2:", obj2); // { value: 20 }


// 8. Shallow and Deep Copy

console.log("\n===== Shallow and Deep Copy =====");

// Shallow Copy
let originalArray = [1, 2, { key: "value" }];
let shallowCopy = [...originalArray]; // Spread operator for shallow copy
shallowCopy[2].key = "new value";
console.log("Shallow Copy - Original Array:", originalArray); // Affected
console.log("Shallow Copy - Shallow Copy:", shallowCopy);

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(originalArray)); // Deep copy using JSON methods
deepCopy[2].key = "deep value";
console.log("Deep Copy - Original Array:", originalArray); // Unaffected
console.log("Deep Copy - Deep Copy:", deepCopy);


// 10. `undefined` vs `null` vs `NaN`

console.log("\n===== `undefined` vs `null` vs `NaN` =====");

let undefinedVar;
let nullVar = null;
let nanVar = NaN;

console.log("undefined:", undefinedVar); // Undefined (uninitialized)
console.log("null:", nullVar); // Null (intentional absence of value)
console.log("NaN:", nanVar); // NaN (invalid number)

console.log("typeof undefined:", typeof undefinedVar); // "undefined"
console.log("typeof null:", typeof nullVar); // "object" (historical bug)
console.log("typeof NaN:", typeof nanVar); // "number"
