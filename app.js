const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine","ejs");
app.use(expresslayouts);

app.use(express.urlencoded({extended:true}));
app.get("/form", (req,res) => {
    res.render("form");
});
app.post("/register", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const message= req.body.message;

    console.log(name);
    console.log(email);
    console.log(message);

    res.render("result", {
        name: name,
        email: email,
        age: message
    });

    app.post("/submit", (req, res) => {

    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.send("Please fill in all fields.");
    }

    res.render("result", {
        name,
        email,
        age
    });
    });
});
app.listen(3000,() => {
    console.log("server running on port 3000");
});



