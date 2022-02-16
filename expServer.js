const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.send("Welcome to the home page")
})

app.get("/calculator", (req, res) => {
    res.sendFile(`${__dirname}/home.html`)
})

app.get("/about", (req, res) => {
    res.send("Welcome to my page. This is Bipin Poudel and I am learning NodeJs for Backend")
})

app.get("/contact", (req, res) => {
    res.send("contact me to poudel7700@gmail.com")
})

app.post("/calculator", (req, res) => {
    console.log(req.body)
    let n1 = parseInt(req.body.firstValue);
    let n2 = parseInt(req.body.secValue);

    res.send(`The required sum is ${n1 + n2}`);
});

app.listen(5000, console.log("Server running on PORT 5000"));