const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/register", (req, res) => {

    const { name, email, message } = req.body;


    if (!name || !email || !message) {
        return res.send("Fill in all fields.");
    }

    console.log(name);
    console.log(email);
    console.log(message);

    // Store/process the submitted data

    // Redirect after POST
    res.redirect("/success");
});

app.get("/success", (req, res) => {
    res.render("result");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});