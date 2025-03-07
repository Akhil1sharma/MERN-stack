1. Objects in JavaScript
In JavaScript, objects are like containers that hold related data and functionality. Think of them as a box where you can store multiple pieces of information (called properties) and actions (called methods) that belong together. For example, if you want to represent a person, you can create an object that stores their name, age, and a function to greet someone.

Key Features of Objects:
Properties: These are the pieces of data stored in an object. For example, a person object might have properties like name and age.

Methods: These are functions that belong to the object. For example, a person object might have a method like greet() to say hello.

Dynamic: You can add, modify, or delete properties and methods at any time.

Prototypes: Objects can inherit properties and methods from other objects, which is called prototypal inheritance.

How Objects Work:
You can create objects using object literals (e.g., { key: value }), constructors, or the Object.create() method.

Objects are reference types, meaning when you assign an object to a variable, you're assigning a reference to that object, not a copy of it.


EG:

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};


2. var vector = {
    _x: 0,
    _y: 0,
    create: function(x, y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },
    setX: function(x) {
        this._x = x;
    },
    setY: function(y) {
        this._y = y;
    }
};


Ans
class Vector {
    // Constructor to initialize the vector with x and y values
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    // Method to set the x value
    setX(x) {
        this._x = x;
    }

    // Method to set the y value
    setY(y) {
        this._y = y;
    }

    // Method to get the x value
    getX() {
        return this._x;
    }

    // Method to get the y value
    getY() {
        return this._y;
    }

    // Static method to create a new Vector instance
    static create(x, y) {
        return new Vector(x, y);
    }

    // Method to display the vector's coordinates
    display() {
        console.log(`Vector coordinates: (${this._x}, ${this._y})`);
    }
}


v1.display(); 

// 2. Create a vector using the static create method
let v2 = Vector.create(30, 40);
v2.display(); 

// 3. Modify the vectors using setX and setY
v1.setX(50);
v1.setY(60);
v1.display(); 

v2.setX(100);
v2.setY(200);
v2.display(); // Output: Vector coordinates: (100, 200)

console.log(`v1 coordinates: (${v1.getX()}, ${v1.getY()})`); 
console.log(`v2 coordinates: (${v2.getX()}, ${v2.getY()})`); 





3. Do you think javascript is the language of the future?

Why JavaScript Could Be the Language of the Future
Ubiquity:

JavaScript is the only language that runs natively in web browsers, making it essential for front-end web development. As long as the web exists, JavaScript will remain relevant.

With the rise of frameworks like React, Angular, and Vue.js, JavaScript has become the backbone of modern web development.

Full-Stack Development:

With Node.js, JavaScript can now be used for both front-end and back-end development, making it a full-stack language. This reduces the need for developers to learn multiple languages for different parts of a project.

Large Ecosystem:

JavaScript has one of the largest ecosystems of libraries, frameworks, and tools (e.g., npm, Yarn, Webpack, etc.). This makes it easy to build complex applications quickly.

Community Support:

JavaScript has a massive and active community. This means there are countless resources, tutorials, and forums to help developers learn and solve problems.

Continuous Evolution:

JavaScript is constantly evolving with new features (e.g., ES6+). Features like arrow functions, async/await, and modules have made the language more powerful and developer-friendly.

Cross-Platform Development:

JavaScript is no longer limited to the web. Tools like React Native, Electron, and Ionic allow developers to build mobile apps, desktop apps, and even IoT applications using JavaScript.

AI and Machine Learning:

Libraries like TensorFlow.js are bringing machine learning capabilities to JavaScript, making it a contender in the AI space.

1. Array Method Implementations
javascript
Copy
// a. forEach
const forEachExample = (arr) => {
  arr.forEach((item, index) => {
    console.log(`Index: ${index}, Value: ${item}`);
  });
};

// b. map
const mapExample = (arr) => {
  return arr.map((item) => item * 2);
};

// c. filter
const filterExample = (arr) => {
  return arr.filter((item) => item > 5);
};

// d. reduce
const reduceExample = (arr) => {
  return arr.reduce((acc, item) => acc + item, 0);
};

// e. includes
const includesExample = (arr, value) => {
  return arr.includes(value);
};

// f. some
const someExample = (arr) => {
  return arr.some((item) => item % 2 === 0);
};

// g. every
const everyExample = (arr) => {
  return arr.every((item) => item > 0);
};

// Test cases
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("forEach:");
forEachExample(numbers);

console.log("map:", mapExample(numbers));

console.log("filter:", filterExample(numbers));

console.log("reduce:", reduceExample(numbers));

console.log("includes 5:", includesExample(numbers, 5));

console.log("some even:", someExample(numbers));

console.log("every positive:", everyExample(numbers));

2. Simple Array Implementation
javascript
Copy
const simpleArray = [10, 20, 30, 40, 50];

// Accessing elements
console.log("First element:", simpleArray[0]);
console.log("Last element:", simpleArray[simpleArray.length - 1]);

// Adding elements
simpleArray.push(60); // Add to the end
simpleArray.unshift(0); // Add to the beginning

// Removing elements
simpleArray.pop(); // Remove from the end
simpleArray.shift(); // Remove from the beginning

// Slicing and splicing
const slicedArray = simpleArray.slice(1, 3); // Slice from index 1 to 2
console.log("Sliced array:", slicedArray);

simpleArray.splice(2, 1); // Remove 1 element at index 2
console.log("After splice:", simpleArray);

// Sorting
const sortedArray = [...simpleArray].sort((a, b) => a - b);
console.log("Sorted array:", sortedArray);

// Reversing
const reversedArray = [...simpleArray].reverse();
console.log("Reversed array:", reversedArray);

3. To-Do List Implementation
javascript
Copy
let ToDo = [];
let Completed = [];

// Helper function to generate a unique ID
const generateId = () => {
  return ToDo.length > 0 ? ToDo[ToDo.length - 1].id + 1 : 1;
};

// 1. Add a task
const add = (title) => {
  if (!title) return -1; // Return -1 if title is empty
  const newTask = { id: generateId(), task: title };
  ToDo.push(newTask);
  return newTask.id;
};

// 2. Remove a task
const remove = (id) => {
  const index = ToDo.findIndex((task) => task.id === id);
  if (index === -1) return false; // Return false if id is not found
  ToDo.splice(index, 1);
  return true;
};

// 3. Update a task
const update = (id, title) => {
  const task = ToDo.find((task) => task.id === id);
  if (!task) return false; // Return false if id is not found
  task.task = title;
  return true;
};

// 4. Mark a task as completed
const markAsCompleted = (id) => {
  const taskIndex = ToDo.findIndex((task) => task.id === id);
  if (taskIndex === -1) return false; // Return false if id is not found
  const [task] = ToDo.splice(taskIndex, 1); // Remove from ToDo
  Completed.push(task); // Add to Completed
  return true;
};

// Test cases
console.log("Add task 1:", add("Learn JavaScript")); // ID: 1
console.log("Add task 2:", add("Build a project")); // ID: 2
console.log("Add task 3:", add("")); // Returns -1 (invalid title)

console.log("ToDo:", ToDo);

console.log("Remove task 2:", remove(2)); // Returns true
console.log("ToDo after removal:", ToDo);

console.log("Update task 1:", update(1, "Master JavaScript")); // Returns true
console.log("ToDo after update:", ToDo);

console.log("Mark task 1 as completed:", markAsCompleted(1)); // Returns true
console.log("ToDo after completion:", ToDo);
console.log("Completed tasks:", Completed);

