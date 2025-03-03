
// 1. Type and Interface

// Type: Defines a custom type
type PersonType = {
    name: string;
    age: number;
};

// Interface: Defines a contract for an object
interface PersonInterface {
    name: string;
    age: number;
    greet(): void;
}

// Using Type
const person1: PersonType = {
    name: "Alice",
    age: 25,
};

console.log("Person (Type):", person1);

// Using Interface
const person2: PersonInterface = {
    name: "Bob",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

console.log("Person (Interface):", person2);
person2.greet();


// 2. Class and Inheritance


// Base Class
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Animal sound");
    }
}

// Derived Class (Inheritance)
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    // Override method
    makeSound(): void {
        console.log("Woof! Woof!");
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); // Woof! Woof!
dog.displayInfo(); // Name: Buddy, Breed: Golden Retriever


// 3. Generic Types


// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

console.log("Generic Function (Number):", identity<number>(42)); // 42
console.log("Generic Function (String):", identity<string>("Hello")); // Hello

// Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(100);
console.log("Generic Class (Number):", numberBox.getValue()); // 100

const stringBox = new Box<string>("TypeScript");
console.log("Generic Class (String):", stringBox.getValue()); // TypeScript
