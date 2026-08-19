const express = require("express");
const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.get("/", (req,res) => {
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
        message: message
    });

    app.post("/register", (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.send("Fill in all fields.");
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



