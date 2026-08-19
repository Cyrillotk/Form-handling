const express = require("express");
const expresslayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine","ejs");
app.use(expresslayouts);

app.use(express.urlencoded({extended:true}));
app.get("/form", (req,res) => {
    res.render("form",{
        title: "Registration"
    });
});

app.post("/register", (req,res) => {
    console.log(req.body);
    res.send("registration successful");
})



