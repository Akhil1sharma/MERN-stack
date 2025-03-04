// Array Destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b, c); // 1 2 3

// Object Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;
console.log(name, age); // John 30
//2

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

//3
console.log("Start");

setTimeout(() => {
    console.log("Async operation complete");
}, 1000);

console.log("End");

//4
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Promise resolved!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then((result) => console.log(result)) // Promise resolved!
    .catch((error) => console.log(error));

//5

async function fetchData() {
    try {
        const response = await new Promise((resolve) => {
            setTimeout(() => resolve("Data fetched!"), 1000);
        });
        console.log(response); // Data fetched!
    } catch (error) {
        console.log(error);
    }
}

fetchData();

//6
new Promise((resolve) => resolve(10))
    .then((result) => result * 2)
    .then((result) => result + 5)
    .then((result) => console.log(result)); // 25

//7
// String to Number
const str = "123";
const num = Number(str);
console.log(num, typeof num); // 123 number

// Number to String
const num2 = 456;
const str2 = String(num2);
console.log(str2, typeof str2); // 456 string


//8
const name = "Alice";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// My name is Alice and I am 25 years old.

//9
// Logical AND (&&) - If the first value is truthy, return the second value
const result1 = true && "Hello";
console.log(result1); // Hello

// Logical OR (||) - If the first value is falsy, return the second value
const result2 = false || "World";
console.log(result2); // World

// Nullish Coalescing (??) - Return the second value only if the first is null or undefined
const result3 = null ?? "Default";
console.log(result3); // Default
