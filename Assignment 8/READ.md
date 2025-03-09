1. What are the basic data types in TypeScript?
ANS-Basic data types in TypeScript: string, number, boolean, null, undefined, bigint, and symbol.
2. What is Generic data type.
   ANS- Generic data type: A reusable type that works with multiple types, defined using type parameters (e.g., Array<T>).
3. What is type inferring in TS.
   ANS- Type inferring in TS: TypeScript automatically assigns types to variables based on their initial values (e.g., let x = 10 infers x as number).
   
4. What are the possible ways to define typing for functions.
   ANS- Typing for functions: Use function declarations, arrow functions, or type aliases/interfaces (e.g., type Add = (a: number, b: number) => number).
  
5.How to define Generic type for Classes
ANS Generic type for classes: Define generics in class declarations (e.g., class Box<T> { value: T; }).
6. PROGRAM
Define the types in typescript for the given following JavaScript code.
Todo:
- Define type/interface for a single Todo object.
- Define type for each function.
- Do not use `any` (TS Data Type) type of typescript.
Code: 
var todos = [];
function add(name, description) {
 return todos.push({
 name: name,
 description: description,
 done: false
 });       }
function remove(index) {
 return todos.splice(index, 1);
}
function list() {
 todos.forEach(function(todo, index) {
 console.log(index + " - " + todo.name);
 });
}
function update(index, name, description) {
 todos[index].name = name;
 todos[index].description = description;
 return todos[index];
}
Answer
// Define the type/interface for a single Todo object
interface Todo {
  name: string;
  description: string;
  done: boolean;
}

// Define the type for the todos array
let todos: Todo[] = [];

// Define the type for the add function
function add(name: string, description: string): number {
  return todos.push({
    name: name,
    description: description,
    done: false
  });
}

// Define the type for the remove function
function remove(index: number): Todo[] {
  return todos.splice(index, 1);
}

// Define the type for the list function
function list(): void {
  todos.forEach((todo: Todo, index: number) => {
    console.log(index + " - " + todo.name);
  });
}

// Define the type for the update function
function update(index: number, name: string, description: string): Todo {
  todos[index].name = name;
  todos[index].description = description;
  return todos[index];
}
