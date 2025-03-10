1. What is NodeJS? 
   Node.js is a runtime environment that allows you to run JavaScript on the server side. It is built on Chrome's V8 JavaScript engine and uses an event-driven, non-blocking I/O model, making it lightweight and efficient for building scalable network applications.

2. What is V8 Engine?**  
   The V8 Engine is an open-source JavaScript engine developed by Google and used in Chrome. It compiles JavaScript directly to native machine code for faster execution. Node.js uses V8 to execute JavaScript code outside the browser.

3. **What is Event Loop in NodeJS?**  
   The Event Loop is a mechanism in Node.js that allows it to perform non-blocking I/O operations, despite being single-threaded. It continuously checks the call stack and processes events from the event queue, enabling asynchronous behavior.

4. **What is the use of `tsconfig.json` file?**  
   The `tsconfig.json` file is used in TypeScript projects to specify compiler options and define the root files and project settings. It helps the TypeScript compiler understand how to transpile TypeScript code into JavaScript.

5. **What are the methods provided by `fs` module to manipulate files?**  
   The `fs` (file system) module in Node.js provides methods like:
   - `fs.readFile()` to read files.
   - `fs.writeFile()` to write files.
   - `fs.appendFile()` to append data to files.
   - `fs.unlink()` to delete files.
   - `fs.rename()` to rename files.
   - `fs.mkdir()` to create directories.

6. **What is API?**  
   An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured.

7. **What is JSON format?**  
   JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is based on key-value pairs and arrays.

8. **Why we use JSON format for API?**  
   JSON is used for APIs because it is lightweight, easy to parse, and language-independent. It is widely supported across programming languages and platforms, making it ideal for data exchange between clients and servers.

9. **What is a Framework?**  
   A framework is a pre-built structure or set of tools that provides a foundation for developing software applications. It simplifies development by offering reusable components, libraries, and best practices.

10. **How an HTTP Communication works.**  
    HTTP communication involves a client (e.g., a browser) sending a request to a server, which processes the request and sends back a response. The request includes a method (e.g., GET, POST), headers, and sometimes a body. The response includes a status code, headers, and often a body with the requested data.

11. **What is Middleware in ExpressJS?**  
    Middleware in Express.js are functions that have access to the request (`req`), response (`res`), and the next middleware in the application’s request-response cycle. They are used to perform tasks like logging, authentication, and data parsing before the final request handler is executed.


Step-by-Step Implementation
1. Install Dependencies
Run the following commands to set up the project:

npm init -y
npm install express body-parser
npm install --save-dev typescript @types/node @types/express ts-node nodemon
Add the following scripts to package.json:

"scripts": {
  "start": "node dist/server.js",
  "dev": "nodemon src/server.ts",
  "build": "tsc"
}
2. Initialize TypeScript
Create a tsconfig.json file:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
3. Define the User Model
Create src/models/userModel.ts:

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
}
4. File Utility Functions
Create src/utils/fileUtils.ts to handle reading and writing to the JSON file:

import { User } from "../models/userModel";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../data/users.json");

export const readUsersFromFile = (): User[] => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const writeUsersToFile = (users: User[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
};
5. User Controller
Create src/controllers/userController.ts:

import { Request, Response } from "express";
import { User, Gender } from "../models/userModel";
import { readUsersFromFile, writeUsersToFile } from "../utils/fileUtils";

export const createUser = (req: Request, res: Response): void => {
  const users = readUsersFromFile();
  const newUser: User = req.body;

  if (users.some((user) => user.email === newUser.email)) {
    res.status(400).json({ message: "Email already exists" });
    return;
  }

  users.push(newUser);
  writeUsersToFile(users);
  res.status(201).json({ message: "User created", user: newUser });
};

export const updateUser = (req: Request, res: Response): void => {
  const users = readUsersFromFile();
  const { email } = req.params;
  const updatedUser: User = req.body;

  const userIndex = users.findIndex((user) => user.email === email);
  if (userIndex === -1) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };
  writeUsersToFile(users);
  res.status(200).json({ message: "User updated", user: users[userIndex] });
};

export const getUserByEmail = (req: Request, res: Response): void => {
  const users = readUsersFromFile();
  const { email } = req.params;

  const user = users.find((user) => user.email === email);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  res.status(200).json(user);
};

export const deleteUser = (req: Request, res: Response): void => {
  const users = readUsersFromFile();
  const { email } = req.params;

  const filteredUsers = users.filter((user) => user.email !== email);
  if (filteredUsers.length === users.length) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  writeUsersToFile(filteredUsers);
  res.status(200).json({ message: "User deleted" });
};

export const getAllUsers = (req: Request, res: Response): void => {
  const users = readUsersFromFile();
  res.status(200).json(users);
};
6. User Routes
Create src/routes/userRoutes.ts:

import express from "express";
import {
  createUser,
  updateUser,
  getUserByEmail,
  deleteUser,
  getAllUsers,
} from "../controllers/userController";

const router = express.Router();

router.post("/users", createUser);
router.put("/users/:email", updateUser);
router.get("/users/:email", getUserByEmail);
router.delete("/users/:email", deleteUser);
router.get("/users", getAllUsers);

export default router;
7. Express App
Create src/app.ts:

import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(bodyParser.json());
app.use("/api", userRoutes);

export default app;
8. Server Setup
Create src/server.ts:

import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
9. Run the Application
Start the development server:

npm run dev
Build and run the production server:

npm run build
npm start
