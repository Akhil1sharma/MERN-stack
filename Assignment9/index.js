const express = require('express');
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

//Routes

//app.get("/users",(req, res)=> {
 //   const html ='
  //  <ul>
  //  ${users.map((user) => '<li>${user.first_name} </li>').join("")
   // </ul>
   // ';
   // res.send(html);
//});
//RESTAPI
app.get("/api/users", (req, res) =>{
    return res.json(users);
});

app.get("/api/users/:id",(req,res) =>{
    const id = req.params.id;
    const user =users.find((user) => user.id === id);
    return res.json(user);
})
app.post("/api/users", (req, res) =>{
    //todo: create new user
    return res.json({Status: "Pending"});
});
app.patch("/api/users/:id", (req, res) =>{
    return res.json({Status: "Pending"});
});
app.delete("/api/users/:id", (req, res) =>{
    return res.json({Status: "Pending"});
});
app.listen(PORT, () => console.log('Server Started at PORT:${PORT}'));